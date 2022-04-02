export function kebabCase(str: string, options?: any): string {
  if (typeof str !== "string") throw new TypeError("expected a string")
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\W/g, m => (/[À-ž]/.test(m) ? m : "-"))
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, m => (options?.condense ? "-" : m))
    .toLowerCase()
}
