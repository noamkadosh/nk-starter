import js from "@eslint/js"
import json from "@eslint/json"
import markdown from "@eslint/markdown"
import prettier from "eslint-config-prettier"
import importPlugin from "eslint-plugin-import"
import jsdoc from "eslint-plugin-jsdoc"
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
        pattern: "@*/**",
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
      files: ["**/*.{js|mjs|jsx}"],
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
      files: ["**/*.{ts|tsx|js|mjs|jsx}"],
      name: "importTypescript",
      rules: {
        "import/order": importOrder,
      },
    },
  ],
  javascript: [
    {
      ...js.configs.recommended,
      files: ["**/*.{js|mjs|jsx}"],
      name: "javascript",
    },
  ],
  jsdocJavascript: [
    {
      ...jsdoc.configs["flat/recommended"],
      files: ["**/*.{js|mjs|jsx}"],
      name: "jsdocJavascript",
    },
  ],
  jsdocTypescript: [
    {
      ...jsdoc.configs["flat/recommended-typescript"],
      files: ["**/*.{ts|tsx|js|mjs|jsx}"],
      name: "jsdocTypscript",
    },
  ],
  json: [
    {
      ...json.configs.recommended,
      files: ["**/*.json"],
      ignores: ["package-lock.json"],
      name: "json",
      language: "json/json",
    },
  ],
  markdown: markdown.configs.recommended,
  prettier: [{ ...prettier, name: "prettier" }],
  promise: [
    {
      ...promise.configs["flat/recommended"],
      files: ["**/*.{ts|tsx|js|mjs|jsx}"],
      name: "promise",
    },
  ],
  regex: [
    {
      ...regexp.configs["flat/recommended"],
      files: ["**/*.{ts|tsx|js|mjs|jsx}"],
      name: "regexp",
    },
  ],
  sonarjs: [
    {
      ...sonarjs.configs.recommended,
      files: ["**/*.{ts|tsx|js|mjs|jsx}"],
      name: "sonarjs",
      rules: {
        "sonarjs/no-empty-group": "off",
      },
    },
  ],
  typescript: ts.config(
    {
      extends: [js.configs.recommended, ts.configs.recommendedTypeChecked],
      ignores: ["**/*.json", "**/*.md", "**/*.mdx", "**/*.astro"],
      // files: ["**/*.{ts|tsx|js|mjs|jsx}"],
    },
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
      files: ["**/*.{ts|tsx|js|mjs|jsx}"],
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
