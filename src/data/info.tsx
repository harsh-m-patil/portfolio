import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import { Claude } from "@/components/ui/svgs/claude";
import { Cursor } from "@/components/ui/svgs/cursor";
import { Docker } from "@/components/ui/svgs/docker";
import { Git } from "@/components/ui/svgs/git";
import { GitHubCopilot } from "@/components/ui/svgs/githubCopilot";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { Hono } from "@/components/ui/svgs/hono";
import { Java } from "@/components/ui/svgs/java";
import { Javascript } from "@/components/ui/svgs/javascript";
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark";
import { OpencodeIcon } from "@/components/ui/svgs/opencode";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Postman } from "@/components/ui/svgs/postman";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { Reactquery } from "@/components/ui/svgs/reactquery";
import { Redis } from "@/components/ui/svgs/redis";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Trpc } from "@/components/ui/svgs/trpc";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Vercel } from "@/components/ui/svgs/vercelDark";

type Social = {
  name: string;
  icon: ReactNode;
  href: string;
};

export const socials: Social[] = [
  {
    name: "Email Me",
    icon: <IconMail className="size-4" />,
    href: "mailto:humpatil1@gmail.com",
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
    favourite: false,
  },
  {
    name: "JavaScript",
    icon: <Javascript />,
    favourite: false,
  },
  {
    name: "TypeScript",
    icon: <Typescript />,
    favourite: true,
  },
];

export const technologies = [
  {
    name: "React",
    icon: <ReactDark />,
    favourite: false,
  },
  {
    name: "Next.js",
    icon: <IconBrandNextjs />,
    favourite: false,
  },
  {
    name: "Hono",
    icon: <Hono />,
    favourite: true,
  },
  {
    name: "TailwindCSS",
    icon: <Tailwindcss />,
    favourite: false,
  },
  {
    name: "tRPC",
    icon: <Trpc />,
    favourite: false,
  },
  {
    name: "Tanstack Query",
    icon: <Reactquery />,
    favourite: true,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs />,
    favourite: false,
  },
];

export const databases = [
  {
    name: "MongoDB",
    icon: <MongodbIconDark />,
    favourite: false,
  },
  {
    name: "PostgreSQL",
    icon: <Postgresql />,
    favourite: true,
  },
  {
    name: "Redis",
    icon: <Redis />,
    favourite: false,
  },
];

export const tools = [
  {
    name: "Git",
    icon: <Git />,
    favourite: true,
  },
  {
    name: "GitHub",
    icon: <GithubDark />,
    favourite: false,
  },
  {
    name: "Docker",
    icon: <Docker />,
    favourite: false,
  },
  {
    name: "Vercel",
    icon: <Vercel />,
    favourite: false,
  },
  {
    name: "Postman",
    icon: <Postman />,
    favourite: false,
  },
];

export const aiTools = [
  {
    name: "Opencode",
    icon: <OpencodeIcon />,
    favourite: true,
  },
  {
    name: "Claude Code",
    icon: <Claude />,
    favourite: false,
  },
  {
    name: "Cursor",
    icon: <Cursor />,
    favourite: false,
  },
  {
    name: "GitHub Copilot",
    icon: <GitHubCopilot />,
    favourite: false,
  },
];

export const workExperience = [
  {
    company: "Swiggy",
    role: "Gen AI Intern",
    type: "intern",
    iconUrl: "/swiggy.jpeg",
    period: "Oct 2025 - Present",
    location: "Onsite - Bangalore",
    points: [
      "Built automation workflows in n8n that cut task time by ~95%.",
      "Shipped custom MCP integrations for n8n to make AI-assisted flows actually work.",
      "Set up CI/CD on AWS and wrote end-to-end tests so deploys behave.",
      "Teaming up with AI Infra & Governance folks on enterprise-scale AI stuff.",
    ],
  },
  {
    company: "Talnex",
    role: "Full Stack Developer Intern",
    type: "intern",
    iconUrl: "/talnex.png",
    period: "Aug 2025 - Sep 2025",
    location: "Remote",
    points: [
      "Built backend features in a production Next.js app with Supabase Postgres, kept it stable and fast.",
      "Designed and maintained REST APIs so product stuff could actually talk to each other.",
      "Fixed a nasty production bug, cut downtime by ~40%.",
      "Worked with a 10-dev team on Git/GitHub, reviews, and agile rituals.",
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
    name: "Resume LSP",
    imageUrl: "/projects/resume-lsp.png",
    description:
      "A minimal LSP implementation in Go tailored for resume text analysis.",
    href: "https://github.com/harsh-m-patil/lsp-for-resumes/tree/resume-optimus",
    github:
      "https://github.com/harsh-m-patil/lsp-for-resumes/tree/resume-optimus",
  },
  {
    name: "WorkSphere",
    imageUrl: "/projects/worksphere.png",
    description:
      "A Modern Job Board Platform Connecting Talent with Opportunity",
    href: "https://worksphere35.vercel.app/",
    github: "https://github.com/harsh-m-patil/worksphere",
  },
  {
    name: "Betternews",
    imageUrl: "/projects/betternews.png",
    description: "Full Stack Hackernews Clone",
    href: "https://betternews.onrender.com",
    github: "https://github.com/harsh-m-patil/betternews",
  },
  {
    name: "CodeCraft",
    imageUrl: "/projects/codecraft.png",
    description: "An online code editor and snippet sharing platform.",
    href: "https://coditer.vercel.app/",
    github: "https://github.com/harsh-m-patil/code-crafters",
  },
];
