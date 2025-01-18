import testingLibrary from "eslint-plugin-testing-library";

export default {
  core: [
    {
      ...testingLibrary.configs["flat/react"],
      files: ["**/{test,tests}/**/*.{test,spec}.{js,jsx,ts,tsx}"],
      name: "testing-library",
    },
  ],
};
