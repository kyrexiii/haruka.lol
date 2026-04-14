"use client"

import { Menu } from "lucide-react"

export function MobileMenu() {
  return (
    <button className="p-2 text-foreground hover:text-muted-foreground transition-colors" aria-label="Menu">
      <Menu className="w-6 h-6" />
    </button>
  )
}
