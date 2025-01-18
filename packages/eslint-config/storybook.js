import storybook from "eslint-plugin-storybook";

export default {
  core: [
    ...storybook.configs["flat/recommended"].map((config) => ({
      ...config,
      files: ["**/*.stories.*"],
      ignores: ["storybook-static"],
      name: "storybook",
    })),
  ],
};
