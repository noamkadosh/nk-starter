import node from "@astrojs/node"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

const { PDF_VIEW } = process.env

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  devToolbar: {
    enabled: !PDF_VIEW,
  },
  integrations: [tailwind()],
  output: "server",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
})
