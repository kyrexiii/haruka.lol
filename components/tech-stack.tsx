import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiLinux,
    SiRust,
    SiPython,
    SiGo
} from "react-icons/si"

const technologies = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
    { name: "Rust", icon: SiRust, color: "text-orange-500" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "Go", icon: SiGo, color: "text-cyan-400" },
]

export default function TechStack() {
    return (
        <section className="py-10 border-y border-border/40 bg-secondary/5 overflow-hidden">
            <div className="max-w-full">
                <div className="relative flex overflow-hidden group">
                    <div className="flex animate-scroll gap-12 min-w-full shrink-0 items-center justify-around px-6">
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="flex items-center gap-2"
                            >
                                <tech.icon className={`w-6 h-6`} />
                                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex animate-scroll gap-12 min-w-full shrink-0 items-center justify-around px-6" aria-hidden="true">
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}-duplicate`}
                                className="flex items-center gap-2"
                            >
                                <tech.icon className={`w-6 h-6`} />
                                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
