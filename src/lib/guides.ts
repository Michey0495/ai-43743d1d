export interface Guide {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
}

export const guides: Guide[] = [
  {
    id: "opening",
    slug: "opening",
    title: "英語メールの書き出し",
    seoTitle: "英語メール 書き出し フレーズ集 | ビジネス英語ガイド",
    seoDescription: "ビジネス英語メールの書き出しフレーズを場面別に解説。Dear, Hello, Hi の使い分けから、初対面・既存取引先への適切な挨拶まで。",
    description: "Dear, Hello, Hi の使い分けと、シーン別の書き出しフレーズ",
  },
  {
    id: "closing",
    slug: "closing",
    title: "英語メールの締め",
    seoTitle: "英語メール 締め フレーズ集 | ビジネス英語ガイド",
    seoDescription: "ビジネス英語メールの締めくくりフレーズを解説。Best regards, Sincerely の使い分けと適切なクロージング表現。",
    description: "Best regards, Sincerely 等の使い分けと締めの表現",
  },
  {
    id: "subject",
    slug: "subject",
    title: "英語メールの件名",
    seoTitle: "英語メール 件名 書き方 | ビジネス英語ガイド",
    seoDescription: "ビジネス英語メールの件名の書き方を解説。開封率を上げる効果的な件名のパターンと具体例。",
    description: "効果的な件名の書き方とパターン集",
  },
  {
    id: "phrases",
    slug: "phrases",
    title: "ビジネス英語フレーズ集",
    seoTitle: "ビジネス英語 フレーズ集 | メールで使える表現",
    seoDescription: "ビジネス英語メールで頻出のフレーズを場面別にまとめました。依頼・お礼・謝罪・催促など、コピペで使える実用的な表現集。",
    description: "シーン別の頻出フレーズとその使い方",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
