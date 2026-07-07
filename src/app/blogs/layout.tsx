import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "@/components/layout/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/blogs">) {
  const base = baseOptions();
  return (
    <RootProvider>
      <DocsLayout tree={source.pageTree} {...base}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
