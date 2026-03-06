"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-white cursor-pointer transition-all duration-200 hover:text-blue-400"
        >
          eigo-ai
        </Link>

        {/* Desktop nav */}
        <nav aria-label="メインナビゲーション" className="hidden sm:flex items-center gap-6">
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

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white/70 hover:text-white cursor-pointer transition-all duration-200 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-white/10 px-4 py-4 space-y-3">
          <Link
            href="/generate"
            onClick={() => setMenuOpen(false)}
            className="block text-white/70 hover:text-white cursor-pointer transition-all duration-200 text-base py-2"
          >
            メール生成
          </Link>
          <Link
            href="/guide/phrases"
            onClick={() => setMenuOpen(false)}
            className="block text-white/70 hover:text-white cursor-pointer transition-all duration-200 text-base py-2"
          >
            フレーズ集
          </Link>
        </nav>
      )}
    </header>
  );
}
