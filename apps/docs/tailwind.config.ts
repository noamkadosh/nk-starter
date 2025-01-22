import { createPreset } from "fumadocs-ui/tailwind-plugin";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [createPreset()],
} satisfies Config;
