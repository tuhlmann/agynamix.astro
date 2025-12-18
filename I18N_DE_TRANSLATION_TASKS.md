# German localization tasks (excluding blog)

Date: 2025-12-18

## Scope

Add a German version for the whole website (UI + pages + legal + misc static pages) **except the blog**.

- English stays on `/…`
- German lives under `/de/…`
- Blog content stays **English-only** under `/blog/...` and `/tags/...` (no `/de/blog`, no `/de/tags`)

## Non-goals

- Do **not** translate or duplicate blog posts.
- Do **not** change the deployment model (still static `astro build` served by nginx).
- Do **not** introduce additional UI beyond the existing language toggle.

## Current state (already implemented)

- `/de/` homepage exists at [src/pages/de/index.astro](src/pages/de/index.astro).
- Layout supports `lang` and renders `<html lang="…">` via [src/layouts/common-layout.astro](src/layouts/common-layout.astro).
- nginx selects language on `/` using cookie-first then `Accept-Language` and redirects German users to `/de/`; see [nginx/nginx.conf](nginx/nginx.conf).
- Navbar has a DE/US flag toggle in [src/components/Header.tsx](src/components/Header.tsx) and sets a `lang` cookie.

## Recommended target structure

### Routes

- English pages remain where they are today:
  - `/consulting`, `/clients`, `/products`, `/about`, `/resume`, `/imprint`, `/privacy-policy`, etc.
- German pages are duplicated as Astro pages under `src/pages/de/`:
  - `src/pages/de/consulting.astro` → `/de/consulting/`
  - `src/pages/de/clients.astro` → `/de/clients/`
  - `src/pages/de/products.astro` → `/de/products/`
  - …

### Shared components

Keep one shared component tree and switch text via a lightweight dictionary keyed by locale.

- Add `src/i18n/` (example):
  - `src/i18n/types.ts` (locale type)
  - `src/i18n/en.ts` / `src/i18n/de.ts` (string tables)
  - `src/i18n/t.ts` (tiny helper `t(lang, key)`)

Keep it simple: this site is static and has two locales.

### Language propagation

Continue to pass `lang` explicitly from each page to the layout:

- `<PageLayout lang="de" ...>` for `/de/*` pages
- `<PageLayout lang="en" ...>` or omit (defaults to `en`) for English pages

Also pass `lang` to the header/footer so labels can be translated without route duplication.

## Work breakdown (checklist)

### 1) Decide “what gets translated” vs “what stays shared”

Translate:
- All page copy on non-blog pages
- Navigation labels and footer labels
- Privacy/Imprint pages if desired (these are not blog posts)
- Any UI strings in components (buttons, headings, captions)

Keep shared (same for both locales):
- Blog list & blog posts & tags pages and content
- Images (unless they contain embedded English text)
- URLs for shared areas (blog stays `/blog`)

Acceptance:
- Visiting `/de/*` shows German UI text.
- Blog remains reachable and readable under `/blog` and is not duplicated.

### 2) Add German versions of all pages (except blog)

Create matching pages under `src/pages/de/`:

- [ ] `src/pages/de/about.astro`
- [ ] `src/pages/de/clients.astro`
- [ ] `src/pages/de/consulting.astro`
- [ ] `src/pages/de/products.astro`
- [ ] `src/pages/de/resume.astro`
- [ ] `src/pages/de/imprint.astro`
- [ ] `src/pages/de/privacy-policy.astro`
- [ ] `src/pages/de/404.astro` (optional; at minimum ensure a German 404 exists if you want locale-specific)

Implementation approach (recommended for speed):
- Duplicate each existing page and translate text in-place.
- Ensure each German page sets `lang="de"` when using `PageLayout` / `CommonLayout`.

Important:
- Keep internal links consistent:
  - Links to blog always point to `/blog`.
  - Links to yet-untranslated pages:
    - Option A (recommended while migrating): link German pages back to the English route until the German route exists.
    - Option B: link to `/de/...` and accept temporary 404s (not recommended).

