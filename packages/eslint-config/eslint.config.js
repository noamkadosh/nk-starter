import parser from "@typescript-eslint/parser"

import core from "./core.js"

/** @type {import("eslint").Linter.Config} */
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
  ...core.jsdoc,
  ...core.markdown,
  ...core.prettier,
]
