import type { Locale } from "./types";

const BLOG_PREFIXES = ["/blog", "/tags"]; // blog stays English-only

function isExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href);
}

function isSpecialScheme(href: string): boolean {
  return /^(mailto:|tel:)/.test(href);
}

export function isBlogPath(pathname: string): boolean {
  return BLOG_PREFIXES.some(p => pathname === p || pathname.startsWith(`${p}/`));
}

export function stripTrailingSlash(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function withLangPrefix(lang: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  if (isExternal(href) || isSpecialScheme(href)) return href;
  if (isBlogPath(href)) return href;

  const normalized = stripTrailingSlash(href);
  if (lang === "de") {
    if (normalized === "/de" || normalized.startsWith("/de/")) return href;
    return normalized === "/" ? "/de/" : `/de${normalized}`;
  }

  // lang === "en"
  if (normalized === "/de") return "/";
  if (normalized.startsWith("/de/")) return normalized.slice(3) || "/";
  return href;
}

const DE_ALLOWLIST = new Set<string>([
  "/de/",
  "/de/about",
  "/de/clients",
  "/de/consulting",
  "/de/products",
  "/de/resume",
  "/de/imprint",
  "/de/privacy-policy",
]);

export function toggleLocalePath(currentPathname: string): { href: string; lang: Locale } {
  const pathname = stripTrailingSlash(currentPathname || "/");

  // Blog/tags never switch to /de
  if (isBlogPath(pathname)) {
    return { href: pathname === "" ? "/" : pathname, lang: "en" };
  }

  const isDe = pathname === "/de" || pathname.startsWith("/de/");
  if (isDe) {
    const english = pathname === "/de" ? "/" : pathname.slice(3) || "/";
    return { href: english === "" ? "/" : english, lang: "en" };
  }

  const german = pathname === "/" ? "/de/" : `/de${pathname}`;
  if (!DE_ALLOWLIST.has(german)) {
    return { href: "/de/", lang: "de" };
  }
  return { href: german, lang: "de" };
}

export function localeAlternates(pathname: string): { enPath: string; dePath: string } | null {
  const p = stripTrailingSlash(pathname || "/");
  if (isBlogPath(p)) return null;

  const isDe = p === "/de" || p.startsWith("/de/");
  const enPath = isDe ? (p === "/de" ? "/" : p.slice(3) || "/") : p || "/";
  const dePath = enPath === "/" ? "/de/" : `/de${enPath}`;
  return { enPath, dePath };
}
