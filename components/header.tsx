"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { Menu } from "lucide-react"

// Shows/hides the nav based on scroll direction — visible when scrolling up or near top
export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed left-1/2 -translate-x-1/2 z-50 px-6 w-full max-w-7xl transition-all duration-700 ease-in-out ${
        isVisible ? "top-8 opacity-100" : "-top-24 opacity-0"
      }`}
    >
      <div className="bg-background/50 backdrop-blur-[120px] rounded-full px-8 py-3 flex items-center gap-8 shadow-lg w-full">
        <div className="flex items-center font-light tracking-tight">
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <Image className="rounded-full"src="/favicon.png" alt="Haruka logo" width={24} height={24} priority />
            <span className="text-foreground text-lg">Haruka</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-end gap-4 flex-1 pr-4">
          <Link href="/about" className="px-4 py-2 text-foreground hover:text-muted-foreground transition-colors">
            About
          </Link>
          <Link href="/notes" className="px-4 py-2 text-foreground hover:text-muted-foreground transition-colors">
            Notes
          </Link>
          <Link href="/projects" className="px-4 py-2 text-foreground hover:text-muted-foreground transition-colors">
            Projects
          </Link>
          <Link
            href="mailto:hello@haruka.lol"
            className="px-[18px] py-[10px] rounded-full text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger — just shows the icon for now, full menu can be wired up later */}
        <div className="flex md:hidden items-center justify-end flex-1 pr-4">
          <button
            className="p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
