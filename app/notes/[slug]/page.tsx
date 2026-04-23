import Link from "next/link"
import { notFound } from "next/navigation"
import { getNote, getAllNotes } from "@/lib/notes"
import { ChevronLeft, Calendar, Clock, Tag } from "lucide-react"

export async function generateStaticParams() {
    const notes = await getAllNotes()
    return notes.map((note) => ({
        slug: note.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const note = await getNote(slug)

    if (!note) {
        return {
            title: "Not Found",
        }
    }

    return {
        title: `${note.title} · Notes`,
        description: note.description,
    }
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const note = await getNote(slug)

    if (!note) {
        notFound()
    }

    const formattedDate = new Date(note.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <main className="min-h-screen bg-background selection:bg-accent selection:text-accent-fg">
            <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
                
                {/* Navigation */}
                <nav className="mb-12">
                    <Link 
                        href="/notes" 
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <ChevronLeft className="w-3 h-3 transform group-hover:-translate-x-1 transition-transform" />
                        Back to notes
                    </Link>
                </nav>

                {/* Header */}
                <header className="space-y-8 mb-16">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                            {note.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed italic font-serif">
                            {note.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-4 gap-x-8 pt-8 border-t border-muted/10">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{note.readTime}</span>
                        </div>
                        {note.tags.length > 0 && (
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                <Tag className="w-3 h-3" />
                                <div className="flex gap-2">
                                    {note.tags.map(tag => (
                                        <span key={tag} className="hover:text-foreground cursor-default transition-colors">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                {/* Content */}
                <article className="prose prose-zinc dark:prose-invert max-w-none 
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
                    prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight
                    prose-a:text-accent-fg prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                    prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted/10 
                    prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-card/50 prose-pre:border prose-pre:border-muted/10 prose-pre:shadow-sm
                    prose-img:rounded-2xl prose-img:border prose-img:border-muted/10
                    prose-blockquote:border-l-accent prose-blockquote:bg-accent/5 prose-blockquote:py-1 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl">
                    <div dangerouslySetInnerHTML={{ __html: note.contentHtml || "" }} />
                </article>

                {/* Footer */}
                <footer className="mt-32 pt-16 border-t border-muted/10 space-y-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="space-y-2">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30">End of log</div>
                            <div className="flex gap-4">
                                <Link href="/notes" className="text-sm font-medium hover:text-accent-fg transition-colors">More notes</Link>
                                <span className="text-muted-foreground/30">·</span>
                                <Link href="/" className="text-sm font-medium hover:text-accent-fg transition-colors">Home</Link>
                            </div>
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground/20">
                            ID: {note.slug.toUpperCase()} // REV: {Math.random().toString(36).substring(7).toUpperCase()}
                        </div>
                    </div>
                </footer>

            </div>
        </main>
    )
}
