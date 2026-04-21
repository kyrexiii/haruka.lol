export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  link?: string
  github?: string
  year: number
  status: "completed" | "in-progress" | "archived"
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "talkshitgetdared",
    title: "TalkShitGetDared",
    description: "Open-source truth & dare package with custom prompts",
    longDescription:
      "A flexible and customizable Truth & Dare package built with TypeScript. Supports structured prompt types, safe & NSFW modes, and JSON-based contributions for developers. Designed for API use and Discord/Telegram bot integrations.",
    tags: ["Node.js", "TypeScript", "JavaScript", "JSON"],
    link: "https://github.com/kyrexiii/TalkShitGetDared",
    github: "https://github.com/kyrexiii/TalkShitGetDared",
    year: 2025,
    status: "completed",
  },
]

export const getAllTags = () => Array.from(new Set(projects.flatMap((p) => p.tags)))
