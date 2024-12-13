/** @type {import("eslint").Linter.Config} */
module.exports = {
  // extends: ["../../.eslintrc.cjs", "@turbo/eslint-config/astro.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    extraFileExtensions: [".astro", ".mdx"],
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
  },
}
