import { BlogCard } from "@/components/custom/blog-card";
import { toValidDate } from "@/lib/seo";
import { source as blog } from "@/lib/source";
import { Section, SectionHeading, SectionTitle } from "./section";

export function BlogsSection() {
  const posts = blog.getPages();
  const latestPost = posts.reduce<typeof posts[number] | undefined>((latest, curr) => {
    if (!latest) return curr;

    const currDate = toValidDate(curr.data.lastModified);
    const latestDate = toValidDate(latest.data.lastModified);

    if (!currDate) return latest;
    if (!latestDate) return curr;

    return currDate > latestDate ? curr : latest;
  }, undefined);

  if (!latestPost) return null;

  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Check out my latest blog</SectionTitle>
      </SectionHeading>
      <div className="py-4">
        <BlogCard blog={latestPost.data} url={latestPost.url} />
      </div>
    </Section>
  );
}
