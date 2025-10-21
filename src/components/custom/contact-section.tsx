import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/info";

export function ContactSection() {
  return (
    <section>
      <p className="text-muted-foreground">
        In case you want to contact me. You can find me here (
        <span className="dark:text-white font-mono">online</span>).
      </p>
      <div className="flex py-3 gap-2 flex-wrap">
        {socials.map((s) => (
          <Link href={s.href} key={s.name}>
            <Button variant="secondary">
              {s.icon}
              {s.name}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
