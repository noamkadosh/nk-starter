import vitest from "@vitest/eslint-plugin";

export default {
  core: [
    {
      ...vitest.configs.recommended,
      files: ["**/{test,tests}/**/*.{test,spec}.{ts,tsx}"],
      name: "vitest",
    },
  ],
};
