export interface Guide {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  sections: { heading: string; content: string }[];
}

export const guides: Guide[] = [
  {
    id: "opening",
    slug: "opening",
    title: "英語メールの書き出し",
    seoTitle: "英語メール 書き出し フレーズ集 | ビジネス英語ガイド",
    seoDescription:
      "ビジネス英語メールの書き出しフレーズを場面別に解説。Dear, Hello, Hi の使い分けから、初対面・既存取引先への適切な挨拶まで。",
    description: "Dear, Hello, Hi の使い分けと、シーン別の書き出しフレーズ",
    sections: [
      {
        heading: "フォーマル度別の書き出し",
        content:
          "最もフォーマルな書き出しは「Dear Mr./Ms. [姓],」です。取引先や上司へのメールに使います。\n\n「Dear [名前],」は相手を知っているが、ある程度フォーマルな場面で使用します。\n\n「Hello [名前],」はスタンダードなビジネスメールで広く使えます。\n\n「Hi [名前],」はカジュアルな同僚間のやり取りに適しています。",
      },
      {
        heading: "相手の名前がわからない場合",
        content:
          "部署宛: 「Dear Sales Team,」「Dear Hiring Manager,」\n\n完全に不明: 「Dear Sir or Madam,」（非常にフォーマル）\n\n現代的な代替: 「To Whom It May Concern,」（問い合わせ時）",
      },
      {
        heading: "書き出しの一文目",
        content:
          "初対面: 「I am writing to introduce myself...」「I am reaching out regarding...」\n\n既知の相手: 「I hope this email finds you well.」「Thank you for your prompt response.」\n\n用件直入: 「I am writing to inquire about...」「Following up on our conversation...」",
      },
    ],
  },
  {
    id: "closing",
    slug: "closing",
    title: "英語メールの締め",
    seoTitle: "英語メール 締め フレーズ集 | ビジネス英語ガイド",
    seoDescription:
      "ビジネス英語メールの締めくくりフレーズを解説。Best regards, Sincerely の使い分けと適切なクロージング表現。",
    description: "Best regards, Sincerely 等の使い分けと締めの表現",
    sections: [
      {
        heading: "クロージングフレーズの使い分け",
        content:
          "「Sincerely,」- 最もフォーマル。初めての相手や重要な取引先に。\n\n「Best regards,」「Kind regards,」- 標準的なビジネスメールに最適。最も汎用的。\n\n「Best,」「Thanks,」- カジュアルな社内メールや親しい相手に。\n\n「Warm regards,」- やや温かみのある丁寧な締め。感謝を伝えた後に。",
      },
      {
        heading: "締めの前の一文",
        content:
          "依頼系: 「I would appreciate your prompt attention to this matter.」\n\n感謝系: 「Thank you for your time and consideration.」\n\n今後の連絡: 「Please do not hesitate to contact me if you have any questions.」\n\n返信催促: 「I look forward to hearing from you.」",
      },
      {
        heading: "避けるべき締め方",
        content:
          "「Cheers,」- イギリス英語ではカジュアルに使われますが、ビジネスでは避けた方が無難です。\n\n「XOXO」「Love,」- ビジネスメールでは不適切です。\n\n署名なし - 必ず名前を記載しましょう。役職と連絡先も添えると良いです。",
      },
    ],
  },
  {
    id: "subject",
    slug: "subject",
    title: "英語メールの件名",
    seoTitle: "英語メール 件名 書き方 | ビジネス英語ガイド",
    seoDescription:
      "ビジネス英語メールの件名の書き方を解説。開封率を上げる効果的な件名のパターンと具体例。",
    description: "効果的な件名の書き方とパターン集",
    sections: [
      {
        heading: "件名の基本ルール",
        content:
          "簡潔に: 50文字以内が理想。モバイルでも全文表示されます。\n\n具体的に: 「Meeting」ではなく「Meeting Request: Q1 Budget Review - March 15」のように具体的に。\n\n行動を示す: 「Action Required:」「FYI:」「Request:」などのプレフィックスで意図を明確に。",
      },
      {
        heading: "シーン別の件名例",
        content:
          "依頼: 「Request for Quotation - [製品名]」\n\nお詫び: 「Apology for the Delay in Delivery」\n\n催促: 「Follow-up: Invoice #1234 Payment」\n\nお礼: 「Thank You for the Meeting on [日付]」\n\n報告: 「Monthly Sales Report - February 2026」\n\n問い合わせ: 「Inquiry About Your Cloud Services」",
      },
      {
        heading: "避けるべき件名",
        content:
          "「Hello」「Hi」のみ - 用件が不明で開封されにくい。\n\n全角大文字「URGENT!!!」- スパムフィルタに引っかかる可能性。\n\n空欄 - 最も避けるべき。必ず件名を入れましょう。\n\n長すぎる件名 - モバイルで途切れて内容が伝わりません。",
      },
    ],
  },
  {
    id: "phrases",
    slug: "phrases",
    title: "ビジネス英語フレーズ集",
    seoTitle: "ビジネス英語 フレーズ集 | メールで使える表現",
    seoDescription:
      "ビジネス英語メールで頻出のフレーズを場面別にまとめました。依頼・お礼・謝罪・催促など、コピペで使える実用的な表現集。",
    description: "シーン別の頻出フレーズとその使い方",
    sections: [
      {
        heading: "依頼のフレーズ",
        content:
          "「Could you please...?」- 丁寧な依頼の定番。\n\n「I would appreciate it if you could...」- よりフォーマルな依頼。\n\n「Would it be possible to...?」- 実現可能性を確認する丁寧な表現。\n\n「I was wondering if you could...」- 柔らかい依頼表現。\n\n「At your earliest convenience」- 「お手すきの際に」の英語版。",
      },
      {
        heading: "お詫びのフレーズ",
        content:
          "「I sincerely apologize for...」- フォーマルなお詫び。\n\n「I am sorry for the inconvenience caused.」- 迷惑をかけたことへの謝罪。\n\n「Please accept my apologies for...」- 書面的な謝罪表現。\n\n「We take full responsibility for...」- 責任を認める表現。\n\n「To prevent this from happening again, we will...」- 再発防止策を示す。",
      },
      {
        heading: "感謝のフレーズ",
        content:
          "「Thank you for your prompt response.」- 迅速な返信への感謝。\n\n「I really appreciate your help with...」- 具体的な協力への感謝。\n\n「Thank you for taking the time to...」- 時間を割いてくれたことへの感謝。\n\n「I am grateful for your support.」- フォーマルな感謝。",
      },
      {
        heading: "催促のフレーズ",
        content:
          "「I wanted to follow up on...」- 柔らかい催促の定番。\n\n「Just a gentle reminder that...」- 丁寧なリマインド。\n\n「I would appreciate an update on...」- 進捗確認。\n\n「Could you kindly let me know the status of...?」- フォーマルな催促。\n\n「As the deadline is approaching...」- 期限を意識させる表現。",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
