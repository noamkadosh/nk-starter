/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["@turbo/eslint-config/react-internal.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.node.json",
        tsconfigRootDir: __dirname,
    },
}
