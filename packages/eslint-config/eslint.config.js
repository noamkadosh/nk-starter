import parser from "@typescript-eslint/parser"

import core from "./core.js"

export default [
  {
    languageOptions: {
      parser,
    },
  },
  ...core.javascript,
  ...core.importJavascript,
  ...core.sonarjs,
  ...core.unicorn,
  ...core.promise,
  ...core.regex,
  ...core.jsdocJavascript,
  ...core.json,
  ...core.markdown,
  {
    ignores: ["*.d.ts"],
  },
  ...core.prettier,
]
