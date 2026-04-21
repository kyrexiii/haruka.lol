import React from "react"

export default function Stats3D() {
  return (
    <section className="w-full py-8 border-y border-foreground/5 flex flex-wrap gap-8 md:gap-16 justify-between items-center text-muted-foreground font-mono uppercase tracking-widest text-[10px]">
       
       <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
          <span>STATUS: OPEN TO WORK</span>
       </div>

       <div className="hidden md:flex items-center gap-3">
          <span>STACK: NEXT.JS, TS, SHADCN</span>
       </div>

       <div className="flex items-center gap-3">
          <span>BASED IN: MAHARASHTRA, IN</span>
       </div>

       <div className="hidden lg:flex items-center gap-3">
          <span>LOCAL TIME: IST (+5:30)</span>
       </div>

    </section>
  )
}
