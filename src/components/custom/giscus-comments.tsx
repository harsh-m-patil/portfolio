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
      repoId="R_kgDOO14CKg"
      category="Announcements"
      categoryId="DIC_kwDOO14CKs4C1SmO"
      mapping="specific"
      reactionsEnabled="1"
      term="comments"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      lang="en"
      loading="lazy"
    />
  );
}
