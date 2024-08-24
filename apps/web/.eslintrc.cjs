/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        "../../.eslintrc.js",
        "@turbo/eslint-config/next.cjs",
        "@turbo/eslint-config/react.cjs",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
}
