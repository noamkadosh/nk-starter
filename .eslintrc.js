/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        "@turbo/eslint-config/index.cjs",
        "@turbo/eslint-config/monorepo.cjs",
    ],
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
