import { IconBrandGithub } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/data/info";
import { RevealGroup, Section, SectionHeading, SectionTitle } from "./section";

export function ProjectsSection() {
  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Projects</SectionTitle>
        Which i totally made by myself.
      </SectionHeading>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.map((p, i) => (
          <div
            key={p.name}
            data-reveal-item
            style={{ "--reveal-index": i } as CSSProperties}
          >
            <Card className="pt-0 bg-background/80 transition-[border-color,background-color,box-shadow,transform] duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:border-dotted supports-[hover:hover]:hover:shadow-lg supports-[hover:hover]:hover:-translate-y-0.5">
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
                      aria-label={`${p.name} source code on GitHub`}
                      className="text-muted-foreground transition-[color,transform] duration-160 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground active:scale-[0.9]"
                    >
                      <IconBrandGithub className="size-4" />
                    </Link>
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} live demo`}
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
          </div>
        ))}
      </RevealGroup>
    </Section>
  );
}
