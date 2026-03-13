# Changelog

## 2026-03-14 - Maintenance (Run 3)

### Fixes
- Rate-limit: replaced ambiguous `setHours(24)` with explicit next-midnight calculation
- Rate-limit: added periodic cleanup of expired IP entries to prevent memory growth

### Status
- Build: OK
- TypeScript: No errors
- ESLint: No warnings
- npm audit: 0 vulnerabilities
- GitHub Issues: None open
- AI public files (robots.txt, llms.txt, agent.json): All present and valid
- Skipped major updates: @types/node (20→25), shadcn (3→4), eslint (9→10)

## 2026-03-14 - Maintenance (Run 2)

### Dependencies
- `react` 19.2.3 → 19.2.4 (patch)
- `react-dom` 19.2.3 → 19.2.4 (patch)
- `eslint` 9.39.3 → 9.39.4 (patch)

### Status
- Build: OK
- TypeScript: No errors
- npm audit: 0 vulnerabilities
- GitHub Issues: None open
- AI public files (robots.txt, llms.txt, agent.json): All present and valid
- Skipped major updates: @types/node (20→25), shadcn (3→4), eslint (9→10)

## 2026-03-14 - Maintenance (Run 1)

### Security
- `flatted` updated to fix unbounded recursion DoS vulnerability (high severity)
- `hono` updated to fix prototype pollution via `__proto__` key (moderate severity)

### Status
- Build: OK
- TypeScript: No errors
- npm audit: 0 vulnerabilities
- GitHub Issues: None open
- AI public files (robots.txt, llms.txt, agent.json): All present and valid
