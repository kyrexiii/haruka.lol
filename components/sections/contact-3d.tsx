"use client"

import { Mail, Github, Twitter } from "lucide-react"
import { motion, useSpring } from "framer-motion"
import { useState } from "react"

export default function Contact3D() {
  const [isHovered, setIsHovered] = useState(false)
  const meltScale = useSpring(isHovered ? 80 : 3, {
    stiffness: 30,
    damping: 15,
  })

  return (
    <section className="w-full pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col justify-center relative border-t border-foreground/5 mt-16">
      
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id="melt-filter" x="-20%" y="-20%" width="140%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.12"
            numOctaves="2"
            result="noise"
          />
          <motion.feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={meltScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      
      <div className="absolute top-0 right-12 px-2 py-1 bg-background -translate-y-1/2 text-[10px] font-mono tracking-widest uppercase z-10">
        [ 03_CONTACT ]
      </div>

      <div className="w-full flex justify-center overflow-hidden mb-16 select-none">
         <motion.h2 
            className="text-[15vw] font-bold tracking-tighter leading-none cursor-default"
            style={{ filter: "url(#melt-filter)" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         >
            CONNECT.
         </motion.h2>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-4xl mx-auto w-full px-4">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#967BB6] animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <h4 className="text-[10px] font-mono font-bold text-foreground/50 tracking-widest uppercase">open for work</h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">Got an idea? Let's talk.</h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest pt-2">hi@haruka.lol • Nashik, Maharashtra, India</p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:hello@haruka.lol" className="flex items-center gap-3 px-6 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium rounded-sm">
            <Mail className="w-4 h-4" /> <span className="text-xs uppercase tracking-widest font-mono font-bold">Say Hi</span>
          </a>
          <a href="https://github.com/haruka" className="flex items-center justify-center px-4 py-4 border border-foreground/10 text-foreground hover:bg-foreground/5 transition-colors rounded-sm">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://twitter.com/haruka" className="flex items-center justify-center px-4 py-4 border border-foreground/10 text-foreground hover:bg-foreground/5 transition-colors rounded-sm">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
