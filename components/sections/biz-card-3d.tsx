"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
import React from "react"

export default function BizCard3D() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "-30deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-30deg", "30deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section 
      className="bg-[#111111] border border-foreground/5 rounded-3xl md:rounded-[40px] p-8 md:p-32 overflow-hidden relative group/card flex flex-col items-center justify-center min-h-[700px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ perspective: "1500px" }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="text-purple-400 text-[11px] font-bold tracking-widest uppercase mb-16 text-center">CONTACT CARD</div>
      
      <motion.div 
        className="w-full max-w-[500px] h-72 md:h-80 bg-card border border-foreground/[0.1] rounded-3xl p-8 shadow-[0_50px_100px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.05)] cursor-pointer relative overflow-hidden"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Holographic Shine Layer */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-foreground/10 via-transparent to-foreground/10 opacity-40 pointer-events-none"
          style={{ 
            x: useTransform(mouseXSpring, [-0.5, 0.5], [-100, 100]), 
            y: useTransform(mouseYSpring, [-0.5, 0.5], [-100, 100]) 
          }}
        />
        
        {/* Card Content (Layered) */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
           <div className="flex justify-between items-start">
              <div className="space-y-1">
                 <h3 className="text-3xl font-bold text-foreground tracking-widest uppercase">Haruka</h3>
                 <p className="text-foreground/40 text-[10px] font-mono tracking-widest uppercase">Member Since 2024</p>
              </div>
              <div className="w-12 h-12 bg-[#1a1a1a] border border-foreground/10 rounded-2xl flex items-center justify-center">
                 <ExternalLink className="w-5 h-5 text-foreground/50" />
              </div>
           </div>
           
           <div className="flex justify-between items-end">
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.1, translateZ: 20 }} className="text-foreground/40 hover:text-foreground transition-colors">
                       <Github size={20} />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, translateZ: 20 }} className="text-foreground/40 hover:text-foreground transition-colors">
                       <Twitter size={20} />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, translateZ: 20 }} className="text-foreground/40 hover:text-foreground transition-colors">
                       <Linkedin size={20} />
                    </motion.div>
                 </div>
                 <div className="text-[9px] font-mono text-foreground/25 tracking-[0.3em] uppercase">Auth: 0xHYPER_3D_ACCESS</div>
              </div>
              <div className="text-right">
                 <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">San Francisco</div>
                 <div className="text-[10px] font-mono text-foreground/20">37.7749° N, 122.4194° W</div>
              </div>
           </div>
        </div>

        {/* 3D Chip HUD Detail */}
        <motion.div 
          style={{ translateZ: "40px" }}
          className="absolute top-10 right-10 w-24 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-xl pointer-events-none flex items-center justify-center"
        >
          <div className="flex gap-1">
             <div className="w-1 h-3 bg-purple-500/40 rounded-full" />
             <div className="w-1 h-5 bg-purple-400 rounded-full" />
             <div className="w-1 h-4 bg-purple-500/40 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
      
      <p className="mt-12 text-[#a1a1aa] text-sm animate-pulse">Drag your mouse to inspect the hardware.</p>
    </section>
  )
}
