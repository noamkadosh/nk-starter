import jest from "eslint-plugin-jest";
import jestDom from "eslint-plugin-jest-dom";

const shared = {
  files: ["**/{test,tests}/**/*.{test,spec}.{ts,tsx}"],
  name: "jest",
  settings: {
    jest: {
      version: 27,
    },
  },
};

export default {
  core: [
    {
      ...shared,
      ...jest.configs["flat/recommended"],
    },
  ],
  dom: [
    {
      ...shared,
      ...jestDom.configs["flat/recommended"],
    },
  ],
};
