export interface Scene {
  id: string;
  name: string;
  description: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  placeholderPoints: string;
}

export const scenes: Scene[] = [
  {
    id: "self-introduction",
    name: "自己紹介",
    description: "新しい取引先やチームメンバーへの自己紹介メール",
    slug: "self-introduction",
    seoTitle: "英語 自己紹介メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、プロフェッショナルな英語の自己紹介メールをAIが自動生成。ビジネスシーンに最適な表現を使用。",
    placeholderPoints: "例: 営業部の田中です。来週から御社のプロジェクトを担当します。よろしくお願いします。",
  },
  {
    id: "request",
    name: "依頼",
    description: "資料送付や対応をお願いするメール",
    slug: "request",
    seoTitle: "英語 依頼メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、丁寧な英語の依頼メールをAIが自動生成。適切な表現でビジネスリクエストを伝えます。",
    placeholderPoints: "例: 来週の会議資料を金曜日までに送っていただけますか。",
  },
  {
    id: "apology",
    name: "お詫び",
    description: "ミスや遅延に対するお詫びメール",
    slug: "apology",
    seoTitle: "英語 お詫びメール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、適切な英語のお詫びメールをAIが自動生成。誠意が伝わるビジネス表現を使用。",
    placeholderPoints: "例: 納品が3日遅れてしまい申し訳ありません。原因は部品の調達遅延です。",
  },
  {
    id: "reminder",
    name: "催促",
    description: "返信や対応の催促メール",
    slug: "reminder",
    seoTitle: "英語 催促メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、角の立たない英語の催促メールをAIが自動生成。ビジネス関係を保つ適切な表現。",
    placeholderPoints: "例: 先週お送りした見積書について、ご確認いただけましたでしょうか。",
  },
  {
    id: "thank-you",
    name: "お礼",
    description: "面談後や協力に対するお礼メール",
    slug: "thank-you",
    seoTitle: "英語 お礼メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、心のこもった英語のお礼メールをAIが自動生成。感謝を適切に伝えます。",
    placeholderPoints: "例: 昨日はお忙しい中、面談のお時間をいただきありがとうございました。",
  },
  {
    id: "decline",
    name: "断り",
    description: "提案や依頼を丁寧に断るメール",
    slug: "decline",
    seoTitle: "英語 断りメール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、丁寧な英語の断りメールをAIが自動生成。関係を損なわない適切な表現。",
    placeholderPoints: "例: ご提案いただいた案件ですが、スケジュールの都合上お受けできません。",
  },
  {
    id: "report",
    name: "報告",
    description: "進捗や結果の報告メール",
    slug: "report",
    seoTitle: "英語 報告メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、簡潔な英語の報告メールをAIが自動生成。ビジネスレポートに最適。",
    placeholderPoints: "例: プロジェクトAの進捗報告です。現在80%完了、来週中に納品予定です。",
  },
  {
    id: "inquiry",
    name: "問い合わせ",
    description: "製品やサービスについての問い合わせメール",
    slug: "inquiry",
    seoTitle: "英語 問い合わせメール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、的確な英語の問い合わせメールをAIが自動生成。ビジネス問い合わせに最適。",
    placeholderPoints: "例: 御社のクラウドサービスの料金プランと導入事例について教えてください。",
  },
  {
    id: "appointment",
    name: "アポイント",
    description: "会議やミーティングの日程調整メール",
    slug: "appointment",
    seoTitle: "英語 アポイントメール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、スムーズな英語のアポイントメールをAIが自動生成。日程調整を効率化。",
    placeholderPoints: "例: 来週の火曜日か水曜日の午後に30分ほどお時間をいただけますか。",
  },
  {
    id: "farewell",
    name: "退職挨拶",
    description: "退職・異動時の挨拶メール",
    slug: "farewell",
    seoTitle: "英語 退職挨拶メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、心のこもった英語の退職挨拶メールをAIが自動生成。良い印象で終える表現。",
    placeholderPoints: "例: 3月末で退職します。2年間お世話になりました。後任は鈴木です。",
  },
];

export const tones = [
  { id: "formal" as const, name: "フォーマル", description: "取引先・上位者向け" },
  { id: "standard" as const, name: "スタンダード", description: "同僚・一般ビジネス" },
  { id: "casual" as const, name: "カジュアル", description: "親しい同僚・友人" },
] as const;

export const relationships = [
  { id: "boss" as const, name: "上司" },
  { id: "colleague" as const, name: "同僚" },
  { id: "client" as const, name: "取引先" },
  { id: "stranger" as const, name: "初対面" },
  { id: "friend" as const, name: "友人" },
] as const;

export type Tone = (typeof tones)[number]["id"];
export type Relationship = (typeof relationships)[number]["id"];

export function getSceneBySlug(slug: string): Scene | undefined {
  return scenes.find((s) => s.slug === slug);
}
