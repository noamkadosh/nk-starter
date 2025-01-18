import type { Linter } from "eslint";

type Jest = {
  core: Linter.FlatConfig[];
  dom: Linter.FlatConfig[];
};

declare module "@nk/eslint-config/jest" {
  const jest: Jest;
  export default jest;
}
