"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React from "react"
import { ArrowDownRight } from "lucide-react"

export default function Hero3D() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 })

  const tiltX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const tiltY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])
  
  const moveX = useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30])
  const moveY = useTransform(mouseYSpring, [-0.5, 0.5], [-30, 30])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section 
      className="w-full flex flex-col items-start justify-center overflow-hidden relative min-h-[75vh]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Grid Pattern Background - Extremely Subtle */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="space-y-6">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-[10px] font-mono tracking-widest uppercase text-white/40 flex items-center gap-4"
          >
             <span>Haruka M.</span>
             <div className="w-8 h-px bg-white/20" />
             <span>Web Architect</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-medium tracking-tighter text-foreground leading-[0.85]"
            style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
          >
            <motion.span style={{ translateZ: "20px" }} className="block">Digital</motion.span>
            <motion.span style={{ translateZ: "40px" }} className="block text-white/50">Precision.</motion.span>
          </motion.h1>
          
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base mt-8 pt-8 border-t border-white/5">
            Engineering high-performance web systems and uncompromising minimal interfaces. Based in San Francisco, building globally.
          </p>
        </div>

        {/* Floating Architectural Asset */}
        <motion.div 
          className="relative w-32 h-32 md:w-64 md:h-64 pointer-events-none select-none hidden md:flex items-center justify-center"
          style={{ x: moveX, y: moveY }}
        >
           <motion.div 
             className="absolute w-full h-full border border-white/10 rounded-full"
             animate={{ rotate: 360, scale: [1, 1.05, 1] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           />
           <motion.div 
             className="absolute w-2/3 h-2/3 border border-white/5 rounded-full"
             animate={{ rotate: -360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           />
           <ArrowDownRight className="w-8 h-8 text-white/20" />
        </motion.div>
      </div>
    </section>
  )
}
