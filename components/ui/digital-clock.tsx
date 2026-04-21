"use client"

import { motion, MotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface DigitalClock3DProps {
  mouseXSpring: MotionValue<number>
  mouseYSpring: MotionValue<number>
}

export function DigitalClock3D({ mouseXSpring, mouseYSpring }: DigitalClock3DProps) {
  const [time, setTime] = useState(new Date())

  // Digital clock update logic
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // 3D Tilt transforms
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15])
  
  // Parallax for interior elements
  const innerX = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10])
  const innerY = useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10])

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    return { hours, minutes, seconds }
  }

  const { hours, minutes, seconds } = formatTime(time)

  return (
    <div className="perspective-1000 py-8 md:py-0">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        className="relative group cursor-default scale-75 md:scale-100"
      >

        {/* Main Card */}
        <div className="relative p-8 flex flex-col gap-4 shadow-2xl overflow-hidden">
          

          <motion.div 
            style={{ x: innerX, y: innerY, z: 50 }}
            className="flex items-baseline gap-2 relative z-10"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase mb-1">
                Local Time
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl md:text-7xl font-mono font-medium tracking-tighter text-foreground tabular-nums">
                  {hours}:{minutes}
                </span>
                <span className="text-2xl font-mono text-primary font-bold animate-pulse tabular-nums">
                  {seconds}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-muted-foreground pt-4 border-t border-white/5 uppercase">
            <span>GMT +05:30</span>
            <span>LOCAL</span>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/50" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary/50" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary/50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/50" />
        </div>
      </motion.div>
    </div>
  )
}
