"use client";
import { IconArrowLeftDashed } from "@tabler/icons-react";
import type * as PageTree from "fumadocs-core/page-tree";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "../ui/button";

export interface DocsLayoutProps {
  tree: PageTree.Root;
  children: ReactNode;
}

export function DocsLayout({ tree, children }: DocsLayoutProps) {
  return (
    <TreeContextProvider tree={tree}>
      <main
        id="nd-docs-layout"
        className="[--fd-nav-height:56px] max-w-2xl mx-auto"
      >
        <Link href="/">
          <Button
            variant="secondary"
            className="rounded-full border border-primary/20 bg-white dark:bg-primary/10"
          >
            <IconArrowLeftDashed />
          </Button>
        </Link>
        {children}
      </main>
    </TreeContextProvider>
  );
}
