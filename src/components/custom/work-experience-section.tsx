"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { workExperience } from "@/data/info";
import { Section, SectionHeading, SectionTitle } from "./section";

type WorkExperienceItemProps = {
  isRecent: boolean;
  xp: (typeof workExperience)[number];
  index: number;
};

function WorkExperienceItem({ isRecent, xp, index }: WorkExperienceItemProps) {
  const [open, setOpen] = useState(isRecent);
  const detailsId = `work-details-${index}`;

  return (
    <Card className="bg-transparent border-none shadow-none gap-3">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex items-center gap-4">
            <Image
              className="rounded-md shadow"
              src={xp.iconUrl}
              height={48}
              width={48}
              alt={xp.company}
            />
            <div>
              <div className="flex items-center gap-3">
                <p>{xp.company}</p>
                <Badge variant="secondary">{xp.type}</Badge>
              </div>
              <p className="text-muted-foreground">{xp.role}</p>
            </div>
          </div>
          <div className="flex flex-col mt-2 sm:mt-0 sm:items-end">
            <p className="text-muted-foreground">{xp.period}</p>
            <p className="text-muted-foreground/50">{xp.location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="inline-flex items-center gap-2 rounded-full border border-muted/40 bg-muted/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition hover:border-muted/70 hover:text-foreground"
          >
            I did this
            <motion.span
              className="flex"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ChevronDown className="size-3" />
            </motion.span>
          </button>
        </div>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={detailsId}
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <ul className="relative mt-4 border-l border-muted/40 pl-6 text-muted-foreground/70">
                {xp.points.map((p) => (
                  <li key={p} className="relative pb-4 pl-4 last:pb-0">
                    <span className="absolute left-[-9px] top-2 size-2 rounded-full bg-muted-foreground/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

export function WorkExperienceSection() {
  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Work</SectionTitle>
        This is my work experience
      </SectionHeading>
      <div className="flex flex-col gap-6 mt-4">
        {workExperience.map((xp, index) => (
          <WorkExperienceItem
            key={xp.company}
            xp={xp}
            index={index}
            isRecent={index === 0}
          />
        ))}
      </div>
    </Section>
  );
}
