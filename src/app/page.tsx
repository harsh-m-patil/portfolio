import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  databases,
  languages,
  socials,
  technologies,
  tools,
} from "@/data/info";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 font-sans pb-12">
      <section className="flex items-center gap-4">
        <Image
          src="/profile.png"
          alt="Harsh Patil profile picture"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl text-black dark:text-white font-doto font-extrabold uppercase">
            Harsh
          </h1>
          <p className="text-muted-foreground">@harshmpatil</p>
        </div>
      </section>
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
      <Separator className="my-6" />
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
      <Separator className="my-6" />
      <section>
        <div>
          <p className="text-muted-foreground/50">
            <span className="mr-3 text-black dark:text-white text-2xl font-doto font-extrabold tracking-wider">
              Skills
            </span>
            Tech I like and use
          </p>
          <p className="text-muted-foreground/80 mt-2">
            These are some of the techlogies that I have learned and grown to
            love over my tech journey.
          </p>
        </div>
        <h4 className="text-muted-foreground pt-3">{"< LANGUAGES />"}</h4>
        <div className="flex py-3 gap-3 flex-wrap">
          {languages.map((s) => (
            <Button key={s.name} variant="secondary">
              {s.icon}
              {s.name}
            </Button>
          ))}
        </div>
        <h4 className="text-muted-foreground pt-3">
          {"< FRAMEWORKS/ TECHNOLOGIES />"}
        </h4>
        <div className="flex py-3 gap-3 flex-wrap">
          {technologies.map((t) => (
            <Button key={t.name} variant="secondary">
              {t.icon}
              {t.name}
            </Button>
          ))}
        </div>
        <h4 className="text-muted-foreground pt-3">{"< DATABASES />"}</h4>
        <div className="flex py-3 gap-3 flex-wrap">
          {databases.map((t) => (
            <Button key={t.name} variant="secondary">
              {t.icon}
              {t.name}
            </Button>
          ))}
        </div>
        <h4 className="text-muted-foreground pt-3">{"< DEVELOPER TOOLS />"}</h4>
        <div className="flex py-3 gap-3 flex-wrap">
          {tools.map((t) => (
            <Button key={t.name} variant="secondary">
              {t.icon}
              {t.name}
            </Button>
          ))}
        </div>
      </section>
      <Separator className="my-6" />
      <section>
        <div>
          <p className="text-muted-foreground/50">
            <span className="mr-3 text-black dark:text-white text-2xl font-doto font-extrabold tracking-wider">
              Work
            </span>
            This is my work experience
          </p>
        </div>
      </section>
    </main>
  );
}
