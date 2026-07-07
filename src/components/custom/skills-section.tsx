import type { CSSProperties } from "react";
import { CodeTitle } from "@/components/custom/code-title";
import {
  aiTools,
  databases,
  languages,
  technologies,
  tools,
} from "@/data/info";
import {
  RevealGroup,
  Section,
  SectionDescription,
  SectionHeading,
  SectionTitle,
} from "./section";
import { SkillBadge } from "./skill-badge";

type Skill = {
  name: string;
  icon: React.ReactNode;
  favourite?: boolean;
};

function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <RevealGroup className="flex py-3 gap-3 flex-wrap">
      {skills.map((s, i) => (
        <div
          key={s.name}
          data-reveal-item
          style={{ "--reveal-index": i } as CSSProperties}
        >
          <SkillBadge favourite={s.favourite}>
            {s.icon}
            {s.name}
          </SkillBadge>
        </div>
      ))}
    </RevealGroup>
  );
}

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
      <SkillList skills={languages} />
      <CodeTitle>FRAMEWORKS/ TECHNOLOGIES</CodeTitle>
      <SkillList skills={technologies} />
      <CodeTitle>DATABASES</CodeTitle>
      <SkillList skills={databases} />
      <CodeTitle>DEVELOPER TOOLS</CodeTitle>
      <SkillList skills={tools} />
      <CodeTitle>AI DEVELOPER TOOLS</CodeTitle>
      <SkillList skills={aiTools} />
    </Section>
  );
}
