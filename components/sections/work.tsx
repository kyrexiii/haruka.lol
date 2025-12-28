const projects = [
    {
        name: "Arqora Cloud",
        description: "Developer-focused cloud hosting platform",
        resp: "Backend, APIs, Infrastructure",
        tech: "TypeScript, Next.js, Docker, PostgreSQL",
        state: "Stable",
    },
]

export default function Work() {
    return (
        <section className="mb-16">
            <div className="flex flex-col gap-12">
                {projects.map((project) => (
                    <div key={project.name} className="flex flex-col gap-1 text-sm md:text-base text-muted-foreground">
                        <div>
                            <span className="text-foreground font-bold mr-2">[SERVICE]</span>
                            <span>{project.name}</span>
                        </div>
                        <div>
                            <span className="text-foreground font-bold mr-2">[DESC]</span>
                            <span>{project.description}</span>
                        </div>
                        <div>
                            <span className="text-foreground font-bold mr-2">[RESP]</span>
                            <span>{project.resp}</span>
                        </div>
                        <div>
                            <span className="text-foreground font-bold mr-2">[TECH]</span>
                            <span>{project.tech}</span>
                        </div>
                        <div>
                            <span className="text-foreground font-bold mr-2">[STATE]</span>
                            <span>{project.state}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
