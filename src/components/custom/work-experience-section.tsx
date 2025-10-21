import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { workExperience } from "@/data/info";

export function WorkExperienceSection() {
  return (
    <section>
      <div>
        <p className="text-muted-foreground/50">
          <span className="mr-3 text-black dark:text-white text-2xl font-doto font-extrabold tracking-wider">
            Work
          </span>
          This is my work experience
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-4">
        {workExperience.map((xp) => (
          <Card
            key={xp.company}
            className="bg-transparent border-none shadow-none gap-3"
          >
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    className="rounded-md shadow"
                    src={xp.iconUrl}
                    height={48}
                    width={48}
                    alt={xp.company}
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <p>{xp.company}</p>
                      <Badge variant="secondary">{xp.type}</Badge>
                    </div>
                    <p className="text-muted-foreground">{xp.role}</p>
                  </div>
                </div>
                <div className="flex flex-col mt-2 sm:mt-0 sm:items-end">
                  <p className="text-muted-foreground">{xp.period}</p>
                  <p className="text-muted-foreground/50">{xp.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-12 space-y-2 text-muted-foreground/70">
                {xp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
