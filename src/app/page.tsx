import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/custom/hero-section";
import { ContactSection } from "@/components/custom/contact-section";
import { WorkExperienceSection } from "@/components/custom/work-experience-section";
import { SkillsSection } from "@/components/custom/skills-section";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 font-sans pb-12">
      <HeroSection />
      <Separator className="my-6" />
      <ContactSection />
      <Separator className="my-6" />
      <WorkExperienceSection />
      <Separator className="my-6" />
      <SkillsSection />
      <Separator className="my-6" />
    </main>
  );
}
