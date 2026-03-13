import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { type, message } = payload;
  const repo = "ai-43743d1d";

  if (!message?.trim() || typeof message !== "string") {
    return NextResponse.json({ error: "Message required" }, { status: 400 });
  }

  if (message.length > 1000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  const labels: Record<string, string> = {
    bug: "bug",
    feature: "enhancement",
    other: "feedback",
  };

  const title = `[${type}] ${message.slice(0, 80)}${message.length > 80 ? "..." : ""}`;
  const issueBody = `## User Feedback\n\n**Type:** ${type}\n\n**Message:**\n${message}\n\n---\n*Auto-created from in-app feedback widget*`;

  const token = process.env.GITHUB_TOKEN;

  if (token) {
    try {
      await fetch(`https://api.github.com/repos/Michey0495/${repo}/issues`, {
        method: "POST",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body: issueBody,
          labels: [labels[type] || "feedback"],
        }),
      });
    } catch (e) {
      console.error("Failed to create GitHub issue:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
