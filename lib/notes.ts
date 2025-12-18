import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"

export interface Note {
    slug: string
    title: string
    description: string
    date: string
    readTime: string
    tags: string[]
    contentHtml?: string
}

const notesDirectory = path.join(process.cwd(), "public/notes")

export async function getNote(slug: string): Promise<Note | null> {
    try {
        const filePath = path.join(notesDirectory, `${slug}.md`)
        const fileContents = await fs.readFile(filePath, "utf8")
        const { data, content } = matter(fileContents)

        const processedContent = await remark()
            .use(remarkGfm)
            .use(html, { sanitize: false })
            .process(content)

        const contentHtml = processedContent.toString()

        return {
            slug,
            title: data.title || "untitled",
            description: data.description || "",
            date: data.date || new Date().toISOString(),
            readTime: data.readTime || "1 min", // simplified
            tags: data.tags || [],
            contentHtml,
        }
    } catch (error) {
        return null
    }
}

export async function getAllNotes(): Promise<Note[]> {
    try {
        const filenames = await fs.readdir(notesDirectory)

        const notes = await Promise.all(
            filenames
                .filter((name) => name.endsWith(".md"))
                .map(async (filename) => {
                    const slug = filename.replace(".md", "")
                    const filePath = path.join(notesDirectory, filename)
                    const fileContents = await fs.readFile(filePath, "utf8")
                    const { data } = matter(fileContents)

                    return {
                        slug,
                        title: data.title || "untitled",
                        description: data.description || "",
                        date: data.date || "",
                        readTime: data.readTime || "1 min",
                        tags: data.tags || [],
                    }
                })
        )

        return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    } catch (error) {
        console.error("Error reading notes:", error)
        return []
    }
}
