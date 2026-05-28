"use client";

import { m, useReducedMotion } from "motion/react";

type AnimatedBlogCardProps = {
  children: React.ReactNode;
};

export function AnimatedBlogCard({ children }: AnimatedBlogCardProps) {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <m.div
      className="py-4"
      initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.99 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
      transition={{ duration: 0.36, ease: easeOut }}
    >
      {children}
    </m.div>
  );
}
