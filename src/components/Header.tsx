import { createSignal, Show } from "solid-js"
import type { JSX } from "solid-js"
import classNames from "classnames"
import type { Locale } from "../i18n/types"
import { t } from "../i18n/t"
import { toggleLocalePath, withLangPrefix } from "../i18n/routes"
import FlagDE from "../blocks/FlagDE"
import FlagUS from "../blocks/FlagUS"

interface Props {
  activePage: string
  lang?: "en" | "de"
}

const activeCls = "border-[color:var(--hover-dark)] text-gray-900"
const inactiveCls = "border-transparent text-gray-500 hover:border-[color:var(--hover-light)] hover:text-gray-700"

const activeMobCls = "border-indigo-500 text-indigo-500"
const inactiveMobCls = "border-transparent text-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"

// Does not work, probably when rendered on server
// function ifPath(p: string, ifTrue: string, ifFalse: string): string {
//   return window.location.pathname.indexOf(p) > -1 ? ifTrue : ifFalse
// }

export default function Header(props: Props) {
  const [mmOpen, setMmOpen] = createSignal(false)

  const currentLang = (): Locale => props.lang ?? "en"

  const navHref = (href: string) => withLangPrefix(currentLang(), href)

  const computeToggle = (): { href: string; lang: Locale } => {
    if (typeof window === "undefined") {
      return { href: currentLang() === "de" ? "/" : "/de/", lang: currentLang() === "de" ? "en" : "de" }
    }
    return toggleLocalePath(window.location.pathname)
  }

  const setLangCookie = (lang: Locale) => {
    if (typeof document === "undefined") return
    const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : ""
    document.cookie = `preferred-lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
  }

  const onToggleLanguage: JSX.EventHandlerUnion<HTMLAnchorElement, MouseEvent> = e => {
    e.preventDefault()
    const next = computeToggle()
    setLangCookie(next.lang)
    if (typeof window !== "undefined") {
      window.location.assign(next.href)
    }
  }

  const Flag = () => {
    const isDe = currentLang() === "de"
    const label = isDe ? t("de", "a11y.switchToEnglish") : t("en", "a11y.switchToGerman")
    const href = typeof window === "undefined" ? (isDe ? "/" : "/de/") : computeToggle().href
    return (
      <a
        href={href}
        class="inline-flex items-center justify-center rounded-md border border-transparent text-gray-500 hover:text-gray-700 hover:border-[color:var(--hover-light)] px-2 py-1"
        aria-label={label}
        title={label}
        onClick={onToggleLanguage}
      >
        <span class="sr-only">{label}</span>
        {isDe ? (
          <FlagUS aria-hidden="true" />
        ) : (
          <FlagDE aria-hidden="true" />
        )}
      </a>
    )
  }

  return (
    <nav class="pt-7">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <a class="flex-shrink-0 flex items-center" href={navHref("/")}>
            <img class="max-w-[200px] h-auto" src="/images/logo.png" alt="AGYNAMIX Torsten Uhlmann" />
          </a>
          <div class={classNames("flex", props.activePage)}>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 text-sm md:text-base font-medium">
              <a
                href={navHref("/consulting")}
                class={classNames(
                  "inline-flex items-center px-1 pt-1 border-b-2",
                  props.activePage === "consulting" ? activeCls : inactiveCls,
                )}
                aria-current="page"
              >
                {t(currentLang(), "nav.consulting")}
              </a>

              <a
                href={navHref("/clients")}
                class={classNames(
                  "inline-flex items-center px-1 pt-1 border-b-2",
                  props.activePage === "clients" ? activeCls : inactiveCls,
                )}
              >
                {t(currentLang(), "nav.clients")}
              </a>

              <a
                href={navHref("/products")}
                class={classNames(
                  "inline-flex items-center px-1 pt-1 border-b-2",
                  props.activePage === "products" ? activeCls : inactiveCls,
                )}
              >
                {t(currentLang(), "nav.products")}
              </a>

              <a
                href={navHref("/blog")}
                class={classNames(
                  "inline-flex items-center px-1 pt-1 border-b-2",
                  props.activePage === "blog" ? activeCls : inactiveCls,
                )}
              >
                {t(currentLang(), "nav.blog")}
              </a>

              <a
                href={navHref("/about")}
                class={classNames(
                  "inline-flex items-center px-1 pt-1 border-b-2",
                  props.activePage === "about" ? activeCls : inactiveCls,
                )}
              >
                {t(currentLang(), "nav.about")}
              </a>
            </div>
          </div>
          <div class="-mr-2 flex items-center gap-3">
            <div class="hidden sm:flex">
              <Flag />
            </div>
            <div class="flex items-center sm:hidden">
              <Flag />
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-20"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMmOpen(v => !v)}
              >
                <span class="sr-only">{t(currentLang(), "a11y.openMainMenu")}</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {mmOpen() ? (
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <Show when={mmOpen()}>
        <div
          class="sm:hidden absolute w-screen h-screen flex justify-center items-center text-center top-0 bg-[#061324] z-10"
          id="mobile-menu"
        >
          <div class="pt-2 pb-3 space-y-1 text-xl font-medium">
            <a
              href={navHref("/consulting")}
              class={classNames(
                "block pl-3 pr-4 py-2 border-l-4",
                props.activePage === "consulting" ? activeMobCls : inactiveMobCls,
              )}
              aria-current="page"
            >
              {t(currentLang(), "nav.consulting")}
            </a>

            <a
              href={navHref("/clients")}
              class={classNames(
                "block pl-3 pr-4 py-2 border-l-4",
                props.activePage === "clients" ? activeMobCls : inactiveMobCls,
              )}
            >
              {t(currentLang(), "nav.clients")}
            </a>

            <a
              href={navHref("/products")}
              class={classNames(
                "block pl-3 pr-4 py-2 border-l-4",
                props.activePage === "products" ? activeMobCls : inactiveMobCls,
              )}
            >
              {t(currentLang(), "nav.products")}
            </a>

            <a
              href={navHref("/blog")}
              class={classNames(
                "block pl-3 pr-4 py-2 border-l-4",
                props.activePage === "blog" ? activeMobCls : inactiveMobCls,
              )}
            >
              {t(currentLang(), "nav.blog")}
            </a>

            <a
              href={navHref("/about")}
              class={classNames(
                "block pl-3 pr-4 py-2 border-l-4",
                props.activePage === "about" ? activeMobCls : inactiveMobCls,
              )}
            >
              {t(currentLang(), "nav.about")}
            </a>
          </div>
        </div>
      </Show>
    </nav>
  )
}
