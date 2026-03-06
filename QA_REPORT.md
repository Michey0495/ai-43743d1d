# QA Report - eigo-ai (ai-43743d1d)

**Date:** 2026-03-07
**Tester:** Claude (automated QA)

## Build & Lint

| Check | Result |
|-------|--------|
| `npm run build` | PASS |
| `npm run lint` | PASS (0 errors) |
| TypeScript | PASS (strict mode) |

## Issues Found & Fixed

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
- `layout.tsx` metadata/JSON-LD said "15+" scenes but only 10 exist. Changed to "10種類"

### 6. Incorrect Next.js version in llms.txt
- **Severity:** Low
- **Status:** Fixed
- Changed "Next.js 15" to "Next.js 16" in `public/llms.txt`

### 7. API routes vulnerable to malformed JSON
- **Severity:** High
- **Status:** Fixed
- Added try/catch around `request.json()` in all 3 API routes:
  - `/api/generate` - returns 400 with Japanese error message
  - `/api/mcp` - returns JSON-RPC parse error (-32700)
  - `/api/feedback` - returns 400

### 8. No input length validation
- **Severity:** Medium
- **Status:** Fixed
- Added `maxLength={2000}` to textarea in generate form
- Added `maxLength={100}` to name input fields
- Added server-side validation in `/api/generate` (rejects points > 2000 chars)

### 9. Accessibility improvements
- **Severity:** Low
- **Status:** Fixed
- Added `aria-label` to header navigation
- Added `lang="en"` to email result `<pre>` element for screen reader language switching

### 10. Variable naming conflict in feedback route
- **Severity:** High (build-breaking)
- **Status:** Fixed
- Renamed `body` variable to `payload`/`issueBody` to avoid conflict with outer `let body`

## Checklist

- [x] `npm run build` success
- [x] `npm run lint` error-free
- [x] Responsive design (Tailwind breakpoints: sm/md/lg used correctly)
- [x] Favicon (generated via Next.js icon.tsx)
- [x] OGP metadata (title, description, twitter card configured in layout.tsx)
- [x] 404 page (not-found.tsx)
- [x] Loading state (loading.tsx)
- [x] Error state (error.tsx)
- [x] SEO: sitemap.xml, robots.txt, llms.txt, agent.json, JSON-LD
- [x] Input validation (client + server side)
- [x] Rate limiting (3 requests/day per IP)
- [x] API error handling (malformed JSON, missing params, invalid scene/tone)

## Not Addressed (Out of Scope / Pre-existing)

- **OGP image generation** - No og:image set. Listed as TODO in README.
- **Vercel deployment** - Listed as TODO in README.
- **Environment variables** - ANTHROPIC_API_KEY, GA_ID, GITHUB_TOKEN need to be set on deployment.
- **lucide-react dependency** - Used only by shadcn/ui Select component internally. Acceptable.

## Summary

Found and fixed 10 issues. All critical and medium issues resolved. Build and lint pass cleanly. The application is ready for deployment.
