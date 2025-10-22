# Portfolio

![Preview](./assets/preview.png)

A modern, responsive portfolio built with **Next.js 15**, **React 19**, and **Tailwind CSS 4** — perfect for showcasing your projects, skills, and blog posts.

## Features

* Clean dark/light UI with smooth animations
* Fully responsive design
* Theme toggle (dark/light)
* Accessible and SEO-friendly
* Easy to customize
* Built-in blog powered by Fumadocs-MDX
* Real-time analytics with Vercel Analytics

## Demo

Check out the live demo: [https://harshmpatil.vercel.app](https://harshmpatil.vercel.app)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/harsh-m-patil/portfolio.git
cd portfolio

# Install dependencies and generate blog docs
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
content/          # MDX blog posts (Fumadocs-MDX)
src/
 ├─ app/          # Pages and routes (including blog routes)
 ├─ components/   # UI components
 └─ lib/          # Utilities
public/           # Static assets
```

## Blog

Write your blog posts in `content/docs` as MDX files. Fumadocs-MDX picks up frontmatter and content automatically. Customize schemas in `source.config.ts`.

## Analytics

Analytics are provided by Vercel Analytics (`@vercel/analytics`). Page views, events, and more are tracked out of the box. See `src/app/layout.tsx` for setup details.

## Customization

* Edit personal info in `src/app/page.tsx`
* Replace profile image in `public/`
* Update skills, experience, and links in `src/data/info.tsx`
* Modify colors in `globals.css`
* Configure blog schemas in `source.config.ts`
* Enable or disable analytics via the `@vercel/analytics` import in `src/app/layout.tsx`

## Tech Stack

* **Next.js 15**, **React 19**, **TypeScript**
* **Tailwind CSS**, **Radix UI**, **Lucide Icons**
* **Biome**, **Turbopack**, **next-themes**
* **Fumadocs-MDX** (for blog)
* **@vercel/analytics** (for analytics)

## Scripts

```bash
pnpm dev          # Development server
pnpm build        # Build for production
pnpm start        # Run production server
pnpm lint         # Lint code
pnpm format       # Format code
pnpm postinstall  # Generate Fumadocs-MDX docs
```

## Deployment

Deploy on **Vercel** or any Node.js host:

## Acknowledgments

- [React](https://react.dev)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Fumadocs](https://fumadocs.dev/)

## Inspiration

- [legions.dev](https://legions.dev/)
- [chanhdai.com](https://chanhdai.com/)
- [megh.me](https://megh.me/)

## License

I don't care — use as you wish. Maybe star the repository.

Built by [@harsh-m-patil](https://github.com/harsh-m-patil)
