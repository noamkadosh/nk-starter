module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ["plugin:tailwindcss/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["tailwindcss"],
  rules: {
    "tailwindcss/classnames-order": "error",
    "tailwindcss/no-custom-classname": "off",
  },
}
