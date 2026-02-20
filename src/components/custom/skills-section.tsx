"use client";

import { m, useReducedMotion } from "motion/react";
import { CodeTitle } from "@/components/custom/code-title";
import {
  aiTools,
  databases,
  languages,
  technologies,
  tools,
} from "@/data/info";
import {
  Section,
  SectionDescription,
  SectionHeading,
  SectionTitle,
} from "./section";
import { SkillBadge } from "./skill-badge";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";
  const whileInView = reduceMotion ? undefined : "show";
  const viewport = reduceMotion ? undefined : { once: true, amount: 0.2 };
  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

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
      <m.div
        className="flex py-3 gap-3 flex-wrap"
        variants={listVariants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
      >
        {languages.map((s) => (
          <m.div key={s.name} variants={itemVariants}>
            <SkillBadge favourite={s.favourite}>
              {s.icon}
              {s.name}
            </SkillBadge>
          </m.div>
        ))}
      </m.div>
      <CodeTitle>FRAMEWORKS/ TECHNOLOGIES</CodeTitle>
      <m.div
        className="flex py-3 gap-3 flex-wrap"
        variants={listVariants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
      >
        {technologies.map((t) => (
          <m.div key={t.name} variants={itemVariants}>
            <SkillBadge favourite={t.favourite}>
              {t.icon}
              {t.name}
            </SkillBadge>
          </m.div>
        ))}
      </m.div>
      <CodeTitle>DATABASES</CodeTitle>
      <m.div
        className="flex py-3 gap-3 flex-wrap"
        variants={listVariants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
      >
        {databases.map((t) => (
          <m.div key={t.name} variants={itemVariants}>
            <SkillBadge favourite={t.favourite}>
              {t.icon}
              {t.name}
            </SkillBadge>
          </m.div>
        ))}
      </m.div>
      <CodeTitle>DEVELOPER TOOLS</CodeTitle>
      <m.div
        className="flex py-3 gap-3 flex-wrap"
        variants={listVariants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
      >
        {tools.map((t) => (
          <m.div key={t.name} variants={itemVariants}>
            <SkillBadge favourite={t.favourite}>
              {t.icon}
              {t.name}
            </SkillBadge>
          </m.div>
        ))}
      </m.div>
      <CodeTitle>AI DEVELOPER TOOLS</CodeTitle>
      <m.div
        className="flex py-3 gap-3 flex-wrap"
        variants={listVariants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
      >
        {aiTools.map((t) => (
          <m.div key={t.name} variants={itemVariants}>
            <SkillBadge favourite={t.favourite}>
              {t.icon}
              {t.name}
            </SkillBadge>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
