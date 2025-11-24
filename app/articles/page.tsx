'use client'

import Link from "next/link"
import { useEffect, useState, useMemo } from "react"
import { Search, X } from 'lucide-react'

interface Article {
    slug: string
    title: string
    description: string
    date: string
    readTime: string
    tags?: string[]
}

// This function will be called once on the server to get initial articles
// For client-side search, we'll fetch them once and then filter in the client
async function fetchArticlesClientSide(): Promise<Article[]> {
    // In a real application, you might have an API endpoint for this
    // For this example, we'll simulate fetching from the public directory
    // This is a simplified approach for client-side filtering.
    // For large number of articles, consider a server-side search API.
    const res = await fetch('/api/articles');
    if (!res.ok) {
        console.error("Failed to fetch articles:", res.statusText);
        return [];
    }
    return res.json();
}

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const loadArticles = async () => {
            const fetchedArticles = await fetchArticlesClientSide()
            setArticles(fetchedArticles)
            setLoading(false)
        }
        loadArticles()
    }, [])

    const filteredArticles = useMemo(() => {
        if (!searchQuery) {
            return articles
        }
        const lowerCaseQuery = searchQuery.toLowerCase()
        return articles.filter(
            (article) =>
                article.title.toLowerCase().includes(lowerCaseQuery) ||
                article.description.toLowerCase().includes(lowerCaseQuery) ||
                article.tags?.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)),
        )
    }, [articles, searchQuery])

    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <div className="max-w-4xl mx-auto px-8 py-20">
                {/* Header */}
                <div className="mb-16">
                    <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm mb-8 inline-block">
                        ← Back to Portfolio
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
                            Articles<span className="text-zinc-600">.</span>
                        </h1>
                        <div className="w-12 h-px bg-zinc-700"></div>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                            just typing things here before i forget them or the power goes out
                        </p>
                    </div>
                </div>

                {/* Search Input */}
                <div className="mb-12 relative">
                    <input
                        type="text"
                        placeholder="Search articles by title, tag, or description..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-10 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-colors"
                        aria-label="Search articles"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 hover:text-zinc-300 transition-colors"
                            aria-label="Clear search"
                        >
                            <X />
                        </button>
                    )}
                </div>

                {/* Articles List */}
                {loading ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4 animate-pulse">⏳</div>
                        <h2 className="text-xl text-zinc-300 mb-2">Loading articles...</h2>
                        <p className="text-zinc-500">Please wait a moment.</p>
                    </div>
                ) : filteredArticles.length === 0 && searchQuery ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🤷‍♂️</div>
                        <h2 className="text-xl text-zinc-300 mb-2">No articles found</h2>
                        <p className="text-zinc-500">Try a different search term.</p>
                    </div>
                ) : filteredArticles.length === 0 && !searchQuery ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">📝</div>
                        <h2 className="text-xl text-zinc-300 mb-2">No articles yet</h2>
                        <p className="text-zinc-500">Check back soon for new content.</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {filteredArticles.map((article, index) => (
                            <article key={article.slug} className="group">
                                <Link href={`/articles/${article.slug}`}>
                                    <div className="border-b border-zinc-800 pb-8 hover:border-zinc-700 transition-colors">
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div className="flex-1">
                                                <h2 className="text-xl md:text-2xl font-light text-zinc-200 group-hover:text-white transition-colors mb-2">
                                                    {article.title}
                                                </h2>
                                                <p className="text-zinc-400 leading-relaxed mb-4">{article.description}</p>
                                            </div>
                                            <div className="text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0">↗</div>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-zinc-500">
                                            <time dateTime={article.date}>
                                                {new Date(article.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </time>
                                            <span>•</span>
                                            <span>{article.readTime}</span>
                                            {article.tags && article.tags.length > 0 && (
                                                <>
                                                    <span>•</span>
                                                    <div className="flex gap-2">
                                                        {article.tags.slice(0, 2).map((tag) => (
                                                            <span key={tag} className="px-2 py-1 bg-zinc-900 rounded text-xs">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                )}

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-zinc-800 text-center">
                    <p className="text-zinc-500 text-sm">
                        Want to discuss an article?{" "}
                        <a href="mailto:contact@haruka.lol" className="text-zinc-400 hover:text-white transition-colors">
                            Send me an email
                        </a>
                    </p>
                </div>
            </div>
        </main>
    )
}