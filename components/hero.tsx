export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-screen px-8 max-w-5xl mx-auto">
      <div className="px-6 py-24">
        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground text-sm mb-4">Portfolio 2025</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-pretty">
              I'm Haruka.
            </h1>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl text-base">
            Just a guy yelling at TypeScript until it compiles.

            If it works, don’t touch it. If it breaks… well, even better. - haruka
          </p>

          {/* Social Links and CTA Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 pt-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Follow</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kyrexiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-border hover:bg-secondary transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {/*  <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-border hover:bg-secondary transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-0.75 11-5-2.25.75-4.5.5-6.5-.25 2-1.75 3.5-3.25 4-5.5-2.25 1.25-4.75 1.75-7 1.5 2-1.5 3.75-3.5 4-5.5z" />
                  </svg>
                </a>  */}
                <a
                  href="https://www.linkedin.com/in/kyrexiii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-border hover:bg-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2 rounded border border-border hover:bg-secondary transition-colors text-sm font-medium"
            >
              See projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
