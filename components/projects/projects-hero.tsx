"use client"

import { motion } from "framer-motion"

export default function ProjectsHero() {
  return (
    <section className="w-full pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-12 border-b border-white/5 relative z-10">
      <div className="flex-1 space-y-6 w-full">
        <div className="text-white/30 text-[10px] font-mono tracking-widest uppercase">
          [ 04_PROJECT_ARCHIVE ]
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tighter text-foreground leading-[0.9]"
        >
          Shipped <br/> architectures.
        </motion.h1>
        <p className="text-muted-foreground max-w-md leading-relaxed text-sm md:text-base mt-8">
          A definitive collection of production systems, scaling solutions, and interactive interfaces. Not just code—functioning businesses and tools.
        </p>
      </div>

      <div className="flex-1 w-full flex justify-start md:justify-end select-none pointer-events-none" style={{ perspective: "1000px" }}>
        {/* Minimal 3D Element (Hovering Prism) */}
        <motion.div 
           className="relative w-32 h-32 md:w-48 md:h-48"
           animate={{ rotateY: 360, rotateX: 360 }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           style={{ transformStyle: "preserve-3d" }}
        >
          {/* Faces */}
           <div className="absolute inset-0 border border-white/20 bg-background/50 backdrop-blur-sm" style={{ transform: "translateZ(30px)" }} />
           <div className="absolute inset-0 border border-white/20 bg-background/50 backdrop-blur-sm" style={{ transform: "rotateY(90deg) translateZ(30px)" }} />
           <div className="absolute inset-0 border border-white/20 bg-background/50 backdrop-blur-sm" style={{ transform: "rotateY(180deg) translateZ(30px)" }} />
           <div className="absolute inset-0 border border-white/20 bg-background/50 backdrop-blur-sm" style={{ transform: "rotateY(-90deg) translateZ(30px)" }} />
           <div className="absolute inset-0 border border-white/20 bg-background/50 backdrop-blur-sm" style={{ transform: "rotateX(90deg) translateZ(30px)" }} />
           <div className="absolute inset-0 border border-white/20 bg-background/50 backdrop-blur-sm" style={{ transform: "rotateX(-90deg) translateZ(30px)" }} />
           
           {/* Inner Core */}
           <div className="absolute inset-[35%] bg-white/10 rounded-full" style={{ transform: "translateZ(0)" }} />
        </motion.div>
      </div>
    </section>
  )
}
