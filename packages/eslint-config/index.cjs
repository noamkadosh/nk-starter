module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended-legacy",
    "plugin:import/recommended",
    // "plugin:jsdoc/recommended",
    "plugin:security/recommended-legacy",
    // "plugin:array-func/recommended",
    // "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:switch-case/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "unicorn",
    "sonarjs",
    "jsdoc",
    "no-secrets",
    "no-constructor-bind",
    // "no-use-extend-native",
    "optimize-regex",
    "switch-case",
    "sort-keys-fix",
    "prettier",
  ],
  rules: {
    "array-func/prefer-array-from": "off",
    "comma-dangle": ["error", "always-multiline"],
    "filenames/match-regex": "off",
    "import/extensions": [
      "error",
      "never",
      {
        css: "always",
        html: "always",
        json: "always",
        json5: "always",
        jsonc: "always",
        png: "always",
        sass: "always",
        scss: "always",
        svg: "always",
      },
    ],
    "import/no-nodejs-modules": "off",
    "new-cap": ["error", { capIsNew: false }],
    "no-constructor-bind/no-constructor-bind": "error",
    "no-constructor-bind/no-constructor-state": "error",
    "no-secrets/no-secrets": "error",
    "no-unused-vars": [
      "error",
      { args: "none", argsIgnorePattern: "ctx|res|req|next" },
    ],
    "object-curly-spacing": ["error", "always"],
    "optimize-regex/optimize-regex": [
      "error",
      {
        blacklist: ["charClassClassrangesMerge"],
      },
    ],
    "sort-keys-fix/sort-keys-fix": [
      "error",
      "asc",
      { caseSensitive: true, natural: false },
    ],
    "spaced-comment": [
      "error",
      "always",
      { exceptions: ["#"], markers: ["/"] },
    ],
    "unicorn/filename-case": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-optional-catch-binding": "off",
    "unicorn/prevent-abbreviations": "off",
  },
  settings: {
    jsdoc: {
      mode: "typescript",
    },
  },
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      plugins: ["@typescript-eslint", "deprecation"],
      rules: {
        "@typescript-eslint/no-misused-promises": [
          "error",
          { checksVoidReturn: false },
        ],
        "deprecation/deprecation": "warn",
        "import/no-unresolved": "error",
        "jsdoc/require-param-type": "off",
        "jsdoc/require-returns-type": "off",
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
    // {
    //     extends: ["plugin:json/recommended-with-comments-legacy"],
    //     files: ["**/*.json"],
    // },
    // {
    //     extends: [
    //         "plugin:jsonc/recommended-with-json",
    //         "plugin:jsonc/prettier",
    //     ],
    //     files: ["**/*.{jsonc,json5}"],
    // },
    // {
    //     extends: ["plugin:yml/standard", "plugin:yml/prettier"],
    //     files: ["**/*.{yml,yaml}"],
    // },
    // {
    //     extends: ["plugin:toml/standard"],
    //     files: ["**/*.toml"],
    // },
    // {
    //     extends: ["plugin:markdown/recommended"],
    //     files: ["**/*.md"],
    //     rules: {
    //         "no-undef": "off",
    //     },
    // },
    // {
    //     files: ["**/*.{cjs, js}"],
    //     rules: {
    //         "import/no-commonjs": "off",
    //     },
    // },
    // {
    //     files: ["**/*.config.*"],
    //     rules: {
    //         "import/no-nodejs-modules": "off",
    //     },
    // },
    // {
    //     files: ["**/*.mjs"],
    //     rules: {
    //         "import/no-commonjs": "error",
    //     },
    // },
  ],
}
