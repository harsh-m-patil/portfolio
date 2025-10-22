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
        <TooltipTrigger>
          <Link href="/blogs">
            <IconBook />
          </Link>
        </TooltipTrigger>
        <TooltipContent>Blogs</TooltipContent>
      </Tooltip>
      <ModeToggle />
    </nav>
  );
}
