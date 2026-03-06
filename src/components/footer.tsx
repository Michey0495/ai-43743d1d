import Link from "next/link";
import { scenes } from "@/lib/scenes";
import { guides } from "@/lib/guides";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">eigo-ai</h3>
            <p className="text-white/70 text-base leading-relaxed">
              日本語で入力するだけで、AIが完璧な英語ビジネスメールを自動生成。
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">シーン別メール</h3>
            <ul className="space-y-2">
              {scenes.slice(0, 5).map((scene) => (
                <li key={scene.id}>
                  <Link
                    href={`/scenes/${scene.slug}`}
                    className="text-white/70 hover:text-white cursor-pointer transition-all duration-200 text-base"
                  >
                    {scene.name}メール
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">ガイド</h3>
            <ul className="space-y-2">
              {guides.map((guide) => (
                <li key={guide.id}>
                  <Link
                    href={`/guide/${guide.slug}`}
                    className="text-white/70 hover:text-white cursor-pointer transition-all duration-200 text-base"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-base">
          &copy; {new Date().getFullYear()} eigo-ai by Ghostfee
        </div>
      </div>
    </footer>
  );
}
