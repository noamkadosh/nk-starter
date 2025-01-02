/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import core from "@nk/eslint-config/core"
import react from "@nk/eslint-config/react"
import tailwind from "@nk/eslint-config/tailwind"

/** @type {import("eslint").Linter.Config} */
export default [
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js", "*.mjs"],
          defaultProject: "tsconfig.json",
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: `${import.meta.dirname}/tsconfig.json`,
        },
      },
    },
  },
  ...core.typescript,
  ...core.importTypescript,
  ...core.sonarjs,
  ...core.unicorn,
  ...core.promise,
  ...core.regex,
  ...core.jsdoc,
  ...react.core,
  ...react.hooks,
  ...react.compiler,
  ...react.import,
  ...tailwind.core,
  {
    settings: {
      tailwindcss: {
        config: `${import.meta.dirname}/tailwind.config.ts`,
      },
    },
  },
  {
    ignores: ["dist"],
  },
  ...core.prettier,
]
