import type { Linter } from "eslint";

type Tailwind = {
  core: Linter.FlatConfig[];
};

declare module "@nk/eslint-config/tailwind" {
  const tailwind: Tailwind;
  export default tailwind;
}
