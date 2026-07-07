import Link from "next/link";
import { Section } from "./section";

export function Footer() {
  return (
    <Section>
      <footer className="text-muted-foreground/60 text-sm">
        Thanks for visiting my website. If you liked it, feel free to connect
        with me and if you want to use this portfolio template
        <Link
          href="https://github.com/harsh-m-patil/portfolio"
          target="_blank"
          rel="noreferrer"
          className="ml-1 underline font-mono transition-colors duration-160 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground"
        >
          here
        </Link>{" "}
        you go.
        <br />
        <br />
        &copy; {new Date().getFullYear()} Harshwardhan
      </footer>
    </Section>
  );
}
