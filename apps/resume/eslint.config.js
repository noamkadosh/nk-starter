/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import astro from "@nk/eslint-config/astro"
import core from "@nk/eslint-config/core"
import jsx from "@nk/eslint-config/jsx"
import tailwind from "@nk/eslint-config/tailwind"

import { base } from "../../eslint.config.js"

export default [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [],
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
  ...astro.core,
  ...astro.a11y,
  ...jsx.a11y,
  ...tailwind.core,
  {
    settings: {
      tailwindcss: {
        config: `${import.meta.dirname}/tailwind.config.ts`,
      },
    },
  },
  {
    ignores: [".astro", "dist"],
  },
  ...core.prettier,
]
