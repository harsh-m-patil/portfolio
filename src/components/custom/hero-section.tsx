import { Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Image
          src="/profile.png"
          alt="Harsh Patil profile picture"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <div>
          <div className="text-3xl text-black dark:text-white font-doto font-extrabold uppercase">
            Harsh
          </div>
          <p className="text-muted-foreground">@harshmpatil</p>
        </div>
      </div>
      <div className="py-6 [&_p]:py-2 leading-relaxed tracking-tight [&_span]:text-foreground [&_span]:font-mono [&_p]:text-muted-foreground">
        <p>
          Hi I am <span>Harsh</span>, a 22 yo developer living in Kolhapur,
          India. I try to <span>code</span> and not to break things.
        </p>
        <p>
          I like to call myself a <span>Full Stack Developer</span> with means I
          am equally good (<span>bad</span>) at both frontend and backend.
        </p>
        <p>
          Recently i am looking at a lot of <span>AI</span> Stuff, so maybe I
          can also call myself a <span>AI Engineer</span>. Even though I am
          clearly not.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <Button variant="secondary">
          <span className="relative flex size-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Available for new opportunities
        </Button>
        <Button variant="secondary">
          <Download />
          Download CV
        </Button>
      </div>
    </section>
  );
}
