# Copilot instructions (agynamix.astro)

## Big picture
- Astro 5 static site with **SolidJS islands** (`src/components/*.tsx`) and Astro templates (`.astro`).
- Default locale is **English at `/`**; German content lives under **`/de/`** (`src/pages/de/*`).
- Production deploy is a **static build served by Nginx** (see `Dockerfile`, `nginx/nginx.conf`, `docker-compose.yml`).

## Dev workflows
- Install: `npm install`
- Dev server: `npm run dev` (Astro)
- Production build: `npm run build` → outputs `dist/`
- Preview build: `npm run preview`

## Routing + i18n conventions
- Locale switch + link prefixing lives in `src/i18n/routes.ts`:
  - Use `withLangPrefix(lang, "/path")` for internal links when rendering nav/UI.
  - `toggleLocalePath(pathname)` implements the EN↔DE toggle behavior.
- Translation lookup is key/value (`src/i18n/t.ts`) with tables in `src/i18n/en.ts` and `src/i18n/de.ts`.
- Layouts take an explicit `lang` prop:
  - `src/layouts/common-layout.astro` sets `<html lang={lang}>` and renders `Header` + `Footer`.
  - When adding German pages, pass `lang="de"` to `PageLayout`/`CommonLayout`.
- Important: for **non-blog** pages, DE availability is guarded by `DE_ALLOWLIST` in `src/i18n/routes.ts`. If you add a new top-level page, add both `src/pages/<page>.astro` and `src/pages/de/<page>.astro`, then update `DE_ALLOWLIST` so the locale toggle doesn’t fall back to `/de/`.

## Blog + tags (markdown-driven)
- Blog posts are Markdown pages under `src/pages/blog/**/index.md` with frontmatter (date/title/author/tags) and typically `layout: ../../../layouts/blog-post.astro`.
- Blog list + pagination: `src/pages/blog/[...page].astro` (uses `import.meta.glob("../blog/**/*.md")` + `paginate`).
- German blog routes reuse the same Markdown content:
  - List: `src/pages/de/blog/index.astro`
  - Post: `src/pages/de/blog/[...slug]/index.astro` (renders `<post.Content />`)
- Post previews localize URLs and tag links via `lang` prop: `src/components/PostPreview.astro`.
- Tag pages:
  - EN: `src/pages/tags/[tag].astro`
  - DE: `src/pages/de/tags/[tag].astro` (prefixes blog URLs with `/de`)

## Styling + component patterns
- Tailwind is wired via Vite plugin (`@tailwindcss/vite`); global styles in `src/styles/global.css` and `src/styles/fonts.css`.
- Prefer existing building blocks in `src/blocks/*` (e.g. `TextLink.tsx`, `Tags.tsx`) and keep class usage consistent.
- Solid components used as islands are typically mounted with `client:visible` (example: `Header` in `src/layouts/common-layout.astro`).

## Deployment notes (repo-specific)
- Docker image builds the Astro site and serves it via Nginx:
  - Build stage runs `npm run build`
  - Runtime serves `/usr/share/nginx/html` with routing + locale cookie logic in `nginx/nginx.conf`
- Canonical URLs + sitemap depend on Astro `site` (`astro.config.mjs`). Set `SITE_URL` when building for non-prod environments.
