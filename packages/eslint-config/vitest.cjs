module.exports = {
  env: {
    es2022: true,
    "jest/globals": true,
  },
  plugins: ["jest", "jest-formatting", "jest-async", "jest-dom"],
  rules: {
    "i18n-text/no-en": "off",
  },
  settings: {
    jest: {
      version: 27,
    },
  },
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  overrides: [
    {
      extends: [
        "plugin:jest-formatting/recommended",
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
      ],
      files: ["**/{test,tests}/**/*.{test,spec}.{js,jsx}"],
    },
    {
      extends: [
        "plugin:jest-formatting/recommended",
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
      ],
      files: ["**/{test,tests}/**/*.{test,spec}.{ts,tsx}"],
    },
  ],
}
