/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@nk/eslint-config/index.cjs", "@nk/eslint-config/monorepo.cjs"],
  root: true,
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".d.ts", ".ts", ".tsx"],
        moduleDirectory: ["./"],
      },
    },
  },
}
