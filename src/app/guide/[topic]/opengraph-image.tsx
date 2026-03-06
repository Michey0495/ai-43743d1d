import { ImageResponse } from "next/og";
import { guides } from "@/lib/guides";

export const runtime = "edge";
export const alt = "eigo-ai ビジネス英語ガイド";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const guide = guides.find((g) => g.slug === topic);
  const title = guide?.title ?? topic;

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
              fontSize: "56px",
              fontWeight: "bold",
              color: "#60a5fa",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            ビジネス英語ガイド
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            {guide?.description ?? ""}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
