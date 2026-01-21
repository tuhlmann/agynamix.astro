// @ts-ignore
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cookieconsent from "@jop-software/astro-cookieconsent";

const site = process.env.SITE_URL || "https://www.agynamix.de";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    solidJs(),
    sitemap(),
    cookieconsent({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
      },
      language: {
        default: "en",
        autoDetect: "document",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              // Keep the banner compact; links only.
              description:
                'We use cookies to make this site work reliably and improve usability. See our <a href="/privacy-policy">Privacy Policy</a> and <a href="/imprint">Imprint</a>.',
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
            },
            preferencesModal: {
              title: "Cookie Preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Cookie Usage",
                  // Slightly longer explanation + links.
                  description:
                    'We use cookies to make this site work reliably and improve usability. You can choose which categories you want to allow. For details about data processing and your rights, please see our <a href="/privacy-policy">Privacy Policy</a> and <a href="/imprint">Imprint</a>.',
                },
                {
                  title: "Strictly Necessary Cookies",
                  description:
                    "These cookies are essential for the website to function properly. They cannot be disabled.",
                  linkedCategory: "necessary",
                },
              ],
            },
          },
          de: {
            consentModal: {
              title: "Wir verwenden Cookies",
              // Keep the banner compact; links only.
              description:
                'Wir verwenden Cookies, damit diese Website zuverlässig funktioniert und um die Bedienbarkeit zu verbessern. Mehr dazu in unserer <a href="/de/privacy-policy">Datenschutzerklärung</a> und im <a href="/de/imprint">Impressum</a>.',
              acceptAllBtn: "Alle akzeptieren",
              acceptNecessaryBtn: "Alle ablehnen",
              showPreferencesBtn: "Einstellungen verwalten",
            },
            preferencesModal: {
              title: "Cookie-Einstellungen",
              acceptAllBtn: "Alle akzeptieren",
              acceptNecessaryBtn: "Alle ablehnen",
              savePreferencesBtn: "Einstellungen speichern",
              closeIconLabel: "Schließen",
              sections: [
                {
                  title: "Cookie-Verwendung",
                  // Slightly longer explanation + links.
                  description:
                    'Wir verwenden Cookies, damit diese Website zuverlässig funktioniert und um die Bedienbarkeit zu verbessern. Sie können wählen, welche Kategorien von Cookies Sie akzeptieren möchten. Detaillierte Informationen zur Verarbeitung personenbezogener Daten und zu Ihren Rechten finden Sie in unserer <a href="/de/privacy-policy">Datenschutzerklärung</a> und im <a href="/de/imprint">Impressum</a>.',
                },
                {
                  title: "Unbedingt erforderliche Cookies",
                  description:
                    "Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie können nicht deaktiviert werden.",
                  linkedCategory: "necessary",
                },
              ],
            },
          },
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: "prism",
    drafts: true, // if you're using draft support
    html: true, // allow raw HTML like <a> or <details>
  },
});
