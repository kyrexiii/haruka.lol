"use client"

import { motion } from "framer-motion"

const LOGOS = [
  "TYPESCRIPT",
  "JAVASCRIPT",
  "NODE.JS",
  "NEXT.JS",
  "LINUX",
  "DOCKER",
  "POSTGRESQL",
  "WEBGL",
  "INFRA",
]

export default function Skills3D() {
  return (
    <section className="w-full py-16 md:py-24 border-y border-white/5 overflow-hidden relative flex flex-col justify-center">
      
      <div className="absolute top-0 left-12 px-2 py-1 bg-background -translate-y-1/2 text-[10px] font-mono tracking-widest uppercase text-white/30 z-10">
        [ STACK_CAPACITY ]
      </div>

      <div className="flex overflow-hidden relative fade-x w-full pointer-events-none select-none">
          <div className="relative flex overflow-x-hidden group items-center">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 px-8 min-w-full flex-shrink-0">
              {LOGOS.map((logo, i) => (
                <div key={i} className="flex items-center gap-12 md:gap-24">
                  <span className="text-4xl md:text-6xl font-medium tracking-tighter text-white/10 group-hover:text-white/20 transition-colors uppercase">
                    {logo}
                  </span>
                  <span className="text-white/10 text-2xl group-hover:text-white/20 transition-colors">+</span>
                </div>
              ))}
            </div>

            <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 px-8 min-w-full flex-shrink-0">
              {LOGOS.map((logo, i) => (
                <div key={`${logo}-dup`} className="flex items-center gap-12 md:gap-24">
                  <span className="text-4xl md:text-6xl font-medium tracking-tighter text-white/10 group-hover:text-white/20 transition-colors uppercase">
                    {logo}
                  </span>
                  <span className="text-white/10 text-2xl group-hover:text-white/20 transition-colors">+</span>
                </div>
              ))}
            </div>

            {/* Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          </div>
      </div>
    </section>
  )
}
