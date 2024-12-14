import { FlatCompat } from "@eslint/eslintrc"
import reactPlugin from "eslint-plugin-react"
import globals from "globals"
import pluginQuery from "@tanstack/eslint-plugin-query"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default [
  ...pluginQuery.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat["jsx-runtime"],
    ...compat.extends("plugin:react-hooks/recommended"),
    ...compat.plugins("react-compiler"),
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      "react/jsx-sort-props": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
]
