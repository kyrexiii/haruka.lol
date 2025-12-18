import Link from "next/link"
import { notFound } from "next/navigation"
import { getNote, getAllNotes } from "@/lib/notes"

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

    return (
        <main className="min-h-screen p-6 md:p-12 lg:p-24 selection:bg-foreground selection:text-background font-mono text-sm md:text-base">
            <div className="max-w-[800px] ml-[5%] md:ml-[10%] space-y-12 text-muted-foreground">

                {/* Header Metadata */}
                <header className="space-y-4 border-b border-muted/10 pb-8">
                    <div className="space-y-1">
                        <div className="font-bold text-foreground">[NOTE]</div>
                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-2">
                            <span>id:</span>
                            <span className="text-foreground">{note.slug}</span>
                        </div>
                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-2">
                            <span>date:</span>
                            <span>{new Date(note.date).toISOString().split('T')[0]}</span>
                        </div>
                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-2">
                            <span>time:</span>
                            <span>{note.readTime}</span>
                        </div>
                        {note.tags.length > 0 && (
                            <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-2">
                                <span>tags:</span>
                                <span>{note.tags.join(", ")}</span>
                            </div>
                        )}
                    </div>
                </header>

                {/* Content */}
                <article className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-normal prose-headings:text-base prose-strong:text-foreground hover:prose-a:text-foreground prose-a:transition-colors prose-pre:bg-muted/5 prose-pre:border prose-pre:border-muted/10 max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: note.contentHtml || "" }} />
                </article>

                {/* Footer */}
                <footer className="pt-12 border-t border-muted/10 text-xs space-y-8">
                    <div className="space-y-1">
                        <div className="font-bold text-muted-foreground/50">[END]</div>
                        <div className="text-muted-foreground/30">hash: {Math.random().toString(16).slice(2, 10)}</div>
                    </div>

                    <div className="space-y-2 text-muted-foreground/50">
                        <div className="font-bold mb-1">[DOCS]</div>
                        <div className="flex gap-4">
                            <Link href="/notes" className="hover:text-foreground transition-colors">/notes</Link>
                            <span>·</span>
                            <Link href="/" className="hover:text-foreground transition-colors">/</Link>
                        </div>
                    </div>
                </footer>

            </div>
        </main>
    )
}
