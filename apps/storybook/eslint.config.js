import core from "@nk/eslint-config/core";
import storybook from "@nk/eslint-config/storybook";

import { base } from "../../eslint.config.js";

export default [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js"],
          defaultProject: "tsconfig.json",
        },
        tsconfigRootDir: `${import.meta.dirname}`,
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
  ...storybook.core,
  {
    ignores: ["storybook-static"],
  },
  ...core.prettier,
];
