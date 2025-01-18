import type { Linter } from "eslint";

type Astro = {
  core: Linter.FlatConfig[];
  a11y: Linter.FlatConfig[];
};

declare module "@nk/eslint-config/astro" {
  const astro: Astro;
  export default astro;
}
