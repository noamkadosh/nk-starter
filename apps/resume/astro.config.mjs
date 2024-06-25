import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

const { CI } = process.env;

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx(), tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  output: "server",
  adapter: vercel(),
  devToolbar: {
    enabled: !CI,
  },
});
