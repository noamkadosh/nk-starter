import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"

const { CI } = process.env

// https://astro.build/config
export default defineConfig({
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
