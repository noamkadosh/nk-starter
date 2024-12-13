/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["../../.eslintrc.js", "@turbo/eslint-config/react.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.node.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "tsconfig.node.json",
        tsconfigRootDir: __dirname,
      },
    },
  },
}
