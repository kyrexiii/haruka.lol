import { Heart, Server, Cloud } from "lucide-react"
import { SiNextdotjs, SiVercel, SiReact } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-2 flex-wrap">
          Built with

          {/* React */}
          <span className="inline-flex items-center gap-1">
            <SiReact size={14} /> React 19.2
          </span>

          •

          {/* Next.js */}
          <span className="inline-flex items-center gap-1">
            <SiNextdotjs size={14} /> Next.js 16
          </span>

          •

          {/* Vercel */}
          <span className="inline-flex items-center gap-1">
            <SiVercel size={14} /> Vercel
          </span>
        </p>
      </div>
    </footer>
  )
}
