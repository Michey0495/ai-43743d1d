import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SceneCard } from "@/components/scene-card";
import { scenes } from "@/lib/scenes";
import { guides } from "@/lib/guides";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <p className="text-blue-400 text-base font-medium mb-4 tracking-wide">
          登録不要 / 10秒で生成 / 完全無料
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          英語メールに30分
          <br />
          かけていませんか?
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          日本語で要点を入力するだけ。AIがビジネスシーンに最適な英語メールを
          <span className="text-white font-semibold">件名付き</span>
          で即生成します。
        </p>
        <p className="text-white/50 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          表現解説付きだから、使うたびに英語力が上がる。
          翻訳ツールでもAIチャットでもない、新しいメール作成体験。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/generate">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 cursor-pointer transition-all duration-200">
              今すぐ無料で試す
            </Button>
          </Link>
        </div>
        <p className="text-white/40 text-sm mt-4">
          1日3回まで無料 / アカウント登録不要
        </p>
      </section>

      {/* Social Proof */}
      <section className="mb-20">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "10+", label: "ビジネスシーン" },
            { value: "3", label: "トーン設定" },
            { value: "10秒", label: "で生成完了" },
            { value: "0円", label: "登録不要" },
          ].map((stat) => (
            <div key={stat.label} className="px-4">
              <div className="text-3xl font-bold text-blue-400">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          3ステップで英語メール完成
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "シーンを選ぶ",
              desc: "自己紹介、依頼、お詫びなど10+のビジネスシーンから選択",
            },
            {
              step: "2",
              title: "日本語で入力",
              desc: "伝えたい要点を日本語で入力。トーンと関係性も設定可能",
            },
            {
              step: "3",
              title: "英語メール完成",
              desc: "件名付きの英語メールが即生成。日本語の表現解説も付属",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-center"
            >
              <div className="text-blue-400 text-3xl font-bold mb-3">
                {item.step}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Scenes */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          対応ビジネスシーン
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenes.map((scene) => (
            <SceneCard key={scene.id} scene={scene} />
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          eigo-ai が選ばれる理由
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "ChatGPTより速い",
              desc: "毎回のプロンプト設計が不要。シーン選択と日本語入力だけで、最適な英語メールを即生成。",
            },
            {
              title: "DeepLより正確",
              desc: "翻訳ではなく、最初からメール形式で生成。Dear/Regards/Subjectなどのフォーマットも自動対応。",
            },
            {
              title: "使うたびに英語力UP",
              desc: "生成メールに日本語の表現解説付き。なぜこの英語表現を使ったかを理解できる教育的価値。",
            },
            {
              title: "トーン自動調整",
              desc: "フォーマル/スタンダード/カジュアルのトーンと、相手との関係性に応じて英語表現を最適化。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          こんな方に最適
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "海外取引先とやり取りする方",
              desc: "日々の英語メールを10秒で完了。フォーマルな表現も自動選択。",
            },
            {
              title: "英語に自信がない方",
              desc: "日本語で入力するだけ。表現解説で「なぜこの英語?」も理解できる。",
            },
            {
              title: "外資系に転職した方",
              desc: "ビジネスシーン別の英語メール作法を、実践しながら習得。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          英語メール基礎知識
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guide/${guide.slug}`}
              className="block bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-blue-500/30"
            >
              <h3 className="text-white font-bold text-lg mb-2">
                {guide.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="bg-white/5 border border-white/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            英語メールの悩み、今日で終わりにしませんか?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            登録不要。日本語を入力するだけで、プロフェッショナルな英語ビジネスメールが完成します。
          </p>
          <Link href="/generate">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-10 py-6 cursor-pointer transition-all duration-200">
              無料で英語メールを生成する
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
