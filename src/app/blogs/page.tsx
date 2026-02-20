import type { Metadata } from "next";
import { BlogCard } from "@/components/custom/blog-card";
import { absoluteUrl, siteConfig, toJsonLd } from "@/lib/seo";
import { source as blog } from "@/lib/source";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Technical blog posts by Harshwardhan Patil on backend engineering, web performance, and AI development.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: `Blogs | ${siteConfig.shortName}`,
    description:
      "Technical blog posts on backend engineering, web performance, and AI development.",
    url: absoluteUrl("/blogs"),
    type: "website",
    images: [siteConfig.defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blogs | ${siteConfig.shortName}`,
    description:
      "Technical blog posts on backend engineering, web performance, and AI development.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function BlogsPage() {
  const posts = blog.getPages();
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog posts",
    url: absoluteUrl("/blogs"),
    description:
      "Technical blog posts by Harshwardhan Patil on backend engineering, web performance, and AI development.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(post.url),
        name: post.data.title,
      })),
    },
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
      >
        {toJsonLd(collectionJsonLd)}
      </script>
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold font-doto">Blogs</h1>
        <p className="text-muted-foreground">
          Which I did'nt write using chatgpt
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <BlogCard key={post.url} blog={post.data} url={post.url} />
        ))}
      </div>
    </main>
  );
}
