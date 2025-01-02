/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import core from "@nk/eslint-config/core"

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
  ...core.markdown,
  ...core.prettier,
]
