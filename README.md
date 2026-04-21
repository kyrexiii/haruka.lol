# haruka.lol

My personal portfolio raw, minimal, and fast.  
Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Language** — TypeScript
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com) + CSS Variables
- **Animation** — [Framer Motion](https://www.framer.com/motion/)
- **Theme** — [next-themes](https://github.com/pacocoursey/next-themes) (dark/light/system)
- **Command Palette** — [cmdk](https://cmdk.paco.me/)
- **Icons** — [Lucide](https://lucide.dev/)
- **Deployment** — [Vercel](https://vercel.com)

## Getting Started

```bash
# clone the repo
git clone https://github.com/kyrexiii/portfolio.git
cd portfolio

# install dependencies
pnpm install

# run dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── about/              # About page
│   ├── projects/           # Projects archive + [slug] detail
│   ├── notes/              # Developer notes + [slug] detail
│   ├── layout.tsx          # Root layout (fonts, theme, header)
│   ├── globals.css         # Design tokens & theme variables
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots
│   ├── opengraph-image.tsx # Dynamic OG image
│   └── not-found.tsx       # 404 page
├── components/
│   ├── header.tsx          # Floating nav with mobile menu
│   ├── footer.tsx          # Minimal footer with theme toggle
│   ├── command-palette.tsx # ⌘K command palette
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # System/Light/Dark toggle
│   ├── sections/           # Home & About page sections
│   ├── projects/           # Project page components
│   └── ui/                 # Reusable UI primitives
├── lib/
│   ├── projects-data.ts    # Project data
│   ├── notes.ts            # Markdown notes parser
│   └── utils.ts            # cn() helper
└── public/
    ├── notes/              # Markdown note files
    └── favicon.png
```

## Features

- **Command Palette** — Press `⌘K` / `Ctrl+K` for quick navigation
- **Theme Toggle** — Dark, light, and system modes with smooth transitions
- **Developer Notes** — Markdown-powered notes section with frontmatter
- **Scroll-aware Header** — Auto-hides on scroll down, reveals on scroll up
- **Dynamic OG Image** — Auto-generated OpenGraph images
- **SEO** — Sitemap, robots.txt, structured metadata

## Notes System

Drop a `.md` file into `public/notes/` with frontmatter:

```markdown
---
title: "your note title"
description: "a short description"
date: "2026-04-20"
readTime: "3 min"
tags: ["dev", "thoughts"]
---

Your content here.
```

It will automatically appear on `/notes`.

## License

[MIT](./LICENSE)
