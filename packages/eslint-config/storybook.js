import storybook from "eslint-plugin-storybook"

export default {
  core: [
    ...storybook.configs["flat/recommended"],
    {
      ignores: ["!.storybook"],
      name: "storybook",
    },
  ],
}
