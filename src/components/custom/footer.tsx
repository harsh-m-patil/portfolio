import Link from "next/link";
import { Section } from "./section";

export function Footer() {
  return (
    <Section>
      <footer className="text-muted-foreground/60 text-sm">
        Thanks for visiting my website. If you liked it, feel free to connect
        with me and if you want, grab the{" "}
        <Link
          href="https://github.com/harsh-m-patil/portfolio"
          target="_blank"
          rel="noreferrer"
          className="underline font-mono transition-colors duration-160 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground"
        >
          portfolio template on GitHub
        </Link>
        .
        <br />
        <br />
        &copy; {new Date().getFullYear()} Harshwardhan
      </footer>
    </Section>
  );
}
