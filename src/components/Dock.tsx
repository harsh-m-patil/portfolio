"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/harshmpatil",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/harsh-m-patil",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 flex p-5 items-center justify-center">
      <FloatingDock
        //mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
