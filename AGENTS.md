# Agent Development Guide

Next.js 16 portfolio project with TypeScript, Tailwind CSS 4, and MDX blog using Fumadocs.

## Essential Commands

**Package Manager:** `pnpm` (not npm)

**Commands:**
- `pnpm dev` - Start dev server
- `pnpm build` - Production build
- `pnpm lint` - Biome linting (no ESLint/Prettier)
- `pnpm format` - Format with Biome
- `pnpm postinstall` - Regenerate Fumadocs content (if MDX not loading)

## Critical Project-Specific Details

- **Next.js 16 Breaking Change:** `params` are now promises - always `await` them
- **Path Aliases:** `@/*` → `./src/*`, `@/.source` → `.source`
- **Type Safety:** Never use `any` - use `unknown` and narrow types
- **Component Exports:** Use named exports (not default except Next.js pages/layouts)
- **Testing:** No test setup yet. If adding, use Vitest or Jest with React Testing Library.

## Quick Reference

**Tech Stack:** Next.js 16 (App Router) • React 19 • TypeScript 5 • Tailwind CSS 4 • Biome • Fumadocs

**Key Libraries:** shadcn/ui components • Radix UI primitives • next-themes
