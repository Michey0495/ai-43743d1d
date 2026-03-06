export interface Scene {
  id: string;
  name: string;
  description: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  placeholderPoints: string;
  tips: string[];
  examplePhrases: { en: string; ja: string }[];
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
    tips: [
      "役職・所属を簡潔に伝える",
      "相手との接点や経緯を明記する",
      "今後の関係性への期待を示す",
    ],
    examplePhrases: [
      { en: "I am writing to introduce myself as your new point of contact.", ja: "新しい担当者としてご挨拶申し上げます。" },
      { en: "I look forward to working closely with you.", ja: "今後ともよろしくお願いいたします。" },
    ],
  },
  {
    id: "request",
    name: "依頼",
    description: "資料送付や対応をお願いするメール",
    slug: "request",
    seoTitle: "英語 依頼メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、丁寧な英語の依頼メールをAIが自動生成。適切な表現でビジネスリクエストを伝えます。",
    placeholderPoints: "例: 来週の会議資料を金曜日までに送っていただけますか。",
    tips: [
      "依頼内容を具体的・明確に書く",
      "期限がある場合は必ず明記する",
      "相手への配慮を忘れない",
    ],
    examplePhrases: [
      { en: "Could you please send me the documents by Friday?", ja: "金曜日までに書類をお送りいただけますか。" },
      { en: "I would appreciate it if you could look into this matter.", ja: "この件をご確認いただけると幸いです。" },
    ],
  },
  {
    id: "apology",
    name: "お詫び",
    description: "ミスや遅延に対するお詫びメール",
    slug: "apology",
    seoTitle: "英語 お詫びメール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、適切な英語のお詫びメールをAIが自動生成。誠意が伝わるビジネス表現を使用。",
    placeholderPoints: "例: 納品が3日遅れてしまい申し訳ありません。原因は部品の調達遅延です。",
    tips: [
      "問題の内容を正直に認める",
      "原因と対策を具体的に述べる",
      "再発防止の姿勢を示す",
    ],
    examplePhrases: [
      { en: "I sincerely apologize for the delay in delivery.", ja: "納品の遅延について深くお詫び申し上げます。" },
      { en: "We are taking steps to ensure this does not happen again.", ja: "再発防止に努めてまいります。" },
    ],
  },
  {
    id: "reminder",
    name: "催促",
    description: "返信や対応の催促メール",
    slug: "reminder",
    seoTitle: "英語 催促メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、角の立たない英語の催促メールをAIが自動生成。ビジネス関係を保つ適切な表現。",
    placeholderPoints: "例: 先週お送りした見積書について、ご確認いただけましたでしょうか。",
    tips: [
      "前回の連絡日と内容を明記する",
      "柔らかい表現を使い、角を立てない",
      "期限が迫っている場合はさりげなく伝える",
    ],
    examplePhrases: [
      { en: "I wanted to follow up on my previous email regarding...", ja: "先日お送りしたメールの件でご連絡いたしました。" },
      { en: "Just a gentle reminder that the deadline is approaching.", ja: "期限が近づいておりますので、念のためご連絡いたします。" },
    ],
  },
  {
    id: "thank-you",
    name: "お礼",
    description: "面談後や協力に対するお礼メール",
    slug: "thank-you",
    seoTitle: "英語 お礼メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、心のこもった英語のお礼メールをAIが自動生成。感謝を適切に伝えます。",
    placeholderPoints: "例: 昨日はお忙しい中、面談のお時間をいただきありがとうございました。",
    tips: [
      "何に対する感謝かを具体的に書く",
      "感謝の後に今後の展望を添える",
      "タイミングは早いほど好印象",
    ],
    examplePhrases: [
      { en: "Thank you for taking the time to meet with me yesterday.", ja: "昨日はお時間をいただきありがとうございました。" },
      { en: "I truly appreciate your support on this project.", ja: "このプロジェクトでのご支援に心から感謝いたします。" },
    ],
  },
  {
    id: "decline",
    name: "断り",
    description: "提案や依頼を丁寧に断るメール",
    slug: "decline",
    seoTitle: "英語 断りメール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、丁寧な英語の断りメールをAIが自動生成。関係を損なわない適切な表現。",
    placeholderPoints: "例: ご提案いただいた案件ですが、スケジュールの都合上お受けできません。",
    tips: [
      "感謝の気持ちを先に伝える",
      "断る理由を簡潔に説明する",
      "代替案や今後の可能性を示す",
    ],
    examplePhrases: [
      { en: "Thank you for the offer, but unfortunately we are unable to accept at this time.", ja: "ご提案ありがとうございますが、現時点ではお受けできかねます。" },
      { en: "I hope we can explore other opportunities in the future.", ja: "今後、別の機会にご一緒できることを楽しみにしております。" },
    ],
  },
  {
    id: "report",
    name: "報告",
    description: "進捗や結果の報告メール",
    slug: "report",
    seoTitle: "英語 報告メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、簡潔な英語の報告メールをAIが自動生成。ビジネスレポートに最適。",
    placeholderPoints: "例: プロジェクトAの進捗報告です。現在80%完了、来週中に納品予定です。",
    tips: [
      "結論・要点を先に述べる",
      "数値やデータで具体的に示す",
      "次のアクションを明記する",
    ],
    examplePhrases: [
      { en: "I am writing to provide an update on the project status.", ja: "プロジェクトの進捗についてご報告いたします。" },
      { en: "The project is currently 80% complete and on track for delivery next week.", ja: "プロジェクトは現在80%完了しており、来週の納品予定通りです。" },
    ],
  },
  {
    id: "inquiry",
    name: "問い合わせ",
    description: "製品やサービスについての問い合わせメール",
    slug: "inquiry",
    seoTitle: "英語 問い合わせメール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、的確な英語の問い合わせメールをAIが自動生成。ビジネス問い合わせに最適。",
    placeholderPoints: "例: 御社のクラウドサービスの料金プランと導入事例について教えてください。",
    tips: [
      "質問内容を箇条書きで整理する",
      "回答の希望期限を伝える",
      "自社の状況を簡潔に説明する",
    ],
    examplePhrases: [
      { en: "I am writing to inquire about your cloud service pricing plans.", ja: "御社のクラウドサービスの料金プランについてお伺いしたく存じます。" },
      { en: "Could you please provide more details regarding...?", ja: "...について詳細をお教えいただけますでしょうか。" },
    ],
  },
  {
    id: "appointment",
    name: "アポイント",
    description: "会議やミーティングの日程調整メール",
    slug: "appointment",
    seoTitle: "英語 アポイントメール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、スムーズな英語のアポイントメールをAIが自動生成。日程調整を効率化。",
    placeholderPoints: "例: 来週の火曜日か水曜日の午後に30分ほどお時間をいただけますか。",
    tips: [
      "候補日時を複数提示する",
      "ミーティングの目的を明記する",
      "所要時間と形式を伝える",
    ],
    examplePhrases: [
      { en: "Would you be available for a 30-minute meeting next Tuesday or Wednesday afternoon?", ja: "来週の火曜日か水曜日の午後に30分ほどお時間いただけますでしょうか。" },
      { en: "I would like to schedule a call to discuss...", ja: "...について打ち合わせのお電話を設定させていただきたいのですが。" },
    ],
  },
  {
    id: "farewell",
    name: "退職挨拶",
    description: "退職・異動時の挨拶メール",
    slug: "farewell",
    seoTitle: "英語 退職挨拶メール 書き方 | AI自動生成",
    seoDescription: "日本語で要点を入力するだけで、心のこもった英語の退職挨拶メールをAIが自動生成。良い印象で終える表現。",
    placeholderPoints: "例: 3月末で退職します。2年間お世話になりました。後任は鈴木です。",
    tips: [
      "退職日と後任者の情報を明記する",
      "これまでの感謝を具体的に伝える",
      "個人の連絡先を共有する",
    ],
    examplePhrases: [
      { en: "I am writing to let you know that my last day will be March 31.", ja: "3月31日が最終出社日となりますことをお知らせいたします。" },
      { en: "It has been a pleasure working with you over the past two years.", ja: "この2年間、ご一緒できたことを大変嬉しく思います。" },
    ],
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
