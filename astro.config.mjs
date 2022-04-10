import { defineConfig } from "astro/config"
import solid from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config

// @ts-check
// export default defineConfig({
//   integrations: [
//     tailwind({
//       config: { path: "./tailwind.config.cjs", applyBaseStyles: false },
//     }),
//     solid(),
//   ],
// })
export default defineConfig({
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
      // Learn more about this configuration here:
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      langs: ["astro", "javascript", "js", "typescript", "ts", "scala", "java", "sql", "clojure", "css", "rust", "rs"],
      wrap: true,
    },
  },
  integrations: [tailwind(), solid()],
})
