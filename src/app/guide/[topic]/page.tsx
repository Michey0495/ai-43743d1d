import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { guides, getGuideBySlug } from "@/lib/guides";

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const guide = getGuideBySlug(topic);
  if (!guide) return {};

  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
    },
  };
}

export function generateStaticParams() {
  return guides.map((guide) => ({ topic: guide.slug }));
}

export default async function GuidePage({ params }: Props) {
  const { topic } = await params;
  const guide = getGuideBySlug(topic);
  if (!guide) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">{guide.title}</h1>
      <p className="text-white/70 text-lg mb-8 leading-relaxed">
        {guide.seoDescription}
      </p>

      {guide.sections.map((section) => (
        <div
          key={section.heading}
          className="bg-white/5 border border-white/10 rounded-lg p-8 mb-6"
        >
          <h2 className="text-white font-bold text-xl mb-4">
            {section.heading}
          </h2>
          <div className="text-white/70 text-base leading-loose whitespace-pre-wrap">
            {section.content}
          </div>
        </div>
      ))}

      <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-8 text-center">
        <p className="text-white/70 text-base mb-4">
          eigo-ai なら、これらの表現を自動で最適に組み合わせた英語メールを生成できます。
        </p>
        <Link href="/generate">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-4 cursor-pointer transition-all duration-200">
            英語メールを生成する
          </Button>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-white font-bold text-xl mb-6">他のガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guides
            .filter((g) => g.id !== guide.id)
            .map((g) => (
              <Link
                key={g.id}
                href={`/guide/${g.slug}`}
                className="block bg-white/5 border border-white/10 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-blue-500/30"
              >
                <h3 className="text-white font-bold text-base mb-1">
                  {g.title}
                </h3>
                <p className="text-white/70 text-sm">{g.description}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
