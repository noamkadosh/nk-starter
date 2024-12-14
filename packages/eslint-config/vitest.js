import vitest from "@vitest/eslint-plugin"

export default [
  {
    files: ["**/{test,tests}/**/*.{test,spec}.{ts,tsx}"],
    ...vitest.configs.recommended,
  },
]
