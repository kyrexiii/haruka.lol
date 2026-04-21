"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useEffect, useState } from "react"

export default function Hero3D() {
  const [mounted, setMounted] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Weighted springs for "expensive" motion feel
  const mouseXSpring = useSpring(x, { stiffness: 30, damping: 40 })
  const mouseYSpring = useSpring(y, { stiffness: 30, damping: 40 })

  // Subtle parallax translations
  const textX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20])
  const textY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20])

  const glassX = useTransform(mouseXSpring, [-0.5, 0.5], [40, -40])
  const glassY = useTransform(mouseYSpring, [-0.5, 0.5], [40, -40])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Precision Grid Layer */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px] mask-overlay"
        style={{ maskImage: "radial-gradient(circle at center, black, transparent 80%)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-none">

        {/* Typographic Core */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="flex flex-col items-start gap-8"
        >
          <div className="flex flex-col gap-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1 }}
              className="text-[10px] font-mono tracking-[0.3em] uppercase"
            >
              PORTFOLIO // 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-zinc-50 text-7xl md:text-9xl font-medium tracking-[-0.04em] leading-tight"
            >
              Haruka S.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex flex-col gap-4 border-l border-foreground/10 pl-8"
          >
            <p className="text-muted-foreground text-sm md:text-base max-w-sm leading-relaxed font-light">
              Started with a laptop and curiosity.
              Now building things that actually matter.
            </p>

            <div className="flex gap-4 text-[9px] font-mono uppercase tracking-widest italic">
              <span>/UI/UX</span>
              <span>/Backend</span>
              <span>/Systems</span>
              <span>/Security</span>
            </div>
          </motion.div>
        </motion.div>


      </div>

      {/* Footer Interface */}
      <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 flex justify-between items-end pt-8">


        <div className="flex flex-col items-end gap-2 text-[9px] font-mono tracking-widest uppercase">
          <div className="flex gap-8">
            <span className="hover:opacity-100 transition-opacity cursor-pointer">INDEX</span>
            <span className="hover:opacity-100 transition-opacity cursor-pointer">SELECTED WORK</span>
            <span>v{new Date().getFullYear()}.4</span>
          </div>
          <p>20.0059° N, 73.7915° E</p>
        </div>
      </div>
    </section>
  )
}
