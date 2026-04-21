import dynamic from "next/dynamic"
import Footer from "@/components/footer"

const Hero3D = dynamic(() => import("@/components/sections/hero-3d"))
const Skills3D = dynamic(() => import("@/components/sections/skills-3d"))
const Projects3D = dynamic(() => import("@/components/sections/projects-3d"))
const Contact3D = dynamic(() => import("@/components/sections/contact-3d"))
const Stats3D = dynamic(() => import("@/components/sections/stats-3d"))

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center overflow-x-hidden selection:bg-foreground/10 selection:text-foreground relative">
      <Hero3D />
      <div className="w-full max-w-5xl flex flex-col gap-12 px-6 relative z-10">
        
        {/* Minimal System Status line instead of heavy boxes */}
        <Stats3D />
        
        <Skills3D />
        
        <Projects3D />
        
        <Contact3D />
        
        <Footer />
      </div>
    </main>
  )
}
