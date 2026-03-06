# eigo-ai アーキテクチャ設計書

## 概要
日本語で内容を入力するだけでAIが英語ビジネスメールを自動生成するWebアプリ。
URL: https://eigo.ezoai.jp

## ページ構成・ルーティング

### メインページ
| パス | 説明 |
|------|------|
| `/` | トップページ（サービス説明、シーン一覧、お試しCTA） |
| `/generate` | メール生成ページ（メインUI） |
| `/scenes/[scene]` | シーン別SEOランディングページ |
| `/guide/[topic]` | 英語メール基礎知識ページ |

### API
| エンドポイント | メソッド | 説明 |
|---------------|---------|------|
| `/api/generate` | POST | メール生成API |
| `/api/mcp` | POST | MCPサーバーエンドポイント |

### 静的ファイル
| パス | 説明 |
|------|------|
| `/llms.txt` | AI向けサイト説明 |
| `/.well-known/agent.json` | A2A Agent Card |
| `/robots.txt` | クローラー設定 |
| `/sitemap.xml` | サイトマップ（動的生成） |

## コンポーネント設計

```
src/
├── app/
│   ├── layout.tsx              # ルートレイアウト（黒背景、メタデータ）
│   ├── page.tsx                # トップページ
│   ├── generate/
│   │   └── page.tsx            # メール生成ページ
│   ├── scenes/
│   │   └── [scene]/
│   │       └── page.tsx        # シーン別LP
│   ├── guide/
│   │   └── [topic]/
│   │       └── page.tsx        # 基礎知識ページ
│   ├── api/
│   │   ├── generate/
│   │   │   └── route.ts        # メール生成API
│   │   └── mcp/
│   │       └── route.ts        # MCPサーバー
│   └── sitemap.ts              # 動的サイトマップ
├── components/
│   ├── header.tsx              # ヘッダー
│   ├── footer.tsx              # フッター
│   ├── scene-card.tsx          # シーン選択カード
│   ├── generate-form.tsx       # メール生成フォーム（Client Component）
│   ├── email-result.tsx        # 生成結果表示（Client Component）
│   └── copy-button.tsx         # コピーボタン（Client Component）
└── lib/
    ├── scenes.ts               # シーン定義データ
    ├── guides.ts               # ガイド定義データ
    ├── prompts.ts              # Claude APIプロンプトテンプレート
    └── rate-limit.ts           # レート制限ロジック
```

## データフロー

### メール生成フロー
1. ユーザーがシーン選択・要点を日本語入力
2. Client Component → POST `/api/generate`
3. API Route → Claude API (streaming)
4. レスポンス: `{ subject, body, explanation }`
5. 結果表示 + コピー機能

### レート制限
- IPベースで日次3回制限（Free tier）
- Vercel KV または in-memory Map（MVP）

## シーン一覧（MVP 10シーン）

| ID | 日本語名 | URLスラッグ |
|----|---------|------------|
| self-introduction | 自己紹介 | /scenes/self-introduction |
| request | 依頼 | /scenes/request |
| apology | お詫び | /scenes/apology |
| reminder | 催促 | /scenes/reminder |
| thank-you | お礼 | /scenes/thank-you |
| decline | 断り | /scenes/decline |
| report | 報告 | /scenes/report |
| inquiry | 問い合わせ | /scenes/inquiry |
| appointment | アポイント | /scenes/appointment |
| farewell | 退職挨拶 | /scenes/farewell |

## トーン設定
- `formal` - フォーマル（取引先、上位者向け）
- `standard` - スタンダード（同僚、一般ビジネス）
- `casual` - カジュアル（友人、親しい同僚）

## 関係性設定
- `boss` - 上司
- `colleague` - 同僚
- `client` - 取引先
- `stranger` - 初対面
- `friend` - 友人

## API設計

### POST /api/generate
```typescript
// Request
{
  scene: string;        // シーンID
  tone: "formal" | "standard" | "casual";
  relationship: "boss" | "colleague" | "client" | "stranger" | "friend";
  recipientName?: string;
  senderName?: string;
  points: string;       // 日本語で伝えたい要点
}

// Response (streaming)
{
  subject: string;      // 英語件名
  body: string;         // 英語メール本文
  explanation: string;  // 日本語での表現解説
}
```

### MCP Server設計

ツール定義:
```json
{
  "name": "generate_english_email",
  "description": "日本語の要点から英語ビジネスメールを生成します",
  "inputSchema": {
    "type": "object",
    "properties": {
      "scene": { "type": "string", "description": "シーン: self-introduction, request, apology, reminder, thank-you, decline, report, inquiry, appointment, farewell" },
      "tone": { "type": "string", "enum": ["formal", "standard", "casual"] },
      "relationship": { "type": "string", "enum": ["boss", "colleague", "client", "stranger", "friend"] },
      "recipientName": { "type": "string" },
      "senderName": { "type": "string" },
      "points": { "type": "string", "description": "日本語で伝えたい要点" }
    },
    "required": ["scene", "tone", "relationship", "points"]
  }
}
```

## デザインシステム
- 背景: `#000000`
- アクセント: `#3b82f6` (blue-500)
- カード: `bg-white/5 border border-white/10`
- テキスト: `text-white`, `text-white/70`
- ホバー: `cursor-pointer transition-all duration-200`
- フォント: 16px以上, line-height 1.5-1.75

## SEO戦略
- 各シーンが独立したランディングページ
- 動的OGP画像（シーン名入り）
- 構造化データ（JSON-LD）
- sitemap.xml 自動生成
