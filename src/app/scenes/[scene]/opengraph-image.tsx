import { ImageResponse } from "next/og";
import { scenes } from "@/lib/scenes";


export const runtime = "edge";
export const alt = "eigo-ai シーン別英語メール生成";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ scene: string }>;
}) {
  const { scene: slug } = await params;
  const scene = scenes.find((s) => s.slug === slug);
  const sceneName = scene?.name ?? slug;

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
              fontSize: "48px",
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
              fontSize: "64px",
              fontWeight: "bold",
              color: "#60a5fa",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            英語{sceneName}メール
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            日本語入力だけでAIが自動生成
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            トーン・関係性設定 / 表現解説付き / 登録不要・無料
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
