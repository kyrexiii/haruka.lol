"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

const milestones = [
  { year: "2024", role: "Sr. Web Architect", company: "Meta", desc: "Leading high-performance frontend architecture for next-gen social platforms.", color: "text-blue-400" },
  { year: "2023", role: "Product Designer", company: "Stripe", desc: "Crafting beautiful, accessible financial user interfaces and dashboards.", color: "text-purple-400" },
  { year: "2022", role: "Frontend Lead", company: "Vercel", desc: "Optimizing framework-level performance and DX for millions of developers.", color: "text-emerald-400" },
]

export default function Timeline3D() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section 
      ref={containerRef}
      className="bg-[#111111] border border-white/5 rounded-3xl md:rounded-[40px] p-8 md:p-32 min-h-[1000px] overflow-hidden relative group/timeline flex flex-col items-center"
      style={{ perspective: "2000px" }}
    >
      <div className="text-purple-400 text-[11px] font-bold tracking-widest uppercase mb-16 text-center">EXPERIENCE TIMELINE</div>
      <h2 className="text-3xl md:text-[42px] font-semibold tracking-tight text-[#f4f4f5] leading-[1.1] mb-24 text-center">
        Deep Parallax Role-Scroll.
      </h2>
      
      <div className="relative w-full max-w-4xl flex flex-col items-center gap-[400px]">
        {/* The 3D Rail Line */}
        <motion.div 
           className="absolute top-0 w-px h-full bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent pointer-events-none" 
           style={{ translateZ: "-200px" }}
        />

        {milestones.map((milestone, i) => (
          <motion.div 
            key={i} 
            className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative"
            style={{ 
              translateZ: useTransform(scrollYProgress, 
                [0.1 * i, 0.4 * i + 0.2], 
                [-1000, 0]
              ),
              opacity: useTransform(scrollYProgress, 
                [0.1 * i, 0.4 * i + 0.1, 0.4 * i + 0.4], 
                [0, 1, 0]
              ),
              rotateX: useTransform(scrollYProgress, 
                [0.1 * i, 0.4 * i + 0.2], 
                [45, 0]
              )
            }}
          >
            <div className="text-6xl md:text-8xl font-black text-white/5 md:-translate-x-1/2 absolute top-0 pointer-events-none tracking-widest">
              {milestone.year}
            </div>
            
            <div className="bg-[#151515] border border-white/[0.08] rounded-[32px] p-10 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.8)] max-w-lg relative group">
               <div className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${milestone.color}`}>{milestone.company}</div>
               <h3 className="text-3xl font-bold text-white tracking-tight mb-4">{milestone.role}</h3>
               <p className="text-[#a1a1aa] leading-relaxed text-sm md:text-base">
                 {milestone.desc}
               </p>
               
               <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
                 <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
               </div>
            </div>
          </motion.div>
        ))}
        
        <div className="h-[200px]" /> {/* Spacer to allow last item to finish scroll */}
      </div>
    </section>
  )
}
