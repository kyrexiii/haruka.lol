import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import { NextResponse } from "next/server"

interface Article {
    slug: string
    title: string
    description: string
    date: string
    readTime: string
    tags?: string[]
}

export async function GET() {
    try {
        const articlesDirectory = path.join(process.cwd(), "public/articles")
        const filenames = await fs.readdir(articlesDirectory)

        const articles = await Promise.all(
            filenames
                .filter((name) => name.endsWith(".md"))
                .map(async (filename) => {
                    const filePath = path.join(articlesDirectory, filename)
                    const fileContents = await fs.readFile(filePath, "utf8")
                    const { data } = matter(fileContents)

                    return {
                        slug: filename.replace(".md", ""),
                        title: data.title || "Untitled",
                        description: data.description || "",
                        date: data.date || "",
                        readTime: data.readTime || "5 min read",
                        tags: data.tags || [],
                    }
                }),
        )

        // Sort articles by date (newest first)
        articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

        return NextResponse.json(articles)
    } catch (error) {
        console.error("Error fetching articles:", error)
        return NextResponse.json({ message: "Failed to load articles" }, { status: 500 })
    }
}