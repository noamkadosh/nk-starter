import type { Linter } from "eslint";

type Next = {
  core: Linter.FlatConfig[];
};

declare module "@nk/eslint-config/next" {
  const next: Next;
  export default next;
}
