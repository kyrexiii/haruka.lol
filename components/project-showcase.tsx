export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w mx-auto px-6">
        <h2 className="text-xs font-semibold tracking-widest mb-16 text-muted-foreground">I'M CURRENTLY WORKING ON</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">IndieMaker</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IndieMaker is the largest maker-oriented marketplace to buy and sell side-projects, micro-saas, domains
              and more.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I've been responsible for all the planning, design, infrastructure and software development behind the
              indieMaker platform. Initially, I have set up a Laravel PHP application that I eventually rebuilt in Ruby
              on Rails. Our next release is around the corner, and it will take the...
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full aspect-video bg-card rounded-lg border border-border flex items-center justify-center">
              <svg className="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
