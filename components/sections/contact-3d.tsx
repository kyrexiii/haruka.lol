"use client"

import { Mail, Github, Twitter } from "lucide-react"

export default function Contact3D() {
  return (
    <section className="w-full py-32 md:py-48 flex flex-col justify-center relative border-t border-white/5 mt-16">
      
      <div className="absolute top-0 right-12 px-2 py-1 bg-background -translate-y-1/2 text-[10px] font-mono tracking-widest uppercase text-white/30 z-10">
        [ 03_TRANSMISSION ]
      </div>

      <div className="w-full flex justify-center overflow-hidden mb-16 select-none opacity-10">
         <h2 className="text-[20vw] font-bold tracking-tighter leading-none hover:opacity-100 transition-opacity duration-1000">
            CONNECT.
         </h2>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-4xl mx-auto w-full px-4">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <h4 className="text-[10px] font-mono font-bold text-white/50 tracking-widest uppercase">System Online • Ready</h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">Open for new architecture.</h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest pt-2">hello@haruka.lol • San Francisco, CA</p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:hello@haruka.lol" className="flex items-center gap-3 px-6 py-4 bg-foreground text-background hover:bg-white/90 transition-colors font-medium rounded-sm">
            <Mail className="w-4 h-4" /> <span className="text-xs uppercase tracking-widest font-mono font-bold">Initiate Ping</span>
          </a>
          <a href="https://github.com/haruka" className="flex items-center justify-center px-4 py-4 border border-white/10 text-white hover:bg-white/5 transition-colors rounded-sm">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://twitter.com/haruka" className="flex items-center justify-center px-4 py-4 border border-white/10 text-white hover:bg-white/5 transition-colors rounded-sm">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
