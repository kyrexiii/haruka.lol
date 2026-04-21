"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun, Folder, User, Mail, PenLine, Code2 } from "lucide-react"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false)
      command()
    },
    []
  )

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-background/80 backdrop-blur-sm px-4">
      <div 
        className="fixed inset-0" 
        onClick={() => setOpen(false)} 
      />
      <Command
        className="relative z-50 w-full max-w-2xl overflow-hidden rounded-2xl border border-foreground/10 bg-background/90 shadow-2xl"
        label="Global Command Menu"
      >
        <div className="flex items-center border-b border-foreground/10 px-4">
          <SearchIcon className="mr-3 h-4 w-4 text-foreground/40 shrink-0" />
          <Command.Input 
            autoFocus
            className="flex h-14 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
            placeholder="Type a command or search..." 
          />
        </div>
        
        <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-none">
          <Command.Empty className="py-6 text-center text-sm text-foreground/40">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="text-[10px] uppercase font-mono tracking-widest text-foreground/40 p-2">
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 text-sm text-foreground hover:bg-foreground/10 transition-colors data-[selected=true]:bg-foreground/10 mt-1"
            >
              <Monitor className="h-4 w-4 text-foreground/50" />
              <span>Home</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/about"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 text-sm text-foreground hover:bg-foreground/10 transition-colors data-[selected=true]:bg-foreground/10"
            >
              <User className="h-4 w-4 text-foreground/50" />
              <span>About Haruka</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/projects"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 text-sm text-foreground hover:bg-foreground/10 transition-colors data-[selected=true]:bg-foreground/10"
            >
              <Folder className="h-4 w-4 text-foreground/50" />
              <span>Project Archive</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/notes"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 text-sm text-foreground hover:bg-foreground/10 transition-colors data-[selected=true]:bg-foreground/10"
            >
              <PenLine className="h-4 w-4 text-foreground/50" />
              <span>Developer Notes</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/work"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 text-sm text-foreground hover:bg-foreground/10 transition-colors data-[selected=true]:bg-foreground/10"
            >
              <Code2 className="h-4 w-4 text-foreground/50" />
              <span>Work Experience</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Theme" className="text-[10px] uppercase font-mono tracking-widest text-foreground/40 p-2 mt-4 border-t border-foreground/5 pt-4">
            <Command.Item 
              onSelect={() => runCommand(() => setTheme("light"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 text-sm text-foreground hover:bg-foreground/10 transition-colors data-[selected=true]:bg-foreground/10 mt-1"
            >
              <Sun className="h-4 w-4 text-foreground/50" />
              <span>Light Mode</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => setTheme("dark"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 text-sm text-foreground hover:bg-foreground/10 transition-colors data-[selected=true]:bg-foreground/10"
            >
              <Moon className="h-4 w-4 text-foreground/50" />
              <span>Dark Mode</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => setTheme("system"))}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 text-sm text-foreground hover:bg-foreground/10 transition-colors data-[selected=true]:bg-foreground/10"
            >
              <Monitor className="h-4 w-4 text-foreground/50" />
              <span>System Request</span>
            </Command.Item>
          </Command.Group>
          
        </Command.List>
      </Command>
    </div>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
