module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ["plugin:jsx-a11y/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jsx-a11y"],
}
