"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const options = [
    { value: "system", icon: Monitor, label: "System" },
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
  ]

  return (
    <div className="relative flex items-center backdrop-blur-md border border-white/5 rounded-full p-1.5 shadow-xl">
      {options.map((opt) => {
        const Icon = opt.icon
        const isActive = theme === opt.value

        return (
          <button
            key={opt.value}
            onClick={() => setTheme(opt.value)}
            className={`relative px-3 py-2 rounded-full transition-all duration-300 group ${
              isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
            aria-label={`Set ${opt.label} theme`}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-zinc-800 rounded-full shadow-inner shadow-white/5"
                transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
              />
            )}
            <div className="relative z-10">
               {opt.value === 'dark' ? (
                 <div className="relative">
                    <Moon className="w-4 h-4" />
                    <span className="absolute -top-1 -right-1 text-[8px] font-bold">+</span>
                 </div>
               ) : (
                 <Icon className="w-4 h-4" />
               )}
            </div>
          </button>
        )
      })}
    </div>
  )
}
