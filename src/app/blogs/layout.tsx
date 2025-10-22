import { DocsLayout } from "@/components/layout/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/blogs">) {
  const base = baseOptions();
  return (
    <DocsLayout tree={source.pageTree} {...base}>
      {children}
    </DocsLayout>
  );
}
