# eigo-ai

日本語で要点を入力するだけで、AIが完璧な英語ビジネスメールを自動生成するWebアプリ。

**URL:** https://eigo.ezoai.jp

## 機能

- 10種類のビジネスシーン対応（自己紹介、依頼、お詫び、催促、お礼、断り、報告、問い合わせ、アポイント、退職挨拶）
- トーン設定（フォーマル/スタンダード/カジュアル）
- 関係性設定（上司/同僚/取引先/初対面/友人）
- 日本語の表現解説付き
- ワンクリックコピー
- IPベースレート制限（1日3回無料）

## 技術スタック

- Next.js 16 (App Router) / TypeScript / Tailwind CSS / shadcn/ui
- Claude API (Haiku 4.5) でメール生成
- Vercel デプロイ

## AI公開チャネル

- `/llms.txt` - AI向けサイト説明
- `/.well-known/agent.json` - A2A Agent Card
- `/api/mcp` - MCPサーバーエンドポイント
- `/robots.txt` - AIクローラー許可

## 実装状況

### 完了
- [x] トップページ（Hero、Features、Scenes、Advantages、Guides、CTA）
- [x] メール生成ページ（フォーム、結果表示、コピー機能）
- [x] メール生成API（Claude API連携、レート制限）
- [x] シーン別SEOランディングページ（10シーン）
- [x] 英語メール基礎知識ガイド（4トピック、フル内容）
- [x] MCPサーバーエンドポイント
- [x] AI公開チャネル（llms.txt, agent.json, robots.txt）
- [x] サイトマップ自動生成
- [x] SEOメタデータ（OGP, Twitter Card）
- [x] JSON-LD構造化データ
- [x] Google Analytics対応
- [x] フィードバックウィジェット + API
- [x] ヘッダー・フッターナビゲーション

### 未実装・改善余地
- [ ] OGP画像生成（シーン別）
- [ ] Vercelデプロイ・ドメイン設定
- [ ] 環境変数設定（ANTHROPIC_API_KEY, NEXT_PUBLIC_GA_ID, GITHUB_TOKEN）
