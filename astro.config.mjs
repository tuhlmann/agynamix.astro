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
  integrations: [tailwind(), solid()],
})
