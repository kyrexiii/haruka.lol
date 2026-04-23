"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Note } from "@/lib/notes"
import { ArrowRight, Calendar, Clock } from "lucide-react"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

export default function NotesList({ notes }: { notes: Note[] }) {
    if (notes.length === 0) {
        return (
            <div className="py-20 text-center border border-dashed border-muted/20 rounded-2xl">
                <p className="text-muted-foreground">No notes found yet.</p>
            </div>
        )
    }

    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6"
        >
            {notes.map((note) => (
                <motion.div key={note.slug} variants={item}>
                    <Link
                        href={`/notes/${note.slug}`}
                        className="group relative block p-6 rounded-2xl border border-muted/10 bg-card/30 hover:bg-card/50 hover:border-muted/20 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 bg-muted/5 px-2 py-0.5 rounded border border-muted/10">
                                        {new Date(note.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                    {note.tags && note.tags.length > 0 && (
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-accent-fg/70 bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                                            {note.tags[0]}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-medium text-foreground group-hover:text-accent-fg transition-colors">
                                    {note.title}
                                </h3>
                                <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed max-w-xl">
                                    {note.description}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/40 md:self-end">
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-3 h-3" />
                                    <span>{note.readTime}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-muted-foreground/20 group-hover:text-accent-fg/50" />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}
