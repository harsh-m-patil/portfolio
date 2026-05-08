"use client";

import { Download } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "./section";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.23, 1, 0.32, 1] as const;

  return (
    <Section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <m.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 6 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.32, ease: easeOut }}
        >
          <Image
            src="/photo.jpg"
            alt="Harsh Patil profile picture"
            width={100}
            height={100}
            className="size-24 rounded-full object-cover ring-2 brightness-95 saturate-80 ring-black/20 ring-offset-2 ring-offset-background shadow-md dark:ring-white/20"
          />
        </m.div>
        <div>
          <m.h1
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.34,
              delay: 0.04,
              ease: easeOut,
            }}
            className="text-3xl text-black dark:text-white font-doto font-extrabold uppercase"
          >
            Harshwardhan Patil
          </m.h1>
          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.08,
              ease: easeOut,
            }}
            className="text-muted-foreground"
          >
            @harshmpatil
          </m.p>
        </div>
      </div>
      <div className="py-6 [&_p]:py-2 leading-relaxed tracking-tight [&_span]:text-foreground [&_span]:font-mono [&_p]:text-muted-foreground">
        <p>
          Hi I am <span>Harshwardhan</span>, a 22 yo developer from Kolhapur
          working as an <span>Gen AI Intern</span> in{" "}
          <span className="tracking-tighter">Swiggy, Bengaluru, Karnataka</span>
          . I try to code and not to break things.
        </p>
        <p>
          I like to call myself a <span>Full Stack Developer</span> with means I
          am equally good (<span>bad</span>) at both frontend and backend.
        </p>
        <div>
          <p>
            Recently i am looking at a lot of <span>AI</span> Stuff, so maybe I
            can also call myself a <span>AI Engineer</span>.
          </p>
          <div className="line-through text-muted-foreground">
            {" "}
            Even though I am clearly not.
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
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
    </Section>
  );
}
