import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "eigo-ai - 日本語から英語ビジネスメールをAI自動生成";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            eigo-ai
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "#60a5fa",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            日本語入力だけで
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "#60a5fa",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            英語ビジネスメールを自動生成
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            10種類のビジネスシーン対応 / 表現解説付き / 登録不要・無料
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
