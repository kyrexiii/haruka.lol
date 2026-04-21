"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

// Shows/hides the nav based on scroll direction — visible when scrolling up or near top
export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
          <Link href="/work" className="px-4 py-2 text-foreground hover:text-muted-foreground transition-colors">
            Work
          </Link>
          <Link href="/projects" className="px-4 py-2 text-foreground hover:text-muted-foreground transition-colors">
            Projects
          </Link>
          <div className="h-4 w-px bg-foreground/10 mx-2" />
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-foreground hover:text-muted-foreground transition-colors ml-2"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center justify-end flex-1 pr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full mt-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0 max-h-[400px]" : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
        }`}
      >
        <div className="bg-background/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl border border-foreground/5 flex flex-col gap-6 text-center">
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors">About</Link>
          <Link href="/work" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors">Work</Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors">Projects</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors">Resume</a>
        </div>
      </div>
    </nav>
  )
}
