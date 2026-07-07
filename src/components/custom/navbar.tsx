import { IconBook } from "@tabler/icons-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="flex gap-3 max-w-2xl mx-auto items-center justify-end p-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/blogs"
            aria-label="Read blog posts"
            className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-[color,transform] duration-160 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground active:scale-[0.92]"
          >
            <IconBook />
          </Link>
        </TooltipTrigger>
        <TooltipContent>Blogs</TooltipContent>
      </Tooltip>
      <ModeToggle />
    </nav>
  );
}
