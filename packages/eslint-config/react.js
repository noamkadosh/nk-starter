import { FlatCompat } from "@eslint/eslintrc"
import pluginQuery from "@tanstack/eslint-plugin-query"
import importPlugin from "eslint-plugin-import"
import reactPlugin from "eslint-plugin-react"
import globals from "globals"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default {
  core: [
    {
      files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
      ...reactPlugin.configs.flat.recommended,
      ...reactPlugin.configs.flat["jsx-runtime"],
      languageOptions: {
        ...reactPlugin.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
      name: "react",
      rules: {
        ...reactPlugin.configs.flat.recommended.rules,
        "react/jsx-sort-props": "error",
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
  compiler: compat.plugins("react-compiler"),
  hooks: compat.extends("plugin:react-hooks/recommended"),
  query: pluginQuery.configs["flat/recommended"],
  import: [importPlugin.flatConfigs.recommended],
}
