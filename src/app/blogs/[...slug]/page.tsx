import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { GiscusComments } from "@/components/custom/giscus-comments";
import { getMDXComponents } from "@/components/mdx-components";
import { absoluteUrl, siteConfig, toIsoDate, toJsonLd } from "@/lib/seo";
import { source } from "@/lib/source";

function getPageImageUrl(imageUrl?: string): string {
  if (typeof imageUrl !== "string")
    return absoluteUrl(siteConfig.defaultOgImage);
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  return absoluteUrl(imageUrl);
}

export default async function Page(props: PageProps<"/blogs/[...slug]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const canonicalUrl = absoluteUrl(page.url);
  const imageUrl = getPageImageUrl(page.data.imageUrl);
  const publishedTime = toIsoDate(page.data.lastModified);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: page.data.title,
    description: page.data.description,
    image: imageUrl,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Person",
      name: siteConfig.creator,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.creator,
      url: siteConfig.url,
    },
    ...(publishedTime ? { datePublished: publishedTime } : {}),
    ...(publishedTime ? { dateModified: publishedTime } : {}),
  };

  return (
    <DocsPage full={page.data.full}>
      <Script id="blog-post-json-ld" type="application/ld+json">
        {toJsonLd(articleJsonLd)}
      </Script>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
        <GiscusComments />
      </div>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/blogs/[...slug]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  const canonicalUrl = absoluteUrl(page.url);
  const imageUrl = getPageImageUrl(page.data.imageUrl);
  const publishedTime = toIsoDate(page.data.lastModified);

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      type: "article",
      siteName: siteConfig.shortName,
      title: page.data.title,
      description: page.data.description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          alt: page.data.title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: [imageUrl],
      creator: siteConfig.twitterHandle,
    },
  };
}
