export default function Skills() {
    return (
        <section className="mb-16">
            <div className="flex flex-col gap-8 text-sm md:text-base text-muted-foreground">
                <div>
                    <div className="text-foreground font-bold mb-1">[LANG]</div>
                    <ul className="pl-4 border-l border-muted/20 ml-1">
                        <li>- TypeScript</li>
                        <li>- JavaScript</li>
                    </ul>
                </div>

                <div>
                    <div className="text-foreground font-bold mb-1">[FRAMEWORKS]</div>
                    <ul className="pl-4 border-l border-muted/20 ml-1">
                        <li>- Node.js</li>
                        <li>- Next.js</li>
                    </ul>
                </div>

                <div>
                    <div className="text-foreground font-bold mb-1">[INFRA]</div>
                    <ul className="pl-4 border-l border-muted/20 ml-1">
                        <li>- Linux</li>
                        <li>- Docker</li>
                        <li>- PostgreSQL</li>
                        <li>- Networking fundamentals</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
