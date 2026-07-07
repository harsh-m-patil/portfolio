"use client";

import { type RefObject, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Applies the reveal-on-scroll effect via `data-reveal` (styles in
 * globals.css). The hidden state is only set after hydration and only for
 * elements below the viewport, so server-rendered content is never blank.
 */
function useRevealRef<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Section({ className, ...props }: React.ComponentProps<"section">) {
  const ref = useRevealRef<HTMLElement>();
  return <section ref={ref} className={cn(className)} {...props} />;
}

/** Container whose `[data-reveal-item]` children fade in with a stagger. */
function RevealGroup({ className, ...props }: React.ComponentProps<"div">) {
  const ref = useRevealRef<HTMLDivElement>();
  return <div ref={ref} className={cn(className)} {...props} />;
}

function SectionHeading({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-muted-foreground/50", className)} {...props} />;
}

function SectionTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "mr-3 text-black dark:text-white text-2xl font-doto font-extrabold tracking-wider",
        className,
      )}
      {...props}
    />
  );
}

function SectionDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground/80 mt-2", className)} {...props} />
  );
}

export {
  Section,
  RevealGroup,
  SectionHeading,
  SectionTitle,
  SectionDescription,
};
