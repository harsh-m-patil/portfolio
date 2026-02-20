import type { Metadata } from "next";
import { ContactSection } from "@/components/custom/contact-section";
import { Footer } from "@/components/custom/footer";
import { GitHubContributionsSection } from "@/components/custom/github-contributions-section";
import { HeroSection } from "@/components/custom/hero-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { SkillsSection } from "@/components/custom/skills-section";
import { WorkExperienceSection } from "@/components/custom/work-experience-section";
import { Separator } from "@/components/ui/separator";
import { absoluteUrl, siteConfig, toJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.creator,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: siteConfig.sameAs,
    image: absoluteUrl("/photo.jpg"),
    jobTitle: "Full Stack Developer and AI Engineer",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <main className="max-w-2xl mx-auto px-4 font-sans pb-12">
      <script
        type="application/ld+json"
      >
        {toJsonLd(personJsonLd)}
      </script>
      <script
        type="application/ld+json"
      >
        {toJsonLd(websiteJsonLd)}
      </script>
      <HeroSection />
      <Separator className="my-6" />
      <ContactSection />
      <Separator className="my-6" />
      <GitHubContributionsSection />
      <Separator className="my-6" />
      <WorkExperienceSection />
      <Separator className="my-6" />
      <SkillsSection />
      <Separator className="my-6" />
      <ProjectsSection />
      <Separator className="my-6" />
      <Footer />
    </main>
  );
}
