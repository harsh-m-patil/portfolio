"use client";

import {
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react";
import { BookOpenText } from "lucide-react";

const BOOK_URL = "https://ericnormand.me/grokking-simplicity";

export function CurrentlyReading() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 group no-underline"
        aria-label="Currently reading: Grokking Simplicity"
        initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.96 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: easeOut,
          delay: 1.2,
        }}
      >
        <m.div
          className="flex items-center gap-2.5 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl px-4 py-3 shadow-lg"
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          whileHover={reduceMotion ? undefined : { y: -2 }}
          transition={{ duration: 0.2, ease: easeOut }}
        >
          {/* Live indicator */}
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 duration-[2000ms]" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>

          <m.div
            className="shrink-0 text-muted-foreground/60 transition-colors duration-200 group-hover:text-foreground/90"
            whileHover={reduceMotion ? undefined : { rotate: -8 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.25 }}
          >
            <BookOpenText className="size-4" strokeWidth={1.7} />
          </m.div>

          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50 transition-colors duration-200 group-hover:text-muted-foreground/80">
              Reading
            </span>
            <span className="text-[13px] font-medium leading-tight text-muted-foreground/90 transition-colors duration-200 group-hover:text-foreground truncate">
              Grokking Simplicity
            </span>
          </div>
        </m.div>
      </m.a>
    </LazyMotion>
  );
}
