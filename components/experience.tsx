export default function Experience() {
  const experiences = [
    {
      role: "Wannabe Coder (Class 10)",
      company: "School Days",
      period: "2022 - 2023",
      highlights: [
        "Started coding for the first time and got obsessed with JavaScript",
        "Made Discord bots instead of studying (report card showed it)",
        "Spent more time in VS Code than in textbooks",
      ],
    },
    {
      role: "Freelance Developer",
      company: "Self-employed",
      period: "2023 - Present",
      highlights: [
        "Building custom web apps using Next.js, Node.js and TypeScript",
        "Working with clients and doing personal side projects",
        "Improving clean code habits and real-world problem solving",
      ],
    },
    {
      role: "Self-taught Developer",
      company: "Independent",
      period: "2022 - Present",
      highlights: [
        "Learning modern web technologies on my own",
        "Exploring networking, Linux, servers and backend systems",
        "Gaining experience through experiments, projects and daily practice",
      ],
    },
  ]


  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-2">Experience</h2>
        <div className="w-12 h-1 bg-foreground"></div>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-2">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-xs text-muted-foreground mt-3">{exp.period}</p>
            </div>

            <div className="md:col-span-2 bg-muted/30 border border-border rounded-lg p-6">
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="text-foreground font-semibold">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
