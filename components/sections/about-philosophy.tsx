"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

const principles = [
  {
    id: "01",
    title: "Make it work first",
    desc: "I care more about things actually working than looking impressive. If it runs well, I can improve it later."
  },
  {
    id: "02",
    title: "Don't overcomplicate",
    desc: "Simple systems are easier to fix, scale, and understand. I try not to build things I can't explain later."
  },
  {
    id: "03",
    title: "Break → fix → learn",
    desc: "Most of what I know comes from breaking stuff and figuring out why it failed."
  },
  {
    id: "04",
    title: "Performance matters (but not always first)",
    desc: "I optimize when it actually matters, not just for numbers that no one will notice."
  },
]

export default function AboutPhilosophy() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 border-t border-foreground/5">
      <div className="text-[10px] font-mono tracking-widest uppercase mb-16">
        [ 02_CORE_PHILOSOPHY ]
      </div>
      
      <div className="flex flex-col gap-16 md:gap-24 w-full" style={{ perspective: "1500px" }}>
        {principles.map((p, i) => {
          // Calculate an overlapping staggered fade/tilt based on index
          const start = i * 0.1
          const end = start + 0.3
          
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
          const rotateX = useTransform(scrollYProgress, [start, end], ["30deg", "0deg"])
          const translateZ = useTransform(scrollYProgress, [start, end], [-100, 0])
          const translateY = useTransform(scrollYProgress, [start, end], [50, 0])

          return (
            <motion.div 
              key={i} 
              className="flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-baseline"
              style={{ 
                opacity, 
                rotateX, 
                translateZ, 
                y: translateY,
                transformStyle: "preserve-3d",
                transformOrigin: "bottom"
              }}
            >
              <div className="font-mono text-sm tracking-widest md:w-16 shrink-0">{p.id}</div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
