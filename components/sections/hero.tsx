export default function Hero() {
    return (
        <section className="mb-16">
            <div className="flex flex-col gap-1 text-sm md:text-base text-muted-foreground">
                <div>
                    <span className="text-foreground font-bold mr-2">[BOOT]</span>
                    <span>haruka.lol</span>
                </div>
                <div>
                    <span className="text-foreground font-bold mr-2">[ROLE]</span>
                    <span>Software Engineer</span>
                </div>
                <div>
                    <span className="text-foreground font-bold mr-2">[FOCUS]</span>
                    <span>Backend · Systems · APIs</span>
                </div>
                <div>
                    <span className="text-foreground font-bold mr-2">[STACK]</span>
                    <span>TypeScript | Node.js | PostgreSQL | Linux</span>
                </div>
                <div>
                    <span className="text-foreground font-bold mr-2">[STATUS]</span>
                    <span className="text-green-500">Active</span>
                </div>
            </div>
        </section>
    )
}
