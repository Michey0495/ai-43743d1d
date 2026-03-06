import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white cursor-pointer transition-all duration-200 hover:text-blue-400">
          eigo-ai
        </Link>
        <nav aria-label="メインナビゲーション" className="flex items-center gap-6">
          <Link
            href="/generate"
            className="text-white/70 hover:text-white cursor-pointer transition-all duration-200 text-base"
          >
            メール生成
          </Link>
          <Link
            href="/guide/phrases"
            className="text-white/70 hover:text-white cursor-pointer transition-all duration-200 text-base"
          >
            フレーズ集
          </Link>
        </nav>
      </div>
    </header>
  );
}
