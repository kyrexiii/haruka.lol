import Link from "next/link"
import { getAllNotes } from "@/lib/notes"

export const metadata = {
    title: "Notes · Haruka",
    description: "Engineering notes and system logs.",
}

export default async function NotesIndex() {
    const notes = await getAllNotes()

    return (
        <main className="min-h-screen p-6 md:p-12 lg:p-24 selection:bg-foreground selection:text-background font-mono text-sm md:text-base">
            <div className="max-w-[800px] ml-[5%] md:ml-[10%] space-y-16 text-muted-foreground">

                {/* Header */}
                <section className="space-y-1">
                    <div className="font-bold text-foreground">[NOTES]</div>
                    <div>index: active_log</div>
                </section>

                {/* Notes Log */}
                <section className="space-y-1">
                    {notes.length === 0 ? (
                        <div>[EMPTY] no_entries_found</div>
                    ) : (
                        notes.map((note) => (
                            <Link
                                key={note.slug}
                                href={`/notes/${note.slug}`}
                                className="block group hover:text-foreground transition-colors"
                            >
                                <span className="text-muted-foreground/50 mr-3 md:mr-6 shrink-0 inline-block min-w-[100px]">
                                    [{new Date(note.date).toISOString().split('T')[0]}]
                                </span>
                                <span className="group-hover:underline decoration-muted-foreground/30 underline-offset-4">
                                    {note.title.toLowerCase()}
                                </span>
                            </Link>
                        ))
                    )}
                </section>

                {/* Navigation */}
                <section className="pt-12 text-muted-foreground/50 text-xs">
                    <div className="font-bold mb-1">[DOCS]</div>
                    <div className="flex gap-4">
                        <Link href="/about" className="hover:text-foreground transition-colors">/about</Link>
                        <span>·</span>
                        <Link href="/" className="hover:text-foreground transition-colors">/</Link>
                    </div>
                </section>

            </div>
        </main>
    )
}
