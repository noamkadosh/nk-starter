module.exports = {
    env: {
        browser: true,
        es2022: true,
    },
    extends: [
        "plugin:github/react",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:@tanstack/eslint-plugin-query/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "react-hooks", "@tanstack/query"],
    rules: {
        "react/jsx-sort-props": "error",
        "react/react-in-jsx-scope": "off",
    },
    settings: {
        react: {
            version: "18.0.0",
        },
    },
}
