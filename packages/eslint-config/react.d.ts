import type { Linter } from "eslint";

type React = {
  core: Linter.FlatConfig[];
  compiler: Linter.FlatConfig[];
  hooks: Linter.FlatConfig[];
  query: Linter.FlatConfig[];
  import: Linter.FlatConfig[];
};

declare module "@nk/eslint-config/react" {
  const react: React;
  export default react;
}
