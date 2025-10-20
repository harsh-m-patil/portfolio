import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import { CursorDark } from "@/components/ui/svgs/cursorDark";
import { Git } from "@/components/ui/svgs/git";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { Hono } from "@/components/ui/svgs/hono";
import { Java } from "@/components/ui/svgs/java";
import { Javascript } from "@/components/ui/svgs/javascript";
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { Reactquery } from "@/components/ui/svgs/reactquery";
import { Redis } from "@/components/ui/svgs/redis";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Trpc } from "@/components/ui/svgs/trpc";
import { Typescript } from "@/components/ui/svgs/typescript";
import { VercelDark } from "@/components/ui/svgs/vercelDark";
import { Postman } from "@/components/ui/svgs/postman";

type Social = {
  name: string;
  icon: ReactNode;
  href: string;
};

type Skill = {
  name: string;
  icon: ReactNode;
};

export const socials: Social[] = [
  {
    name: "Email Me",
    icon: <IconMail className="size-4" />,
    href: "https://www.linkedin.com/in/harshmpatil",
  },
  {
    name: "Github",
    icon: <IconBrandGithub className="size-4" />,
    href: "https://github.com/harsh-m-patil",
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin className="size-4" />,
    href: "https://www.linkedin.com/in/harshmpatil",
  },
  {
    name: "X / Twitter",
    icon: <IconBrandX className="size-4" />,
    href: "https://x.com/patilharshm",
  },
];

export const languages: Skill[] = [
  {
    name: "Java",
    icon: <Java />,
  },
  {
    name: "JavaScript",
    icon: <Javascript />,
  },
  {
    name: "TypeScript",
    icon: <Typescript />,
  },
];

export const technologies: Skill[] = [
  {
    name: "React",
    icon: <ReactDark />,
  },
  {
    name: "Next.js",
    icon: <IconBrandNextjs />,
  },
  {
    name: "Hono",
    icon: <Hono />,
  },
  {
    name: "TailwindCSS",
    icon: <Tailwindcss />,
  },
  {
    name: "tRPC",
    icon: <Trpc />,
  },
  {
    name: "Tanstack Query",
    icon: <Reactquery />,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs />,
  },
];

export const databases: Skill[] = [
  {
    name: "MongoDB",
    icon: <MongodbIconDark />,
  },
  {
    name: "PostgreSQL",
    icon: <Postgresql />,
  },
  {
    name: "Redis",
    icon: <Redis />,
  },
];

export const tools: Skill[] = [
  {
    name: "Git",
    icon: <Git />,
  },
  {
    name: "GitHub",
    icon: <GithubDark />,
  },
  {
    name: "Cursor",
    icon: <CursorDark />,
  },
  {
    name: "Vercel",
    icon: <VercelDark />,
  },
  {
    name: "Postman",
    icon: <Postman />,
  },
];
