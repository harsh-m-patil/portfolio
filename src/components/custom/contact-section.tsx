"use client";

import { m, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/info";
import { Section, SectionHeading } from "./section";

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;
  const initial = reduceMotion ? false : "hidden";
  const whileInView = reduceMotion ? undefined : "show";
  const viewport = reduceMotion ? undefined : { once: true, amount: 0.3 };
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.28, ease: easeOut },
    },
  };

  return (
    <Section>
      <SectionHeading className="text-muted-foreground">
        In case you want to <span className="font-mono">contact </span>
        me. You can find me here.
      </SectionHeading>
      <m.div
        className="flex py-3 gap-2 flex-wrap"
        variants={containerVariants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
      >
        {socials.map((s) => (
          <m.div
            key={s.name}
            variants={itemVariants}
            whileHover={
              reduceMotion ? undefined : { y: -2, transition: { duration: 0.16, ease: easeOut } }
            }
          >
            <Link href={s.href} target="_blank">
              <Button variant="secondary" className="shadow-sm">
                {s.icon}
                {s.name}
              </Button>
            </Link>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
