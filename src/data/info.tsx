import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import { Cursor } from "@/components/ui/svgs/cursor";
import { Git } from "@/components/ui/svgs/git";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { Hono } from "@/components/ui/svgs/hono";
import { Java } from "@/components/ui/svgs/java";
import { Javascript } from "@/components/ui/svgs/javascript";
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Postman } from "@/components/ui/svgs/postman";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { Reactquery } from "@/components/ui/svgs/reactquery";
import { Redis } from "@/components/ui/svgs/redis";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Trpc } from "@/components/ui/svgs/trpc";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Vercel } from "@/components/ui/svgs/vercelDark";
import { Docker } from "@/components/ui/svgs/docker";

type Social = {
  name: string;
  icon: ReactNode;
  href: string;
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

export const languages = [
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

export const technologies = [
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

export const databases = [
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

export const tools = [
  {
    name: "Git",
    icon: <Git />,
  },
  {
    name: "GitHub",
    icon: <GithubDark />,
  },
  {
    name: "Docker",
    icon: <Docker />,
  },
  {
    name: "Cursor",
    icon: <Cursor />,
  },
  {
    name: "Vercel",
    icon: <Vercel />,
  },
  {
    name: "Postman",
    icon: <Postman />,
  },
];

export const workExperience = [
  {
    company: "Talnex",
    role: "Full Stack Developer Intern",
    type: "intern",
    iconUrl: "/talnex.png",
    period: "Aug 2025 - Sept 2025",
    location: "Remote",
    points: [
      "Engineered backend features in a production-grade Next.js app with Supabase PostgreSQL, ensuring scalability and reliability",
    ],
  },
];

export const projects = [
  {
    name: "Interview Archive",
    imageUrl: "/projects/interview.png",
    description: "Discover & Share Interview Questions",
    href: "https://interview-archive.vercel.app/",
    github: "https://github.com/harsh-m-patil/interview-archive",
  },
  {
    name: "WorkSphere",
    imageUrl: "/projects/worksphere.png",
    description:
      "A Modern Job Board Platform Connecting Talent with Opportunity",
    href: "https://worksphere35.vercel.app/",
    github: "https://github.com/harsh-m-patil/worksphere",
  },
];
