import Link from "next/link";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/info";
import { RevealGroup, Section, SectionHeading } from "./section";

export function ContactSection() {
  return (
    <Section>
      <SectionHeading className="text-muted-foreground">
        In case you want to <span className="font-mono">contact </span>
        me. You can find me here.
      </SectionHeading>
      <RevealGroup className="flex py-3 gap-2 flex-wrap">
        {socials.map((s, i) => (
          <div
            key={s.name}
            data-reveal-item
            style={{ "--reveal-index": i } as CSSProperties}
          >
            <Link href={s.href} target="_blank">
              <Button
                variant="secondary"
                className="shadow-sm transition-transform duration-160 ease-[var(--ease-out)] supports-[hover:hover]:hover:-translate-y-0.5"
              >
                {s.icon}
                {s.name}
              </Button>
            </Link>
          </div>
        ))}
      </RevealGroup>
    </Section>
  );
}
