/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import astro from "@nk/eslint-config/astro"
import core from "@nk/eslint-config/core"
import tailwind from "@nk/eslint-config/tailwind"

import { base } from "../../eslint.config.js"

export default [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        project: true,
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
  ...tailwind.core,
  {
    settings: {
      tailwindcss: {
        config: `${import.meta.dirname}/tailwind.config.ts`,
      },
    },
  },
  ...core.prettier,
]
