import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eigo.ezoai.jp"),
  title: {
    default: "eigo-ai | 日本語から英語ビジネスメールをAI自動生成",
    template: "%s | eigo-ai",
  },
  description:
    "日本語で要点を入力するだけで、AIが完璧な英語ビジネスメールを自動生成。15+のビジネスシーンに対応。無料で使えます。",
  keywords: [
    "英語メール",
    "ビジネス英語",
    "英文メール",
    "AI",
    "自動生成",
    "英語メール 書き方",
    "英文メール テンプレート",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://eigo.ezoai.jp",
    siteName: "eigo-ai",
    title: "eigo-ai | 日本語から英語ビジネスメールをAI自動生成",
    description:
      "日本語で要点を入力するだけで、AIが完璧な英語ビジネスメールを自動生成。無料で使えます。",
  },
  twitter: {
    card: "summary_large_image",
    title: "eigo-ai | 日本語から英語ビジネスメールをAI自動生成",
    description:
      "日本語で要点を入力するだけで、AIが完璧な英語ビジネスメールを自動生成。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
