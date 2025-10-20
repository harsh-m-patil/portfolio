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
    <Button onClick={handleClick} size="icon" variant="ghost">
      <Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
