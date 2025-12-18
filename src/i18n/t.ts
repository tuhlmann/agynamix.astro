import type { Locale } from "./types";
import { en } from "./en";
import { de } from "./de";

const tables: Record<Locale, Record<string, string>> = { en, de };

export function t(lang: Locale, key: string): string {
  return tables[lang][key] ?? tables.en[key] ?? key;
}
