import { Download } from "lucide-react";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";

function stagger(delay: number): CSSProperties {
  return { "--stagger": `${delay}s` } as CSSProperties;
}

export function HeroSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div>
          <h1
            className="animate-fade-in-up text-3xl text-black dark:text-white font-doto font-extrabold uppercase"
            style={stagger(0.04)}
          >
            Harshwardhan Patil
          </h1>
          <p
            className="animate-fade-in-up text-muted-foreground"
            style={stagger(0.08)}
          >
            @harshmpatil
          </p>
        </div>
      </div>
      <div className="py-6 [&_p]:py-2 leading-relaxed tracking-tight [&_span]:text-foreground [&_span]:font-mono [&_p]:text-muted-foreground">
        <p className="animate-fade-in-up" style={stagger(0.12)}>
          Hi I am{" "}
          <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">
            Harshwardhan
          </span>
          , a 22 yo developer from Kolhapur working as an{" "}
          <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">
            Gen AI Intern
          </span>{" "}
          in{" "}
          <span className="tracking-tighter transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">
            Swiggy, Bengaluru, Karnataka
          </span>
          . I try to code and not to break things.
        </p>
        <p className="animate-fade-in-up" style={stagger(0.18)}>
          I like to call myself a{" "}
          <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">
            Full Stack Developer
          </span>{" "}
          with means I am equally good (
          <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">
            bad
          </span>
          ) at both frontend and backend.
        </p>
        <div className="animate-fade-in-up" style={stagger(0.24)}>
          <p>
            Recently i am looking at a lot of{" "}
            <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">
              AI
            </span>{" "}
            Stuff, so maybe I can also call myself a{" "}
            <span className="transition-colors duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-primary">
              AI Engineer
            </span>
            .
          </p>
        </div>
      </div>
      <div
        className="animate-fade-in-up flex flex-col sm:flex-row gap-3 sm:items-center"
        style={stagger(0.3)}
      >
        <Button variant="secondary" className="shadow-sm">
          <span className="relative flex size-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Available for new opportunities
        </Button>
        <Button
          variant="secondary"
          className="shadow-sm supports-[hover:hover]:hover:-translate-y-0.5"
        >
          <Download />
          Download CV
        </Button>
      </div>
    </section>
  );
}
