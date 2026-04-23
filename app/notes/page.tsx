import Link from "next/link"
import { getAllNotes } from "@/lib/notes"
import NotesList from "@/components/notes/notes-list"
import { ChevronLeft } from "lucide-react"

export const metadata = {
    title: "Notes · Haruka",
    description: "Engineering notes, system logs, and shared knowledge.",
}

export default async function NotesIndex() {
    const notes = await getAllNotes()

    return (
        <main className="min-h-screen bg-background selection:bg-accent selection:text-accent-fg">
            <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
                
                {/* Header */}
                <header className="mb-16 md:mb-24 space-y-6">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <ChevronLeft className="w-3 h-3 transform group-hover:-translate-x-1 transition-transform" />
                        Back to orbit
                    </Link>
                    
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground lowercase italic font-serif">
                            Notes<span className="text-muted-foreground/30 font-sans not-italic">.</span>
                        </h1>
                        <p className="text-muted-foreground max-w-md leading-relaxed">
this is basically my daily nonsense.
if you're expecting something meaningful… good luck.
i'm just documenting my existence at this point.
                        </p>
                    </div>
                </header>

                {/* Notes List */}
                <section>
                    <NotesList notes={notes} />
                </section>

                {/* Footer Navigation */}
                <footer className="mt-32 pt-8 border-t border-muted/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
                        <div className="flex gap-6">
                            <Link href="/about" className="hover:text-foreground transition-colors">/about</Link>
                            <Link href="/projects" className="hover:text-foreground transition-colors">/projects</Link>
                            <Link href="/contact" className="hover:text-foreground transition-colors">/contact</Link>
                        </div>
                        <div>
                            &copy; {new Date().getFullYear()} HARUKA_SYSTEMS
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}
