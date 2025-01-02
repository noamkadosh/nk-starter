import js from "@eslint/js"
import prettier from "eslint-config-prettier"
import importPlugin from "eslint-plugin-import"
import jsdoc from "eslint-plugin-jsdoc"
import markdown from "eslint-plugin-markdown"
import promise from "eslint-plugin-promise"
import regexp from "eslint-plugin-regexp"
import sonarjs from "eslint-plugin-sonarjs"
import unicorn from "eslint-plugin-unicorn"
import globals from "globals"
import ts from "typescript-eslint"

const importOrder = [
  "error",
  {
    groups: [
      "builtin",
      "external",
      "internal",
      "parent",
      "sibling",
      "index",
      "object",
      "type",
    ],
    pathGroups: [
      {
        pattern: "react",
        group: "external",
        position: "before",
      },
      {
        pattern: "@/**",
        group: "internal",
        position: "after",
      },
    ],
    pathGroupsExcludedImportTypes: ["react"],
    "newlines-between": "always",
    alphabetize: {
      order: "asc",
      caseInsensitive: true,
    },
  },
]

export default {
  importJavascript: [
    {
      ...importPlugin.flatConfigs.recommended,
      name: "importJavascript",
      rules: {
        "import/order": importOrder,
      },
    },
  ],
  importTypescript: [
    {
      ...importPlugin.flatConfigs.recommended,
      ...importPlugin.flatConfigs.typescript,
      name: "importTypescript",
      rules: {
        "import/order": importOrder,
      },
    },
  ],
  javascript: [{ ...js.configs.recommended, name: "javascript" }],
  jsdoc: [{ ...jsdoc.configs["flat/recommended"], name: "jsdoc" }],
  markdown: markdown.configs.recommended,
  prettier: [{ ...prettier, name: "prettier" }],
  promise: [{ ...promise.configs["flat/recommended"], name: "promise" }],
  regex: [{ ...regexp.configs["flat/recommended"], name: "regexp" }],
  sonarjs: [
    {
      ...sonarjs.configs.recommended,
      name: "sonarjs",
      rules: {
        "sonarjs/no-empty-group": "off",
      },
    },
  ],
  typescript: ts.config(
    js.configs.recommended,
    ts.configs.recommendedTypeChecked,
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
    },
  ),
  unicorn: [
    {
      languageOptions: {
        globals: globals.builtin,
      },
      name: "unicorn",
      plugins: {
        unicorn: unicorn,
      },
      rules: {
        ...unicorn.configs.recommended.rules,
        "unicorn/filename-case": "off",
        "unicorn/numeric-separators-style": "off",
        "unicorn/prefer-module": "off",
        "unicorn/prefer-optional-catch-binding": "off",
        "unicorn/prevent-abbreviations": "off",
      },
    },
  ],
}
