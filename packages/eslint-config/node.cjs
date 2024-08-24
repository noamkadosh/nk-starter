module.exports = {
    env: {
        es2022: true,
        node: true,
    },
    extends: ["plugin:node/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
    },
    plugins: ["sql"],
    rules: {
        "no-console": "off",
        "node/no-missing-import": "off",
        "node/no-missing-require": "off",
        "node/no-unpublished-import": "off",
        "node/no-unsupported-features/es-syntax": "off",
    },
}
