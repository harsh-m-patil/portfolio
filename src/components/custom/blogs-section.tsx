import { IconBrandGithub } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeading, SectionTitle } from "./section";
import { BlogCard } from "@/components/custom/blog-card";
import { source as blog } from "@/lib/source";

export function BlogsSection() {
  const posts = blog.getPages();
  const latestPost = posts.reduce((latest, curr) => {
    if (!latest) return curr;

    return new Date(curr.data.lastModified) > new Date(latest.data.lastModified)
      ? curr
      : latest;
  }, posts[0]);

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
