"use client"

import { useEffect } from "react"
import { toast, Toaster } from "sonner"
import { getRandomNotification } from "@/lib/data/notifications"
import { AlertTriangle } from "lucide-react"

const IDLE_TRIGGER_MS = 5000    // Temporary for testing (5 sec)
const COOLDOWN_MS = 10000     // Temporary for testing (1 min)
const STORAGE_KEY = "easter_egg_last_shown"

function canShowNotification(): boolean {
  if (typeof window === "undefined") return false
  const last = localStorage.getItem(STORAGE_KEY)
  if (!last) return true
  return Date.now() - parseInt(last, 10) > COOLDOWN_MS
}

function markAsShown(): void {
  localStorage.setItem(STORAGE_KEY, Date.now().toString())
}

function fireNotification() {
  if (!canShowNotification()) return

  const { title, message } = getRandomNotification()
  
  // Apple style me brackets remove karna
  const cleanTitle = title.replace(/\[|\]/g, '').trim()

  toast.custom(
    () => (
      // Glassmorphism structure using your theme variables
      <div className="w-full max-w-[356px] flex items-start gap-3.5 rounded-2xl border border-foreground/10 bg-background/80 p-4 shadow-xl backdrop-blur-2xl transition-all">
        
        {/* Warning Icon Container */}
        <div className="flex-shrink-0 pt-0.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
            <AlertTriangle className="h-4 w-4 text-red-500" strokeWidth={2.5} />
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-[13px] font-semibold tracking-tight text-foreground">
              {cleanTitle}
            </span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
              just now
            </span>
          </div>
          
          <p className="text-[12px] leading-[1.5] text-muted-foreground font-medium">
            {message}
          </p>
        </div>
      </div>
    ),
    {
      duration: 10000,
      position: "bottom-right",
    }
  )

  markAsShown()
}

export function EasterEggAlert() {
  useEffect(() => {
    if (!canShowNotification()) return

    const timer = setTimeout(fireNotification, IDLE_TRIGGER_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    // yaha theme pass karne ki zaroorat nhi, ye app ke global theme ko inherit karega
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: { 
          background: "transparent", 
          border: "none", 
          boxShadow: "none", 
          padding: 0 
        },
      }}
    />
  )
}