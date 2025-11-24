import { Mail } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="w-10 h-10 border-2 border-foreground flex items-center justify-center">
          <span className="text-sm font-semibold">S</span>
        </div>

        {/* Email Icon */}
        <a
          href="mailto:hello@example.com"
          className="text-foreground hover:text-muted-foreground transition-colors"
          aria-label="Send email"
        >
          <Mail size={20} />
        </a>
      </div>
    </header>
  )
}
