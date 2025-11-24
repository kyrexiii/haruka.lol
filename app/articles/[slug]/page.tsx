import Link from "next/link"
import { notFound } from "next/navigation"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"
import { ArrowLeft, Clock, Calendar } from "lucide-react"

interface ArticleData {
    title: string
    description: string
    date: string
    readTime: string
    tags?: string[]
    author?: string
}

interface Article {
    slug: string
    title: string
    description: string
    date: string
    readTime: string
    tags?: string[]
}

async function getArticle(slug: string) {
    try {
        const filePath = path.join(process.cwd(), "public/articles", `${slug}.md`)
        const fileContents = await fs.readFile(filePath, "utf8")
        const { data, content } = matter(fileContents)

        const processedContent = await remark().use(remarkGfm).use(html, { sanitize: false }).process(content)

        const contentHtml = processedContent.toString()

        return {
            data: data as ArticleData,
            contentHtml,
        }
    } catch (error) {
        return null
    }
}

async function getAllArticles(): Promise<Article[]> {
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

        return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } catch (error) {
        return []
    }
}

function getRelatedArticles(currentSlug: string, currentTags: string[] = [], allArticles: Article[]): Article[] {
    // Filter out current article
    const otherArticles = allArticles.filter((article) => article.slug !== currentSlug)

    if (currentTags.length === 0) {
        // If no tags, return 3 most recent articles
        return otherArticles.slice(0, 3)
    }

    // Score articles based on tag overlap
    const scoredArticles = otherArticles.map((article) => {
        const commonTags = article.tags?.filter((tag) => currentTags.includes(tag)) || []
        return {
            ...article,
            score: commonTags.length,
        }
    })

    // Sort by score (most related first), then by date
    scoredArticles.sort((a, b) => {
        if (a.score !== b.score) {
            return b.score - a.score
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return scoredArticles.slice(0, 3)
}

export async function generateStaticParams() {
    try {
        const articlesDirectory = path.join(process.cwd(), "public/articles")
        const filenames = await fs.readdir(articlesDirectory)

        return filenames
            .filter((name) => name.endsWith(".md"))
            .map((filename) => ({
                slug: filename.replace(".md", ""),
            }))
    } catch (error) {
        return []
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const article = await getArticle(slug)

    if (!article) {
        notFound()
    }

    const { data, contentHtml } = article
    const allArticles = await getAllArticles()
    const relatedArticles = getRelatedArticles(slug, data.tags, allArticles)

    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <div className="max-w-4xl mx-auto px-8 py-20">
                {/* Navigation */}
                <div className="mb-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Articles
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-16">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-white">{data.title}</h1>

                        <div className="w-16 h-px bg-zinc-700"></div>

                        {data.description && (
                            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light max-w-3xl">
                                {data.description}
                            </p>
                        )}

                        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={data.date}>
                                    {new Date(data.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{data.readTime}</span>
                            </div>

                            {data.author && (
                                <div>
                                    <span>by {data.author}</span>
                                </div>
                            )}
                        </div>

                        {data.tags && data.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {data.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-zinc-900 text-zinc-400 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                {/* Article Content */}
                <article className="article-content">
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </article>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="mt-20 pt-12 border-t border-zinc-800">
                        <div className="mb-8">
                            <h2 className="text-2xl font-light text-white mb-2">Related Articles</h2>
                            <div className="w-12 h-px bg-zinc-700"></div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {relatedArticles.map((relatedArticle) => (
                                <Link key={relatedArticle.slug} href={`/articles/${relatedArticle.slug}`} className="group">
                                    <article className="h-full">
                                        <div className="border border-zinc-800 rounded-lg p-6 h-full hover:border-zinc-700 transition-colors group-hover:bg-zinc-900/20">
                                            <div className="flex flex-col h-full">
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-light text-zinc-200 group-hover:text-white transition-colors mb-3 leading-tight">
                                                        {relatedArticle.title}
                                                    </h3>
                                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                                        {relatedArticle.description}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between text-xs text-zinc-500 mt-auto">
                                                    <div className="flex items-center gap-3">
                                                        <time dateTime={relatedArticle.date}>
                                                            {new Date(relatedArticle.date).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                            })}
                                                        </time>
                                                        <span>•</span>
                                                        <span>{relatedArticle.readTime}</span>
                                                    </div>
                                                    <div className="text-zinc-600 group-hover:text-zinc-400 transition-colors">→</div>
                                                </div>

                                                {relatedArticle.tags && relatedArticle.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1 mt-3">
                                                        {relatedArticle.tags.slice(0, 2).map((tag) => (
                                                            <span key={tag} className="px-2 py-1 bg-zinc-900 text-zinc-500 rounded text-xs">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {relatedArticle.tags.length > 2 && (
                                                            <span className="px-2 py-1 text-zinc-600 text-xs">+{relatedArticle.tags.length - 2}</span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <Link
                                href="/articles"
                                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                            >
                                View all articles
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </section>
                )}

                {/* Article Footer */}
                <footer className="mt-16 pt-8 border-t border-zinc-800">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-zinc-400 text-sm mb-2">Enjoyed this article?</p>
                            <a
                                href="mailto:contact@haruka.lol"
                                className="text-white hover:text-zinc-300 transition-colors text-sm"
                            >
                                Let me know what you think →
                            </a>
                        </div>

                        <Link href="/articles" className="text-zinc-400 hover:text-white transition-colors text-sm">
                            Read more articles
                        </Link>
                    </div>
                </footer>
            </div>
        </main>
    )
}