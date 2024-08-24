module.exports = {
    env: {
        browser: true,
        es2022: true,
    },
    extends: [
        "plugin:escompat/recommended",
        "plugin:compat/recommended",
        "plugin:no-unsanitized/DOM",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    plugins: ["html", "@html-eslint"],
    type: "commonjs",
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    overrides: [
        {
            extends: [
                "plugin:@html-eslint/recommended",
                "plugin:escompat/typescript-2020",
            ],
            files: ["**/*.html"],
            parser: "@html-eslint/parser",
        },
    ],
}
