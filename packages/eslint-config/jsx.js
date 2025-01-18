import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default {
  a11y: [
    {
      ...jsxA11y.flatConfigs.recommended,
      files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
      languageOptions: {
        ...jsxA11y.flatConfigs.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
      name: "jsx-a11y",
    },
  ],
};
