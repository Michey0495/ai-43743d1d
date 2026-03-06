import { NextRequest, NextResponse } from "next/server";
import { buildGeneratePrompt } from "@/lib/prompts";
import { checkRateLimit } from "@/lib/rate-limit";
import { scenes } from "@/lib/scenes";
import type { Tone, Relationship } from "@/lib/scenes";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const { allowed, remaining } = checkRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: "本日の無料生成回数（3回）を超えました。明日またお試しください。" },
      { status: 429 }
    );
  }

  if (!ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "APIキーが設定されていません。環境変数 ANTHROPIC_API_KEY を設定してください。" },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が不正です" },
      { status: 400 }
    );
  }
  const { scene, tone, relationship, recipientName, senderName, points } = body;

  if (!scene || !tone || !relationship || !points) {
    return NextResponse.json(
      { error: "必須パラメータが不足しています" },
      { status: 400 }
    );
  }

  if (typeof points !== "string" || points.length > 2000) {
    return NextResponse.json(
      { error: "入力テキストが長すぎます（2000文字以内）" },
      { status: 400 }
    );
  }

  if ((recipientName && (typeof recipientName !== "string" || recipientName.length > 100)) ||
      (senderName && (typeof senderName !== "string" || senderName.length > 100))) {
    return NextResponse.json(
      { error: "名前は100文字以内で入力してください" },
      { status: 400 }
    );
  }

  const validScene = scenes.find((s) => s.id === scene);
  if (!validScene) {
    return NextResponse.json({ error: "無効なシーンです" }, { status: 400 });
  }

  const validTones: Tone[] = ["formal", "standard", "casual"];
  const validRelationships: Relationship[] = ["boss", "colleague", "client", "stranger", "friend"];
  if (!validTones.includes(tone) || !validRelationships.includes(relationship)) {
    return NextResponse.json({ error: "無効なパラメータです" }, { status: 400 });
  }

  const prompt = buildGeneratePrompt({
    scene: validScene.name,
    tone,
    relationship,
    recipientName,
    senderName,
    points,
  });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2048,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("Anthropic API error:", errData);
      return NextResponse.json(
        { error: "AI生成に失敗しました。しばらく後にお試しください。" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const text = data.content[0]?.text || "";

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: "生成結果の解析に失敗しました" },
        { status: 500 }
      );
    }

    let result;
    try {
      result = JSON.parse(jsonMatch[0]);
    } catch {
      return NextResponse.json(
        { error: "生成結果の解析に失敗しました" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        subject: result.subject,
        body: result.body,
        explanation: result.explanation,
        remaining,
      },
      {
        headers: { "X-RateLimit-Remaining": String(remaining) },
      }
    );
  } catch (error) {
    console.error("Generate error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
