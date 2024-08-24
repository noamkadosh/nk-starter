import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"
import node from "@astrojs/node"
const { CI } = process.env

// https://astro.build/config
export default defineConfig({
    adapter: node({
        mode: "standalone",
    }),
    devToolbar: {
        enabled: !CI,
    },
    integrations: [icon(), mdx(), tailwind()],
    output: "server",
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
})
