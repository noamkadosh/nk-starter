import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { PropsWithChildren } from "react";
import { baseOptions } from "@docs/app/layout.config";
import { source } from "@docs/lib/source";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
