import React from "react"

export default function Stats3D() {
  return (
    <section className="w-full py-8 border-y border-white/5 flex flex-wrap gap-8 md:gap-16 justify-between items-center text-muted-foreground font-mono uppercase tracking-widest text-[10px]">
       
       <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>System Load: 1.2%</span>
       </div>

       <div className="hidden md:flex items-center gap-3">
          <span>0x9A4F: Verified</span>
       </div>

       <div className="flex items-center gap-3">
          <span>Commit Delta: +412</span>
       </div>

       <div className="hidden lg:flex items-center gap-3">
          <span>Uptime: 99.98%</span>
       </div>

       <div className="flex items-center gap-3">
          <span>Location: SFO_01</span>
       </div>

    </section>
  )
}
