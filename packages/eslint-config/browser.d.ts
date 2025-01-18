import type { Linter } from "eslint";

type Browser = {
  nounsanitized: Linter.FlatConfig[];
  compat: Linter.FlatConfig[];
  escompat: Linter.FlatConfig[];
  "eslint-html": Linter.FlatConfig[];
  "html-eslint": Linter.FlatConfig[];
};

declare module "@nk/eslint-config/browser" {
  const browser: Browser;
  export default browser;
}
