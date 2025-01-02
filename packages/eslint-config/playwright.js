import playwright from "eslint-plugin-playwright"

export default {
  core: [
    {
      ...playwright.configs["flat/recommended"],
      files: ["tests/**", "**/e2e/**/*.{test,spec}.{js,jsx,ts,tsx}"],
      name: "playwright",
    },
  ],
}
