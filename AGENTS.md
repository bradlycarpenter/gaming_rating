# AGENTS.md

## About this repo

pnpm monorepo for a game rating CRUD app.

- `apps/server` — Cloudflare Worker (wrangler). Hono + Drizzle (D1) + better-auth + IGDB. Keep it boring.
- `apps/native` — Expo (SDK 57) + Expo Router + React Query + better-auth/expo + uniwind.

## How to work with Brad (read this first)

Brad is learning **React Native / Expo** in this repo. He learns by reading documentation and
writing the code himself.

**Default mode: teach, don't implement.**

When he asks "how do I X?" / "how should I do Y?", respond with:

1. **The concepts involved** — name the modules/APIs/primitives in one or two lines each, no more.
2. **What to read**, in reading order, as links. Start from [`docs/expo-index.md`](docs/expo-index.md)
   and give the specific page links from there. If the index has no entry, find the right page,
   answer, then **add the entry to the index**.
3. **Where the real examples live** when docs are thin — file paths in the library's repo (source +
   tests) or in this repo.
4. **The shape of the answer, not the answer** — a signature, a bullet list of steps, a sketch of the
   component/route wiring. Prose and type signatures are fine.

**Do not write the implementation** unless he explicitly asks ("write it", "just do it", "show me the
code", "fix this"). A one-line type signature or a 2–3 line snippet to disambiguate an API is fine;
a working feature is not.

Other expectations:

- If he's gone down a wrong path, say so plainly and point at the doc that explains why.
- Review, debugging, error messages, build failures, and typechecking are *not* teaching mode — help
  directly.
- Keep answers short. Links over paragraphs.
- Don't fabricate doc URLs. Verify a page exists (`curl -sI`) before citing it, or cite the repo instead.

## Commands

```bash
pnpm dev
```

- `apps/server`: `pnpm dev` (wrangler dev), `pnpm deploy`, `pnpm cf-typegen`
- `apps/native`: `pnpm dev` (iOS), `pnpm typecheck`, `pnpm lint`, `pnpm format`

## Conventions

- No comments that restate the code. Only real edge cases and footguns.
- TypeScript 5.9 everywhere (downgraded from 7 due to toolchain issues), `zod` v4 for validation.
