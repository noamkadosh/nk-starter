module.exports = {
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: "@typescript-eslint/parser",
      },
    },
  ],
}
