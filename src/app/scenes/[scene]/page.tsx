import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { scenes, getSceneBySlug } from "@/lib/scenes";

interface Props {
  params: Promise<{ scene: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scene: slug } = await params;
  const scene = getSceneBySlug(slug);
  if (!scene) return {};

  return {
    title: scene.seoTitle,
    description: scene.seoDescription,
    openGraph: {
      title: scene.seoTitle,
      description: scene.seoDescription,
    },
  };
}

export function generateStaticParams() {
  return scenes.map((scene) => ({ scene: scene.slug }));
}

export default async function ScenePage({ params }: Props) {
  const { scene: slug } = await params;
  const scene = getSceneBySlug(slug);
  if (!scene) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">
        英語{scene.name}メール - AI自動生成
      </h1>
      <p className="text-white/70 text-lg mb-8 leading-relaxed">
        {scene.seoDescription}
      </p>

      <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-8">
        <h2 className="text-white font-bold text-xl mb-4">
          {scene.name}メールの特徴
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-6">
          {scene.description}。日本語で伝えたい要点を入力するだけで、
          ビジネスシーンに適切な英語メールをAIが自動生成します。
          トーン（フォーマル/スタンダード/カジュアル）と
          関係性（上司/同僚/取引先/初対面/友人）を設定することで、
          最適な英語表現を選択します。
        </p>

        <Link href={`/generate?scene=${scene.id}`}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 cursor-pointer transition-all duration-200">
            {scene.name}メールを生成する
          </Button>
        </Link>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-8">
        <h2 className="text-white font-bold text-xl mb-4">入力例</h2>
        <p className="text-white/70 text-base leading-relaxed italic">
          {scene.placeholderPoints}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-white font-bold text-xl mb-6">
          他のビジネスシーン
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {scenes
            .filter((s) => s.id !== scene.id)
            .map((s) => (
              <Link
                key={s.id}
                href={`/scenes/${s.slug}`}
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-center cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-blue-500/30"
              >
                <span className="text-white text-base">{s.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
