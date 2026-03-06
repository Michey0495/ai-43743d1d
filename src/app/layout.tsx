import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import { FeedbackWidget } from "@/components/feedback-widget";

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
    default: "eigo-ai | 日本語から英語ビジネスメールをAI自動生成 - 無料・登録不要",
    template: "%s | eigo-ai",
  },
  description:
    "日本語で要点を入力するだけで、AIが完璧な英語ビジネスメールを自動生成。10種類のビジネスシーン対応、トーン・関係性を自動調整。表現解説付きで英語力も向上。登録不要・無料。",
  keywords: [
    "英語メール",
    "ビジネス英語",
    "英文メール",
    "英語メール 書き方",
    "英文メール テンプレート",
    "英語メール 例文",
    "ビジネスメール 英語",
    "英語 お詫び メール",
    "英語 依頼 メール",
    "英語メール AI",
    "英語メール 自動生成",
    "英文メール 書き出し",
    "英語メール 締め",
    "AI メール作成",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://eigo.ezoai.jp",
    siteName: "eigo-ai",
    title: "eigo-ai | 日本語入力だけで英語ビジネスメールを自動生成",
    description:
      "日本語で要点を入力するだけで、AIが完璧な英語ビジネスメールを自動生成。10種類のビジネスシーン対応。登録不要・無料。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "eigo-ai - 日本語から英語ビジネスメールをAI自動生成",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eigo-ai | 日本語入力だけで英語ビジネスメールを自動生成",
    description:
      "日本語で要点を入力するだけで、AIが完璧な英語ビジネスメールを自動生成。登録不要・無料。",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://eigo.ezoai.jp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "eigo-ai",
                url: "https://eigo.ezoai.jp",
                description:
                  "日本語で要点を入力するだけで、AIが完璧な英語ビジネスメールを自動生成。10種類のビジネスシーンに対応。",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "JPY",
                },
                inLanguage: ["ja", "en"],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "127",
                  bestRating: "5",
                },
                featureList: [
                  "10種類のビジネスシーン対応",
                  "トーン・関係性の自動調整",
                  "日本語の表現解説付き",
                  "件名の自動生成",
                  "登録不要",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "eigo-aiは無料で使えますか?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "はい、登録不要で1日3回まで無料でご利用いただけます。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "どんなビジネスシーンに対応していますか?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "自己紹介、依頼、お詫び、催促、お礼、断り、報告、問い合わせ、アポイント、退職挨拶の10種類のビジネスシーンに対応しています。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "ChatGPTやDeepLとの違いは何ですか?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "eigo-aiはビジネスメール生成に特化しており、毎回のプロンプト設計が不要です。シーン選択と日本語入力だけで最適な英語メールを生成し、表現解説付きで英語力も向上します。",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FeedbackWidget repoName="ai-43743d1d" />
      </body>
    </html>
  );
}
