import Link from "next/link"

export default function About() {
    return (
        <main className="min-h-screen p-6 md:p-12 lg:p-24 selection:bg-foreground selection:text-background font-mono text-sm md:text-base">
            <div className="max-w-[800px] ml-[5%] md:ml-[10%] space-y-16 text-muted-foreground">

                {/* Header */}
                <section className="space-y-1">
                    <div className="font-bold text-foreground">[ABOUT]</div>
                    <div>system_profile: haruka</div>
                </section>

                {/* Profile */}
                <section className="space-y-1">
                    <div className="font-bold text-foreground mb-2">[PROFILE]</div>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                        <span>role:</span>
                        <span className="text-foreground min-w-0 break-words">Software Engineer</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                        <span>focus:</span>
                        <span className="min-w-0 break-words">Backend systems, APIs, infrastructure</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                        <span>experience:</span>
                        <span className="min-w-0 break-words">Independent development (2023 — present)</span>
                    </div>
                </section>

                {/* Focus */}
                <section className="space-y-2">
                    <div className="font-bold text-foreground">[FOCUS]</div>
                    <ul className="space-y-1 pl-4 border-l border-muted/20 ml-1">
                        <li>- designing backend systems that scale cleanly</li>
                        <li>- building APIs with predictable behavior</li>
                        <li>- working close to infrastructure and deployment</li>
                        <li>- preferring simple, observable architectures</li>
                    </ul>
                </section>

                {/* Approach */}
                <section className="space-y-2">
                    <div className="font-bold text-foreground">[APPROACH]</div>
                    <ul className="space-y-1 pl-4 border-l border-muted/20 ml-1">
                        <li>- clarity over abstraction</li>
                        <li>- boring solutions over clever ones</li>
                        <li>- failures should be visible and debuggable</li>
                        <li>- systems should explain themselves</li>
                    </ul>
                </section>

                {/* Background */}
                <section className="space-y-1">
                    <div className="font-bold text-foreground mb-2">[BACKGROUND]</div>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                        <span>languages:</span>
                        <span className="min-w-0 break-words">TypeScript, JavaScript</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                        <span>runtime:</span>
                        <span className="min-w-0 break-words">Node.js</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                        <span>databases:</span>
                        <span className="min-w-0 break-words">PostgreSQL</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                        <span>infra:</span>
                        <span className="min-w-0 break-words">Linux, Docker</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                        <span>frontend:</span>
                        <span className="min-w-0 break-words">React, Next.js (when required)</span>
                    </div>
                </section>

                {/* Work Style */}
                <section className="space-y-2">
                    <div className="font-bold text-foreground">[WORK_STYLE]</div>
                    <ul className="space-y-1 pl-4 border-l border-muted/20 ml-1">
                        <li>- prefers small, well-defined services</li>
                        <li>- avoids unnecessary dependencies</li>
                        <li>- documents systems through structure, not comments</li>
                        <li>- optimizes for long-term maintainability</li>
                    </ul>
                </section>

                {/* Current */}
                <section className="space-y-2">
                    <div className="font-bold text-foreground">[CURRENT]</div>
                    <ul className="space-y-1 pl-4 border-l border-muted/20 ml-1">
                        <li>- infrastructure hardening</li>
                        <li>- authentication systems</li>
                        <li>- observability and logging</li>
                    </ul>
                </section>

                {/* Navigation */}
                <section className="space-y-2">
                    <div className="font-bold text-foreground">[DOCS]</div>
                    <div className="flex gap-4">
                        <Link href="/work" className="hover:text-foreground transition-colors">/work</Link>
                        <span>·</span>
                        <Link href="/notes" className="hover:text-foreground transition-colors">/notes</Link>
                        <span>·</span>
                        <Link href="/" className="hover:text-foreground transition-colors">/</Link>
                    </div>
                </section>

                {/* Footer */}
                <section className="pt-12 text-muted-foreground/50 text-xs">
                    <div className="font-bold mb-1">[END]</div>
                    <div>last_updated: 2025-12-18</div>
                </section>
            </div>
        </main>
    )
}
