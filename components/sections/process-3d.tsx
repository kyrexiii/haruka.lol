"use client"

import { motion } from "framer-motion"
import { Settings, PenTool, Rocket } from "lucide-react"
import React from "react"

const stages = [
  { id: "01", title: "Plan", icon: Settings, desc: "Deep architectural planning & research.", color: "text-blue-400" },
  { id: "02", title: "Build", icon: PenTool, desc: "High-fidelity coding & interaction design.", color: "text-purple-400" },
  { id: "03", title: "Ship", icon: Rocket, desc: "Performance optimization & site deployment.", color: "text-green-400" },
]

export default function Process3D() {
  return (
    <section className="bg-[#111111] border border-white/5 rounded-3xl md:rounded-[40px] p-8 md:p-20 overflow-hidden relative group/process">
      <div className="text-purple-400 text-[11px] font-bold tracking-widest uppercase mb-4 text-center">HOW I WORK</div>
      <h2 className="text-3xl md:text-[42px] font-semibold tracking-tight text-[#f4f4f5] leading-[1.1] mb-24 text-center">
        The 3D Decompression Stack.
      </h2>
      
      <div className="flex flex-col items-center justify-center min-h-[600px] relative" style={{ perspective: "2000px" }}>
        {stages.map((stage, i) => (
          <motion.div 
            key={i} 
            className="absolute w-[80%] max-w-[600px] h-40 md:h-48 bg-[#151515]/90 border border-white/[0.08] rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.05)] cursor-pointer"
            initial={{ translateZ: i * -150 }}
            whileHover={{ 
              translateZ: 150, 
              rotateX: -10, 
              background: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.2)"
            }}
            style={{ 
              top: `calc(50% + ${i * 40}px)`, 
              left: "50%", 
              x: "-50%", 
              y: "-50%",
              transformStyle: "preserve-3d"
            }}
          >
            <div className="absolute top-4 left-4 text-[10px] font-mono text-white/30 tracking-widest">{stage.id}</div>
            <div className="flex items-center gap-6 h-full">
               <div className="w-16 h-16 bg-[#18181b] border border-white/[0.1] rounded-2xl flex items-center justify-center shadow-2xl">
                 <stage.icon className={`w-8 h-8 ${stage.color}`} />
               </div>
               <div className="space-y-1">
                 <h3 className="text-2xl font-bold text-white tracking-tight">{stage.title}</h3>
                 <p className="text-white/40 text-sm max-w-[280px]">{stage.desc}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
