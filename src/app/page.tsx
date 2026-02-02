import { ContactSection } from "@/components/custom/contact-section";
import { Footer } from "@/components/custom/footer";
import { GitHubContributionsSection } from "@/components/custom/github-contributions-section";
import { HeroSection } from "@/components/custom/hero-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { SkillsSection } from "@/components/custom/skills-section";
import { WorkExperienceSection } from "@/components/custom/work-experience-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 font-sans pb-12">
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
