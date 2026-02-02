import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/info";
import { Section, SectionHeading } from "./section";

export function ContactSection() {
  return (
    <Section>
      <SectionHeading className="text-muted-foreground">
        In case you want to <span className="font-mono">contact </span>
        me. You can find me here.
      </SectionHeading>
      <div className="flex py-3 gap-2 flex-wrap">
        {socials.map((s) => (
          <Link href={s.href} key={s.name} target="_blank">
            <Button variant="secondary">
              {s.icon}
              {s.name}
            </Button>
          </Link>
        ))}
      </div>
    </Section>
  );
}
