import nounsanitized from "eslint-plugin-no-unsanitized"
import compat from "eslint-plugin-compat"
import globals from "globals"
import escompat from "eslint-plugin-escompat"
import eslintHtml from "eslint-plugin-html"
import htmlEslint from "@html-eslint/eslint-plugin"

export default [
  nounsanitized.configs.recommended,
  compat.configs["flat/recommended"],
  {
    plugins: {
      escompat,
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.html"],
    plugins: { html: eslintHtml },
  },
  {
    ...htmlEslint.configs["flat/recommended"],
    files: ["**/*.html"],
  },
]
