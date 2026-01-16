# Agent Development Guide

This document provides comprehensive guidelines for AI coding agents working on this Next.js 16 portfolio project.

## Project Overview

- **Framework:** Next.js 16 (App Router, React 19)
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4
- **Package Manager:** pnpm
- **Linter/Formatter:** Biome (replaces ESLint + Prettier)
- **Content:** MDX-based blog using Fumadocs

## Build, Lint, and Test Commands

### Development
```bash
pnpm dev                # Start dev server with Turbopack
```

### Build
```bash
pnpm build              # Production build with Turbopack
pnpm start              # Start production server
```

### Code Quality
```bash
pnpm lint               # Run Biome linting checks
pnpm format             # Format code with Biome
```

### Content Generation
```bash
pnpm postinstall        # Generate Fumadocs MDX content (runs automatically)
```

### Testing
**Note:** This project currently has no test setup. If adding tests:
- Consider Vitest or Jest with React Testing Library
- Test files should follow pattern: `*.test.tsx` or `*.spec.tsx`
- Place tests adjacent to source files or in `__tests__` directories

## Code Style Guidelines

### Formatting

- **Indentation:** 2 spaces (enforced by Biome)
- **Quotes:** Double quotes for strings
- **Semicolons:** Required (Biome default)
- **Line Length:** No strict limit, but keep readable
- **Trailing Commas:** Biome handles automatically

### Imports

**Import Organization (auto-sorted by Biome):**

1. External packages (React, Next.js, third-party)
2. Internal aliases starting with `@/`
3. Relative imports (`./ and ../`)
4. Type imports (if separate)

**Example:**
```typescript
import { IconBook } from "@tabler/icons-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ModeToggle } from "./mode-toggle";
```

**Path Aliases:**
- `@/*` → `./src/*` (use for all imports from src)
- `@/.source` → `.source` (generated Fumadocs content)

### TypeScript

**Type Definitions:**
- Use `type` for object shapes and unions
- Use `interface` for extensible object types
- Always explicitly type function parameters
- Prefer type inference for return types when obvious
- Use `ReactNode` for component children props

**Example:**
```typescript
type BlogCardProps = {
  blog: {
    title: string;
    description?: string | undefined;
    imageUrl?: string | undefined;
  };
  url: string;
};

export function BlogCard({ blog, url }: BlogCardProps) {
  // implementation
}
```

**Strict Mode:** Project uses strict TypeScript settings:
- No implicit any
- Strict null checks enabled
- Strict function types enabled

### Naming Conventions

**Files:**
- Components: `kebab-case.tsx` (e.g., `hero-section.tsx`)
- Utilities: `kebab-case.ts` (e.g., `utils.ts`)
- Types: Use same file or `types.ts` if shared

**Components:**
- PascalCase for component names
- Named exports for components (not default unless Next.js page/layout)
- Descriptive names indicating purpose

**Functions:**
- camelCase for functions
- Descriptive verb-based names (e.g., `getUserData`, `handleClick`)

**Constants:**
- camelCase for most constants
- UPPER_SNAKE_CASE for true constants (rare in React)

**Types/Interfaces:**
- PascalCase
- Suffix with descriptive name (e.g., `BlogCardProps`, `Social`)

### Component Structure

**Functional Components:**
```typescript
// Props type definition
type ComponentProps = {
  title: string;
  optional?: string;
};

// Component with explicit typing
export function Component({ title, optional }: ComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      {optional && <p>{optional}</p>}
    </div>
  );
}
```

**Async Server Components (Next.js 16):**
```typescript
export default async function Page(props: PageProps<"/blogs/[...slug]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  
  return <div>{page.data.title}</div>;
}
```

**Note:** Next.js 16 params are now promises - always await them.

### Styling

**Tailwind CSS Usage:**
- Use utility classes directly in JSX
- Use `cn()` helper from `@/lib/utils` for conditional classes
- Configure custom styles in `src/app/globals.css` using CSS variables
- Prefer Tailwind utilities over custom CSS

**Example:**
```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
)}>
  Content
</div>
```

**Responsive Design:**
- Mobile-first approach
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Max width: `max-w-2xl mx-auto` for main content

### Error Handling

**Next.js Patterns:**
```typescript
// 404 handling
if (!page) notFound();

// Error boundaries - use error.tsx in app directory
// loading.tsx for loading states
```

**Async/Await:**
- Use try-catch for data fetching in Server Components
- Handle loading states with `loading.tsx`
- Handle errors with `error.tsx` boundary files

**User Input:**
- Validate with Zod schemas where applicable
- Provide user-friendly error messages
- Use optional chaining for potentially undefined values

### State Management

**Client Components:**
- Use `"use client"` directive at top of file
- `useState` for local state
- `useTheme` from next-themes for theme state
- Context providers in `src/components/providers/`

**Server Components (Default):**
- No state hooks
- Async data fetching
- Pass data to client components as props

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── blogs/               # Blog routes
│   └── api/                 # API routes
├── components/
│   ├── custom/              # Project-specific components
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   │   └── svgs/           # Technology logo SVGs
│   ├── layout/              # Layout components
│   └── providers/           # Context providers
├── lib/                     # Utilities and configurations
│   ├── utils.ts            # cn() helper and utilities
│   └── source.ts           # Fumadocs configuration
└── data/                    # Static data
    └── info.tsx            # Personal info, projects, skills

content/
├── docs/                    # MDX blog posts
├── assets/                  # Blog images
└── components/              # Custom MDX components
```

## Common Patterns

### Adding a New Component

1. Create file in appropriate directory:
   - Custom components → `src/components/custom/`
   - Reusable UI → `src/components/ui/`
2. Use functional component with TypeScript
3. Export as named export
4. Import using `@/` alias

### Adding a New Page

1. Create route in `src/app/[route]/page.tsx`
2. Export default async function
3. Add metadata with `generateMetadata()`
4. Use Server Component by default

### Adding a Blog Post

1. Create MDX file in `content/docs/`
2. Add frontmatter (title, description, imageUrl)
3. Run `pnpm postinstall` or restart dev server
4. Blog appears automatically

### Adding UI Components (shadcn/ui)

- This project uses shadcn/ui style components
- Components are in `src/components/ui/`
- Based on Radix UI primitives
- Customize via Tailwind CSS variables in `globals.css`

## Important Notes

- **No ESLint/Prettier:** Use Biome exclusively (`pnpm lint`, `pnpm format`)
- **Next.js 16 Breaking Changes:** `params` are now promises - await them
- **React 19:** Latest stable features available
- **Tailwind CSS 4:** Uses new CSS-first configuration
- **Server Components Default:** Add `"use client"` only when needed
- **Image Optimization:** Always use `next/image` for images
- **Link Component:** Use `next/link` for navigation
- **Type Safety:** Never use `any` - use `unknown` and narrow types

## Common Issues

**Build Errors:**
- Run `pnpm lint` to check for Biome errors
- Ensure all imports are correct
- Check TypeScript errors with IDE

**MDX Not Loading:**
- Run `pnpm postinstall` to regenerate
- Check frontmatter format
- Verify file is in `content/docs/`

**Styling Issues:**
- Verify Tailwind class names
- Check CSS variable definitions in `globals.css`
- Ensure `cn()` import from `@/lib/utils`

## Resources

- **Next.js 16 Docs:** https://nextjs.org/docs
- **Fumadocs:** https://fumadocs.vercel.app
- **Biome:** https://biomejs.dev
- **Tailwind CSS 4:** https://tailwindcss.com
- **Radix UI:** https://radix-ui.com
