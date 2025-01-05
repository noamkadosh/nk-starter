import storybook from "eslint-plugin-storybook"

export default {
  core: [
    {
      ...storybook.configs["flat/recommended"],
      files: ["**/*.stories.*"],
      ignores: ["storybook-static"],
      name: "storybook",
    },
  ],
}
