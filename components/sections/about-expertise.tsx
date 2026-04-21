"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

const layers = [
  { name: "Frontend", techs: "React / Next.js / WebGL / Framer" },
  { name: "Backend", techs: "Node.js / Go / Redis / PostgreSQL" },
  { name: "Infrastructure", techs: "Docker / Kubernetes / AWS / Vercel" },
  { name: "Systems", techs: "Architecture / CI-CD / Telemetry" },
]

export default function AboutExpertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full pt-32 pb-16 md:pt-48 md:pb-24 border-t border-foreground/5 relative">
      <div className="text-[10px] font-mono tracking-widest uppercase mb-16">
        [ 03_EXPERTISE_MATRIX ]
      </div>
      
      <div className="w-full flex justify-end">
        <div className="w-full md:w-[80%] flex flex-col items-end" style={{ perspective: "1000px" }}>
          {layers.map((layer, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <motion.div 
                key={i} 
                className="w-full group cursor-pointer border-b border-foreground/5 py-8 md:py-12 flex flex-col items-end text-right transition-colors hover:border-foreground/20"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  translateZ: isHovered ? 40 : 0,
                  rotateX: isHovered ? -5 : 0
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tighter text-foreground/50 group-hover:text-foreground transition-colors duration-300">
                  {layer.name}
                </div>
                
                <motion.div 
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                   className="text-muted-foreground overflow-hidden mt-4 text-xs md:text-sm font-mono tracking-widest uppercase"
                >
                   {layer.techs}
                </motion.div>
                
                {/* Minimal 3D marker line */}
                <motion.div 
                   animate={{ width: isHovered ? "100%" : "0%" }}
                   className="h-px bg-foreground/30 absolute bottom-0 right-0 origin-right"
                   style={{ translateZ: "20px" }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
