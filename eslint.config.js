import core from "@nk/eslint-config/core"
import monorepo from "@nk/eslint-config/monorepo"

export const base = [
  ...core.typescript,
  ...core.importTypescript,
  ...core.sonarjs,
  ...core.unicorn,
  ...core.promise,
  ...core.regex,
  ...core.jsdocTypescript,
  ...core.json,
  ...core.markdown,
  ...monorepo.turbo,
]

export default [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js"],
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
  ...core.prettier,
]
