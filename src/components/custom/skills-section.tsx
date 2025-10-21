import { CodeTitle } from "@/components/custom/code-title";
import { Button } from "@/components/ui/button";
import { databases, languages, technologies, tools } from "@/data/info";

export function SkillsSection() {
  return (
    <section>
      <div>
        <p className="text-muted-foreground/50">
          <span className="mr-3 text-black dark:text-white text-2xl font-doto font-extrabold tracking-wider">
            Skills
          </span>
          Tech I like and use
        </p>
        <p className="text-muted-foreground/80 mt-2">
          These are some of the techlogies that I have learned and grown to love
          over my tech journey.
        </p>
      </div>
      <CodeTitle>LANGUAGES</CodeTitle>
      <div className="flex py-3 gap-3 flex-wrap">
        {languages.map((s) => (
          <Button key={s.name} variant="secondary">
            {s.icon}
            {s.name}
          </Button>
        ))}
      </div>
      <CodeTitle>FRAMEWORKS/ TECHNOLOGIES</CodeTitle>
      <div className="flex py-3 gap-3 flex-wrap">
        {technologies.map((t) => (
          <Button key={t.name} variant="secondary">
            {t.icon}
            {t.name}
          </Button>
        ))}
      </div>
      <CodeTitle>DATABASES</CodeTitle>
      <div className="flex py-3 gap-3 flex-wrap">
        {databases.map((t) => (
          <Button key={t.name} variant="secondary">
            {t.icon}
            {t.name}
          </Button>
        ))}
      </div>
      <CodeTitle>DEVELOPER TOOLS</CodeTitle>
      <div className="flex py-3 gap-3 flex-wrap">
        {tools.map((t) => (
          <Button key={t.name} variant="secondary">
            {t.icon}
            {t.name}
          </Button>
        ))}
      </div>
    </section>
  );
}
