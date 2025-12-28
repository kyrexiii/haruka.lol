import Image from "next/image"
import Link from "next/link"

export default function Work() {
    return (
        <main className="min-h-screen p-6 md:p-12 lg:p-24 selection:bg-foreground selection:text-background font-mono text-sm md:text-base">
            <div className="max-w-[800px] ml-[5%] md:ml-[10%] space-y-20 text-muted-foreground">

                {/* Header */}
                <section className="space-y-1">
                    <div className="font-bold text-foreground">[WORK]</div>
                    <div>service_index: active</div>
                </section>

                {/* Service 1: Arqora Cloud */}
                <section className="space-y-4">
                    <div className="space-y-1">
                        <div className="font-bold text-foreground mb-2">[SERVICE]</div>
                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4 items-center group">
                            <span>name:</span>

                            <span className="flex items-center gap-2 text-foreground min-w-0">
                                <Image
                                    src="/work/arqora.png"
                                    alt="Arqora Cloud"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 flex-shrink-0"
                                />
                                <span className="truncate">Arqora Cloud</span>

                                {/* hover reveal */}
                                <a
                                    href="https://arqora.cloud"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                ml-2 text-xs text-muted-foreground/60
                opacity-0 translate-x-[-4px]
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-200
                hidden sm:inline-block
            "
                                >
                                    arqora.cloud
                                </a>
                            </span>
                        </div>

                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>status:</span>
                            <span className="text-emerald-500 min-w-0 break-words">active</span>
                        </div>
                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>role:</span>
                            <span className="min-w-0 break-words">Backend, APIs, Infrastructure</span>
                        </div>
                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>summary:</span>
                            <span className="min-w-0 break-words">Developer-focused cloud hosting platform</span>
                        </div>
                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>stack:</span>
                            <span className="min-w-0 break-words">TypeScript, Node.js, Next.js, PostgreSQL, Docker</span>
                        </div>
                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>period:</span>
                            <span className="min-w-0 break-words">2021 — present</span>
                        </div>
                    </div>

                    <div className="space-y-2 pt-2">
                        <div className="font-bold text-foreground ml-1">[NOTES]</div>
                        <ul className="space-y-1 pl-4 border-l border-muted/20 ml-1">
                            <li>- designed internal APIs for container orchestration</li>
                            <li>- implemented custom reverse proxy solution</li>
                            <li>- focused on observability and zero-downtime deployments</li>
                        </ul>
                    </div>
                </section>

                {/* Service: talkshitgetdared */}
                <section className="space-y-4">
                    <div className="space-y-1">
                        <div className="font-bold text-foreground mb-2">[SERVICE]</div>

                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>name:</span>
                            <span className="text-foreground min-w-0 break-words">talkshitgetdared</span>
                        </div>

                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>status:</span>
                            <span className="text-emerald-500 min-w-0 break-words">active</span>
                        </div>

                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>role:</span>
                            <span className="min-w-0 break-words">Package Architecture, API Design</span>
                        </div>

                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>summary:</span>
                            <span className="min-w-0 break-words">
                                Zero-dependency TypeScript engine for configurable truth/dare workflows
                            </span>
                        </div>

                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>stack:</span>
                            <span className="min-w-0 break-words">TypeScript, Node.js</span>
                        </div>

                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-4">
                            <span>period:</span>
                            <span className="min-w-0 break-words">2021 — present</span>
                        </div>

                        {/* Capabilities section with improved layout */}
                        <div className="pt-3 pb-2 space-y-1.5 border-t border-muted/10 mt-3">
                            <div className="text-xs uppercase tracking-wide opacity-60">capabilities</div>
                            <div className="flex flex-wrap gap-1.5">
                                <span className="px-2 py-0.5 text-xs bg-muted/20 rounded border border-muted/30 whitespace-nowrap">
                                    filtering
                                </span>
                                <span className="px-2 py-0.5 text-xs bg-muted/20 rounded border border-muted/30 whitespace-nowrap">
                                    batching
                                </span>
                                <span className="px-2 py-0.5 text-xs bg-muted/20 rounded border border-muted/30 whitespace-nowrap">
                                    deduplication
                                </span>
                                <span className="px-2 py-0.5 text-xs bg-muted/20 rounded border border-muted/30 whitespace-nowrap">
                                    multi-language support
                                </span>
                            </div>
                        </div>

                        {/* Distribution section with link styling */}
                        <div className="pt-2 space-y-1.5">
                            <div className="text-xs uppercase tracking-wide opacity-60">distribution</div>
                            <a
                                href="https://npmjs.com/package/talkshitgetdared"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground transition-colors group"
                            >
                                <span className="underline decoration-muted/40 group-hover:decoration-foreground/60 underline-offset-2">
                                    npmjs.com/package/talkshitgetdared
                                </span>
                                <svg
                                    className="w-3 h-3 opacity-40 group-hover:opacity-80 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-2 pt-2">
                        <div className="font-bold text-foreground ml-1">[NOTES]</div>
                        <ul className="space-y-1 pl-4 border-l border-muted/20 ml-1">
                            <li>- designed deterministic prompt selection logic</li>
                            <li>- implemented configurable filtering and difficulty modes</li>
                            <li>- exposed both library and CLI interfaces</li>
                            <li>- maintained zero-dependency constraint</li>
                        </ul>
                    </div>
                </section>


                {/* Archived */}
                <section className="space-y-2">
                    <div className="font-bold text-foreground">[ARCHIVED]</div>
                    <ul className="space-y-1 pl-4 border-l border-muted/20 ml-1">
                        <li>- Ayane (multipurpose Discord bot)</li>
                    </ul>
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
