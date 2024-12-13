module.exports = {
  plugins: ["testing-library"],
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  overrides: [
    {
      extends: ["plugin:testing-library/react"],
      files: ["**/{test,tests}/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    },
  ],
}
