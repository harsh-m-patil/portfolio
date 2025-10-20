"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { createContext, useContext } from "react";

type Coords = { x: number; y: number };

type ThemeContextType = {
  toggleTheme: (coords?: Coords) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <ThemeProviderWithTransitions>{children}</ThemeProviderWithTransitions>
    </NextThemesProvider>
  );
}

function ThemeProviderWithTransitions({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = (coords?: Coords) => {
    const root = document.documentElement;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Determine the new theme
    const newTheme = resolvedTheme === "light" ? "dark" : "light";

    // Fallback for browsers that don't support view transitions
    if (!document.startViewTransition || prefersReducedMotion) {
      setTheme(newTheme);
      return;
    }

    // Set click coordinates as CSS variables
    if (coords) {
      root.style.setProperty("--x", `${coords.x}px`);
      root.style.setProperty("--y", `${coords.y}px`);
    }

    // Start view transition
    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeTransition = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeTransition must be used within ThemeProvider");
  }
  return context;
};