### 3) Translate shared navigation and footer labels

#### Header
- Update [src/components/Header.tsx](src/components/Header.tsx) to translate menu item labels based on `props.lang`.
  - Example: `Consulting` → `Beratung`, `Clients` → `Kunden`, `Products` → `Produkte`, `About` → `Über mich`.
- Keep `href`s unchanged:
  - For now, English nav keeps `/consulting`, German nav should link to `/de/consulting` once that page exists.

Recommended helper:
- A function `withLangPrefix(lang, path)` that returns `/de${path}` for German and `path` for English.
- Special-case blog: always return `/blog` without prefix.

#### Footer
- Identify footer link labels in [src/components/Footer.astro](src/components/Footer.astro) and translate based on a passed `lang` prop.
- Ensure legal links are locale-aware:
  - English: `/imprint`, `/privacy-policy`
  - German: `/de/imprint`, `/de/privacy-policy`

### 4) Translate non-page UI strings/components

Search for visible strings in `src/components/` and `src/blocks/`.

- [ ] Translate button/cta labels (e.g., “Read more”, “Contact”, “Close”) if present.
- [ ] Translate modal texts (e.g., `SimpleModal.tsx`) if user-facing.
- [ ] Ensure accessibility strings (`aria-label`, `title`, `sr-only`) are also translated.

Tip: use a single `t(lang, key)` helper to avoid duplicating strings throughout components.

### 5) Ensure language switcher works across all pages

Target behavior:
- Toggle should take the user to the same page in the other language when available.
- If the equivalent German page does not exist yet:
  - Prefer falling back to `/de/` (German home) rather than 404.

Implementation detail:
- Determine “current path” from `window.location.pathname` (client-side).
- Map between locales:
  - If path starts with `/de/`, strip it.
  - Otherwise prefix with `/de`.
- Keep `/blog` and `/tags` always unprefixed.

### 6) SEO and metadata

- [ ] Add `hreflang` alternates on non-blog pages:
  - `en` points to the English URL
  - `de` points to the German URL
- [ ] Set canonical URLs appropriately (generally self-canonical per locale page).
- [ ] Ensure `<title>` and meta descriptions are translated for German pages.

Note:
- Blog pages should keep only English canonical + (optionally) no German alternate.

### 7) Sitemap

The sitemap is generated by `@astrojs/sitemap`.

- [ ] Confirm `/de/*` pages are included.
- [ ] Ensure there is no expectation of `/de/blog` in the sitemap.

### 8) nginx behavior review

Current nginx behavior:
- Redirect only `/` for German `Accept-Language` users.
- Cookie `lang` persists choice.

Tasks:
- [ ] Verify redirect doesn’t loop (it shouldn’t: English stays `/`, German goes `/de/`).
- [ ] Confirm `Cache-Control: no-store` on redirect response.
- [ ] Confirm `Vary: Accept-Language, Cookie` is present.

Optional hardening:
- Add explicit endpoints `/set-lang/de` and `/set-lang/en` to set cookie without JS.

### 9) QA checklist

Manual checks:
- [ ] First-time German browser (no cookie): `/` redirects to `/de/`.
- [ ] First-time non-German browser (no cookie): `/` stays English.
- [ ] After switching language via toggle: refresh `/` and verify it respects cookie.
- [ ] `/de/*` shows `<html lang="de">`, English shows `<html lang="en">`.
- [ ] Blog reachable from both locales, always under `/blog`.

Build checks:
- [ ] `npm run build` produces `dist/de/index.html` and other translated routes.

## Suggested translation order (iterative)

1. Header + footer labels (quick win; affects entire site)
2. Core pages: consulting, products, clients, about
3. Resume page
4. Legal pages (imprint + privacy policy)
5. 404 page copy

## Acceptance criteria (done means)

- All non-blog pages have a German version under `/de/…`.
- Language toggle switches between locales and persists via cookie.
- Blog content remains English-only and is not duplicated.
- `<html lang>` is correct per locale.
- Site builds and serves statically via nginx without runtime dependencies.
