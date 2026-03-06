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

      {/* Before/After Demo */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          こんなに変わる
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="text-white/40 text-sm font-medium mb-3">BEFORE: あなたの入力</div>
            <p className="text-white/70 text-base leading-relaxed">
              「納品が2日遅れた。原因は部署間の確認プロセスが遅れたため。再発防止策として承認フローを短縮する予定」
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
            <div className="text-blue-400 text-sm font-medium mb-3">AFTER: AI生成メール</div>
            <p className="text-white/90 text-sm leading-relaxed font-mono">
              Subject: Sincere Apologies for the Delivery Delay<br /><br />
              Dear Mr. Johnson,<br /><br />
              I sincerely apologize for the two-day delay in our delivery. This was caused by an unforeseen delay in our internal review process between departments.<br /><br />
              To prevent this from recurring, we are streamlining our approval workflow to ensure faster turnaround...<br /><br />
              Best regards
            </p>
          </div>
        </div>
        <p className="text-center text-white/40 text-sm mt-4">
          所要時間: 10秒 / 表現解説付き
        </p>
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

      {/* Mid-page CTA */}
      <section className="mb-20 text-center">
        <Link href="/generate">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-4 cursor-pointer transition-all duration-200">
            10秒で英語メールを作る
          </Button>
        </Link>
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

      {/* Time Savings */}
      <section className="mb-20">
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            あなたの時間を取り戻す
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <div className="text-white/40 text-sm mb-1">従来の方法</div>
              <div className="text-white/60 text-2xl font-bold">30分</div>
              <div className="text-white/40 text-xs">/ 1通あたり</div>
            </div>
            <div className="flex items-center">
              <div className="text-white/30 text-2xl">&rarr;</div>
            </div>
            <div>
              <div className="text-blue-400 text-sm mb-1">eigo-ai</div>
              <div className="text-blue-400 text-2xl font-bold">10秒</div>
              <div className="text-blue-400/60 text-xs">/ 1通あたり</div>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-6">
            1日3通なら月29.5時間の節約。年間354時間を本来の仕事に。
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="mb-20">
        <div className="flex flex-wrap justify-center gap-6 text-center">
          {[
            "SSL暗号化通信",
            "入力データ非保存",
            "アカウント不要",
            "広告なし",
          ].map((badge) => (
            <div
              key={badge}
              className="bg-white/5 border border-white/10 rounded-full px-5 py-2 text-white/50 text-sm"
            >
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          よくある質問
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "eigo-aiは無料で使えますか?",
              a: "はい、登録不要で1日3回まで無料でご利用いただけます。メールアドレスやクレジットカードの登録は一切不要です。",
            },
            {
              q: "どんなビジネスシーンに対応していますか?",
              a: "自己紹介、依頼、お詫び、催促、お礼、断り、報告、問い合わせ、アポイント、退職挨拶の10種類のビジネスシーンに対応しています。",
            },
            {
              q: "ChatGPTやDeepLとの違いは何ですか?",
              a: "eigo-aiはビジネスメール生成に特化しており、毎回のプロンプト設計が不要です。シーン選択と日本語入力だけで最適な英語メールを生成し、表現解説付きで英語力も向上します。",
            },
            {
              q: "生成されたメールの品質は信頼できますか?",
              a: "最新のAI技術（Claude）を活用し、ビジネスメールのフォーマットや英語表現の正確性を重視して生成しています。トーンや関係性に応じた適切な表現を自動選択します。",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="bg-white/5 border border-white/10 rounded-lg group"
            >
              <summary className="text-white font-medium text-base p-5 cursor-pointer transition-all duration-200 hover:bg-white/5 list-none flex items-center justify-between">
                {item.q}
                <span className="text-white/30 ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="text-white/70 text-base leading-relaxed px-5 pb-5">
                {item.a}
              </p>
            </details>
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
          <p className="text-white/30 text-xs mt-4">
            メールアドレス不要 / クレジットカード不要 / 1日3回まで無料
          </p>
        </div>
      </section>
    </div>
  );
}
