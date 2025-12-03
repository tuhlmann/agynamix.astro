// @ts-ignore
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL || "https://www.agynamix.de";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [solidJs(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: "prism",
    drafts: true, // if you're using draft support
    html: true, // allow raw HTML like <a> or <details>
  },
});
