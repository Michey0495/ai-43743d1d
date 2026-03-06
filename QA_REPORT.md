# QA Report - eigo-ai (ai-43743d1d)

**Date:** 2026-03-07
**Tester:** Claude (automated QA)
**QA Pass:** 2nd pass (follow-up)

## Build & Lint

| Check | Result |
|-------|--------|
| `npm run build` | PASS |
| `npm run lint` | PASS (0 errors) |
| TypeScript | PASS (strict mode) |

## Issues Found & Fixed (1st Pass)

### 1. Missing 404 page (not-found.tsx)
- **Severity:** Medium
- **Status:** Fixed
- Created `src/app/not-found.tsx` with proper design system styling

### 2. Missing loading state (loading.tsx)
- **Severity:** Medium
- **Status:** Fixed
- Created `src/app/loading.tsx` with spinner animation

### 3. Missing error boundary (error.tsx)
- **Severity:** Medium
- **Status:** Fixed
- Created `src/app/error.tsx` with retry button

### 4. Missing favicon
- **Severity:** Low
- **Status:** Fixed
- Created `src/app/icon.tsx` using Next.js OG Image generation (blue "e" on black background)

### 5. Incorrect scene count in metadata
- **Severity:** Low
- **Status:** Fixed
- `layout.tsx` metadata/JSON-LD said "15+" scenes but only 10 exist. Changed to "10"

### 6. Incorrect Next.js version in llms.txt
- **Severity:** Low
- **Status:** Fixed
- Changed "Next.js 15" to "Next.js 16" in `public/llms.txt`

### 7. API routes vulnerable to malformed JSON
- **Severity:** High
- **Status:** Fixed
- Added try/catch around `request.json()` in all 3 API routes

### 8. No input length validation
- **Severity:** Medium
- **Status:** Fixed
- Added maxLength to textarea and input fields (client + server)

### 9. Accessibility improvements
- **Severity:** Low
- **Status:** Fixed
- Added `aria-label` to header navigation
- Added `lang="en"` to email result `<pre>` element

### 10. Variable naming conflict in feedback route
- **Severity:** High (build-breaking)
- **Status:** Fixed
- Renamed `body` variable to avoid conflict

## Issues Found & Fixed (2nd Pass)

### 11. Design system violation: lucide-react usage
- **Severity:** Medium
- **Status:** Fixed
- `src/components/ui/select.tsx` imported `CheckIcon`, `ChevronDownIcon`, `ChevronUpIcon` from lucide-react
- CLAUDE.md prohibits icon libraries: Replaced with inline SVG components
- Removed `lucide-react` from package.json dependencies

### 12. Unused default Next.js assets
- **Severity:** Low
- **Status:** Fixed
- Removed unused SVG files from public/: file.svg, globe.svg, next.svg, vercel.svg, window.svg

## Checklist

- [x] `npm run build` success
- [x] `npm run lint` error-free
- [x] Responsive design (Tailwind breakpoints: sm/md/lg used correctly)
- [x] Favicon (generated via Next.js icon.tsx)
- [x] OGP metadata (title, description, twitter card, dynamic OG images)
- [x] 404 page (not-found.tsx)
- [x] Loading state (loading.tsx)
- [x] Error state (error.tsx)
- [x] SEO: sitemap.xml, robots.txt, llms.txt, agent.json, JSON-LD
- [x] Input validation (client + server side)
- [x] Rate limiting (3 requests/day per IP)
- [x] API error handling (malformed JSON, missing params, invalid scene/tone)
- [x] Design system compliance (black bg, white text, no emojis, no icon libraries)
- [x] Accessibility (semantic HTML, aria labels, form labels, focus states)
- [x] No unused dependencies or assets

## Issues Found & Fixed (3rd Pass)

### 13. OG画像URLの不一致
- **Severity:** High (SEO)
- **Status:** Fixed
- `layout.tsx` のメタデータで `/og-image.png` を手動指定していたが、該当ファイルが `public/` に存在しない
- 実際のOG画像は `opengraph-image.tsx` で動的生成。Next.jsのファイルベースメタデータに統一

### 14. 構造化データの虚偽レーティング
- **Severity:** High (SEO penalty risk)
- **Status:** Fixed
- JSON-LD に `AggregateRating`（4.8点/127件）が含まれていたが、実際のレビューに基づかない
- Google構造化データガイドライン違反。`aggregateRating` セクションを削除

### 15. サーバーサイドバリデーション不足
- **Severity:** Medium
- **Status:** Fixed
- `recipientName`/`senderName` のサーバーサイド長さバリデーションが欠如
- APIを直接叩いた場合に非常に長い名前を送信可能だった
- `route.ts` に型チェック・100文字制限を追加

### 16. フィードバックウィジェットのアクセシビリティ
- **Severity:** Low
- **Status:** Fixed
- 閉じるボタン（&times;）に `aria-label` がなく、スクリーンリーダーで用途不明
- `aria-label="閉じる"` を追加

## Issues Found & Fixed (4th Pass)

### 17. JSON.parseのエラーハンドリング不足
- **Severity:** Medium
- **Status:** Fixed
- `src/app/api/generate/route.ts` でAI応答のJSON解析時に `JSON.parse` がtry/catchなしで呼ばれていた
- AI応答が不正なJSONの場合、未ハンドルの例外でサーバーエラーになる
- try/catchを追加し、ユーザー向けエラーメッセージを返すように修正

### 18. コピーボタンのエラーハンドリング不足
- **Severity:** Low
- **Status:** Fixed
- `src/components/copy-button.tsx` で `navigator.clipboard.writeText` がtry/catchなし
- HTTPS以外のコンテキストやパーミッション拒否時にエラー
- try/catchを追加

### 19. フォームinput要素のアクセシビリティ不備
- **Severity:** Low
- **Status:** Fixed
- `src/components/generate-form.tsx` の名前入力フィールドに `id`/`htmlFor` 属性がなく、ラベルとinputが関連付けされていなかった
- `id="recipientName"`, `id="senderName"` と対応する `htmlFor` を追加

## Not Addressed (Out of Scope / Pre-existing)

- **Vercel deployment** - Listed as TODO in README.
- **Environment variables** - ANTHROPIC_API_KEY, GA_ID, GITHUB_TOKEN need to be set on deployment.
- **Google Site Verification** - Uses environment variable; must be set in Vercel.
- **Rate limiting in-memory** - Vercelサーバーレス環境では再起動時にリセットされる（無料枠のため影響小）

## Summary

Found and fixed 19 issues total across 4 QA passes. All critical and medium issues resolved. Build and lint pass cleanly. The application is ready for deployment.
