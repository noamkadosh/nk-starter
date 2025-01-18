import type { Linter } from "eslint";

type Monorepo = {
  turbo: Linter.FlatConfig[];
};

declare module "@nk/eslint-config/monorepo" {
  const monorepo: Monorepo;
  export default monorepo;
}
