import { NextRequest, NextResponse } from "next/server";

const TOOLS = [
  {
    name: "generate_english_email",
    description: "日本語の要点から英語ビジネスメールを生成します",
    inputSchema: {
      type: "object",
      properties: {
        scene: {
          type: "string",
          description:
            "シーン: self-introduction, request, apology, reminder, thank-you, decline, report, inquiry, appointment, farewell",
        },
        tone: {
          type: "string",
          enum: ["formal", "standard", "casual"],
          description: "トーン: formal(フォーマル), standard(スタンダード), casual(カジュアル)",
        },
        relationship: {
          type: "string",
          enum: ["boss", "colleague", "client", "stranger", "friend"],
          description: "関係性: boss(上司), colleague(同僚), client(取引先), stranger(初対面), friend(友人)",
        },
        recipientName: {
          type: "string",
          description: "相手の名前（省略可）",
        },
        senderName: {
          type: "string",
          description: "送信者の名前（省略可）",
        },
        points: {
          type: "string",
          description: "日本語で伝えたい要点",
        },
      },
      required: ["scene", "tone", "relationship", "points"],
    },
  },
  {
    name: "list_scenes",
    description: "利用可能なメールシーン一覧を返します",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
];

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
      { status: 400 }
    );
  }

  if (body.method === "tools/list") {
    return NextResponse.json({
      jsonrpc: "2.0",
      id: body.id,
      result: { tools: TOOLS },
    });
  }

  if (body.method === "tools/call") {
    const { name, arguments: args } = body.params;

    if (name === "list_scenes") {
      const { scenes } = await import("@/lib/scenes");
      return NextResponse.json({
        jsonrpc: "2.0",
        id: body.id,
        result: {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                scenes.map((s) => ({ id: s.id, name: s.name, description: s.description })),
                null,
                2
              ),
            },
          ],
        },
      });
    }

    if (name === "generate_english_email") {
      const baseUrl = request.nextUrl.origin;
      const res = await fetch(`${baseUrl}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(args),
      });

      const data = await res.json();

      if (!res.ok) {
        return NextResponse.json({
          jsonrpc: "2.0",
          id: body.id,
          result: {
            content: [{ type: "text", text: `Error: ${data.error}` }],
            isError: true,
          },
        });
      }

      return NextResponse.json({
        jsonrpc: "2.0",
        id: body.id,
        result: {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        },
      });
    }

    return NextResponse.json({
      jsonrpc: "2.0",
      id: body.id,
      error: { code: -32601, message: "Unknown tool" },
    });
  }

  return NextResponse.json({
    jsonrpc: "2.0",
    id: body.id,
    error: { code: -32601, message: "Method not found" },
  });
}
