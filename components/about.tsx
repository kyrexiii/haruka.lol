export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Column */}
        <div className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-6">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Full stack developer who loves building stuff
            </h2>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              I'm a full stack developer and I mostly work with JavaScript and TypeScript. I build apps using Next.js, Node.js and PostgreSQL. I like making things that just work fast and clean, even if it's frontend or backend.
            </p>
            <p>
              I'm also very into networking, Linux systems and how data centers actually work from inside. I keep learning things like server setup, container stuff and backend performance so I can improve myself more.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">Philosophy</p>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              I think simple code and clear design is always better than something too fancy.
            </p>
          </div>

          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              When I build something, I try to make it useful first. I like creating UIs that feel easy and APIs that don't break. I try writing code that is clean even if my English is not so good sometimes.
            </p>
            <p>
              I'm always learning new things — real-time apps, backend systems, infra, anything that helps me grow as a developer. Technology changes fast, so I try my best to stay updated.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}
