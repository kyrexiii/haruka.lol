"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React from "react"

export default function AboutHero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Fluid, lightweight springs
  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 overflow-hidden relative min-h-[60vh] mt-32 px-4 md:px-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ perspective: "1000px" }}
    >
      <div className="flex-1 space-y-6 z-10 w-full">
        <div className="text-[10px] font-mono tracking-widest uppercase">
          [ 01_ABOUT_ARCHITECT ]
        </div>
        <motion.h1
          className="text-3xl md:text-5xl lg:text-[70px] font-medium tracking-tighter text-foreground leading-[0.9]"
        >
          I just build <br /> what makes sense.
        </motion.h1>
        <p className="text-muted-foreground max-w-md leading-relaxed text-sm md:text-base mt-8">
          I started with random curiosity and a slow laptop.
          Now I spend most of my time breaking things, fixing them,
          and figuring out how systems actually work underneath.
          Still learning. Still building.
        </p>
      </div>

      <div className="flex-1 w-full h-[300px] md:h-[400px] relative pointer-events-none select-none flex items-center justify-center md:justify-end">
        {/* Lightweight 3D Wireframe Node */}
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          {/* Outline Face 1 */}
          <motion.div
            className="absolute inset-0 border border-foreground/20"
            style={{ translateZ: "40px" }}
          />
          {/* Outline Face 2 */}
          <motion.div
            className="absolute inset-0 border border-foreground/10"
            style={{ translateZ: "-40px" }}
          />
          {/* Connection Lines (CSS simulated wireframe) */}
          <div className="absolute top-0 left-0 w-full h-full" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute top-0 left-0 w-px h-[80px] bg-foreground/10 origin-top-[0px_0px_40px]" style={{ transform: "rotateX(-90deg)", transformOrigin: "top" }} />
            <div className="absolute top-0 right-0 w-px h-[80px] bg-foreground/10 origin-top-[0px_0px_40px]" style={{ transform: "rotateX(-90deg)", transformOrigin: "top" }} />
            <div className="absolute bottom-0 left-0 w-px h-[80px] bg-foreground/10 origin-bottom-[0px_0px_40px]" style={{ transform: "rotateX(90deg)", transformOrigin: "bottom" }} />
            <div className="absolute bottom-0 right-0 w-px h-[80px] bg-foreground/10 origin-bottom-[0px_0px_40px]" style={{ transform: "rotateX(90deg)", transformOrigin: "bottom" }} />
          </div>

          {/* Inner detail */}
          <motion.div
            animate={{ rotateZ: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[30%] border border-foreground/5 rounded-full border-t-white/30"
            style={{ translateZ: "0px" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
