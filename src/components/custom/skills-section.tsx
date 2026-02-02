import { CodeTitle } from "@/components/custom/code-title";
import { databases, languages, technologies, tools } from "@/data/info";
import {
  Section,
  SectionDescription,
  SectionHeading,
  SectionTitle,
} from "./section";
import { SkillBadge } from "./skill-badge";

export function SkillsSection() {
  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Skills</SectionTitle>
        Tech I like and use
      </SectionHeading>
      <SectionDescription>
        These are some of the techlogies that I have learned and grown to love
        over my tech journey.
      </SectionDescription>
      <CodeTitle>LANGUAGES</CodeTitle>
      <div className="flex py-3 gap-3 flex-wrap">
        {languages.map((s) => (
          <SkillBadge key={s.name}>
            {s.icon}
            {s.name}
          </SkillBadge>
        ))}
      </div>
      <CodeTitle>FRAMEWORKS/ TECHNOLOGIES</CodeTitle>
      <div className="flex py-3 gap-3 flex-wrap">
        {technologies.map((t) => (
          <SkillBadge key={t.name}>
            {t.icon}
            {t.name}
          </SkillBadge>
        ))}
      </div>
      <CodeTitle>DATABASES</CodeTitle>
      <div className="flex py-3 gap-3 flex-wrap">
        {databases.map((t) => (
          <SkillBadge key={t.name}>
            {t.icon}
            {t.name}
          </SkillBadge>
        ))}
      </div>
      <CodeTitle>DEVELOPER TOOLS</CodeTitle>
      <div className="flex py-3 gap-3 flex-wrap">
        {tools.map((t) => (
          <SkillBadge key={t.name}>
            {t.icon}
            {t.name}
          </SkillBadge>
        ))}
      </div>
    </Section>
  );
}
