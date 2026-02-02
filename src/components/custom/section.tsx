"use client";

import { type HTMLMotionProps, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLMotionProps<"section">;

function Section({ className, ...props }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={cn(className)}
      {...props}
    />
  );
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

export { Section, SectionHeading, SectionTitle, SectionDescription };
