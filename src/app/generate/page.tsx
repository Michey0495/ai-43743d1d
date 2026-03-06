import type { Metadata } from "next";
import { Suspense } from "react";
import { GenerateForm } from "@/components/generate-form";

export const metadata: Metadata = {
  title: "英語メール生成 - 日本語入力でAI自動生成",
  description:
    "日本語で要点を入力するだけで、AIが英語ビジネスメールを自動生成。10種類のシーン・3段階のトーン・関係性に応じた最適な英語表現。登録不要・無料。",
  openGraph: {
    title: "英語メール生成 - 日本語入力でAI自動生成 | eigo-ai",
    description:
      "日本語で要点を入力するだけで、AIが英語ビジネスメールを自動生成。登録不要・無料。",
  },
  alternates: {
    canonical: "https://ai-43743d1d.ezoai.jp/generate",
  },
};

export default function GeneratePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">英語メール生成</h1>
      <p className="text-white/70 text-base mb-8 leading-relaxed">
        シーンを選び、日本語で要点を入力してください。AIが適切な英語ビジネスメールを生成します。
      </p>
      <Suspense fallback={<div className="text-white/50">読み込み中...</div>}>
        <GenerateForm />
      </Suspense>
    </div>
  );
}
