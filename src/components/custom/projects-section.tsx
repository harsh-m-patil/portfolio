import { IconBrandGithub } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/data/info";
import { Section, SectionHeading, SectionTitle } from "./section";

export function ProjectsSection() {
  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Projects</SectionTitle>
        Which i totally made by myself.
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.map((p) => (
          <Card
            key={p.name}
            className="pt-0 bg-background/80 hover:border-dotted "
          >
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
                  <Link href={p.github} target="_blank" rel="noreferrer">
                    <IconBrandGithub className="size-4" />
                  </Link>
                  <Link href={p.href} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4" />
                  </Link>
                </div>
              </div>
              <div className="text-sm pt-1 text-muted-foreground">
                {p.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
