/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: process.env.THEME ? "class" : "media",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {},
  },
}
