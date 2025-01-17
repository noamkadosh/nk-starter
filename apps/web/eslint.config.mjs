import core from "@nk/eslint-config/core"
import next from "@nk/eslint-config/next"
import react from "@nk/eslint-config/react"
import jsx from "@nk/eslint-config/jsx"
import storybook from "@nk/eslint-config/storybook"
import tailwind from "@nk/eslint-config/tailwind"

import { base } from "../../eslint.config.js"

export default [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.mjs"],
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
  ...react.core,
  ...react.hooks,
  ...react.import,
  ...jsx.a11y,
  ...next.core,
  ...tailwind.core,
  {
    settings: {
      tailwindcss: {
        config: `${import.meta.dirname}/tailwind.config.ts`,
      },
    },
  },
  {
    ignores: [".next"],
  },
  ...storybook.core,
  ...core.prettier,
]
