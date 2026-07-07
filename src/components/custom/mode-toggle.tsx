"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeTransition } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { toggleTheme } = useThemeTransition();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX: x, clientY: y } = event;

    // Apply view transition and update theme
    toggleTheme({ x, y });
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      variant="ghost"
      className="active:scale-[0.92] transition-transform duration-160 ease-[var(--ease-out)]"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 opacity-100 transition-[transform,opacity] duration-200 ease-[var(--ease-out)] dark:-rotate-90 dark:scale-95 dark:opacity-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-95 opacity-0 transition-[transform,opacity] duration-200 ease-[var(--ease-out)] dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
