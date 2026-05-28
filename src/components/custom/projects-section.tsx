"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/data/info";
import { Section, SectionHeading, SectionTitle } from "./section";

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;
  const initial = reduceMotion ? false : "hidden";
  const whileInView = reduceMotion ? undefined : "show";
  const viewport = reduceMotion ? undefined : { once: true, amount: 0.2 };
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.36, ease: easeOut },
    },
  };

  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Projects</SectionTitle>
        Which i totally made by myself.
      </SectionHeading>
      <m.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        variants={containerVariants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
      >
        {projects.map((p) => (
          <m.div
            key={p.name}
            variants={itemVariants}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -3, scale: 1.01, boxShadow: "var(--shadow-lg)" }
            }
            transition={{ duration: 0.18, ease: easeOut }}
          >
            <Card className="pt-0 bg-background/80 transition-[border-color,background-color,box-shadow] duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:border-dotted">
              <CardHeader className="p-0 m-0">
                <Image
                  src={p.imageUrl}
                  height="150"
                  width="150"
                  loading="lazy"
                  className="object-cover rounded-t-xl w-full max-h-40"
                  alt={p.name}
                ></Image>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  {p.name}
                  <div className="flex gap-4">
                    <Link
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-[color,transform] duration-160 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground active:scale-[0.9]"
                    >
                      <IconBrandGithub className="size-4" />
                    </Link>
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-[color,transform] duration-160 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground active:scale-[0.9]"
                    >
                      <ExternalLink className="size-4" />
                    </Link>
                  </div>
                </div>
                <div className="text-sm pt-1 text-muted-foreground">
                  {p.description}
                </div>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
