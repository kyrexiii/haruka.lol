"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

const principles = [
  { id: "01", title: "Scalability First", desc: "Systems must thrive as domains scale, handling infinity with zero degradation." },
  { id: "02", title: "Architectural Integrity", desc: "Clean architecture is not a preference; it is a long-term business strategy." },
  { id: "03", title: "Vital Performance", desc: "A millisecond is the boundary between a conversion and a bounce." },
  { id: "04", title: "Telemetry Driven", desc: "Decisions backed by exact data and telemetry, void of gut intuition." },
]

export default function AboutPhilosophy() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 border-t border-white/5">
      <div className="text-white/30 text-[10px] font-mono tracking-widest uppercase mb-16">
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
              <div className="text-white/20 font-mono text-sm tracking-widest md:w-16 shrink-0">{p.id}</div>
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
