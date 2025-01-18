import htmlEslint from "@html-eslint/eslint-plugin";
import compat from "eslint-plugin-compat";
import escompat from "eslint-plugin-escompat";
import eslintHtml from "eslint-plugin-html";
import nounsanitized from "eslint-plugin-no-unsanitized";
import globals from "globals";

export default {
  nounsanitized: nounsanitized.configs.recommended,
  compat: compat.configs["flat/recommended"],
  escompat: [
    {
      name: "escompat",
      plugins: {
        escompat,
      },
      languageOptions: {
        globals: globals.browser,
      },
    },
  ],
  "eslint-html": [
    {
      files: ["**/*.html"],
      name: "eslint-html",
      plugins: { html: eslintHtml },
    },
  ],
  "html-eslint": [
    {
      ...htmlEslint.configs["flat/recommended"],
      files: ["**/*.html"],
      name: "html-eslint",
    },
  ],
};
