export default function GetInTouch() {
  const socialLinks = [
    { icon: "github", href: "https://github.com/kyrexiii", label: "GitHub" },
    { icon: "instagram", href: "https://instagram/krexyyy_", label: "Instagram" },
    { icon: "discord", href: "https://discord.com/NvW7JTmVD9", label: "Discord" },
  ]
    {/*  { icon: "linkedin", href: "#", label: "LinkedIn" }, */}

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-2">Let's Work Together</h2>
        <div className="w-12 h-1 bg-foreground"></div>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT COLUMN */}
        <div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Hire me or dont. I'll still be yelling at TypeScript.
            Got an idea? Cool. Let's break it, fix it, and pretend it was intentional.
          </p>

          <div className="bg-muted/20 border border-border rounded-lg p-8 mb-8">
            <p className="text-sm text-muted-foreground mb-4">Send me an email</p>
            <a
              href="mailto:contact@haruka.lol"
              className="text-2xl font-bold hover:text-muted-foreground transition-colors"
            >
              contact@haruka.lol
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
            >
              <span>↓</span>
              Download Resume
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded font-semibold hover:bg-muted transition-colors"
            >
              <span>→</span>
              View My Work
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — SOCIALS */}
        <div className="md:pt-6">
          <p className="text-sm text-muted-foreground mb-6">Connect with me</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                className="text-sm hover:text-foreground transition-colors flex items-center gap-2 group"
              >
                <span className="w-8 h-8 border border-border rounded flex items-center justify-center group-hover:bg-muted transition-colors">
                  {link.icon === "github" && "↗"}
                  {link.icon === "x" && "𝕏"}
                  {link.icon === "linkedin" && "in"}
                  {link.icon === "instagram" && "@"}
                  {link.icon === "discord" && "#"}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}


