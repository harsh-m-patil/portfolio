"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export function GiscusComments() {
  const { resolvedTheme } = useTheme();

  // Don't render until theme is resolved to prevent flash
  if (!resolvedTheme) return null;

  return (
    <Giscus
      id="comments"
      repo="harsh-m-patil/portfolio"
      repoId="R_kgDON2Z6Ww"
      category="General"
      categoryId="DIC_kwDON2Z6W84Cl-1o"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      lang="en"
      loading="lazy"
    />
  );
}
