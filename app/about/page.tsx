import AboutHero from "@/components/sections/about-hero"
import AboutPhilosophy from "@/components/sections/about-philosophy"
import AboutExpertise from "@/components/sections/about-expertise"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex justify-center overflow-x-hidden selection:bg-white/10 selection:text-white relative">
      {/* Subtle Noise / Grain Background Layer 
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
*/}
      <div className="w-full max-w-5xl flex flex-col gap-12 px-6">
        
        {/* Minimalist Senior About Sections */}
        <AboutHero />
        <AboutPhilosophy />
        <AboutExpertise />
        
        <footer className="pt-24 pb-12 flex flex-col md:flex-row items-center md:items-start justify-between text-[10px] text-muted-foreground font-mono uppercase tracking-widest border-t border-white/5">
          <p>© {new Date().getFullYear()} Haruka.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span>SYS_RENDER: MINIMAL</span>
             <span>STATE: OPERATIONAL</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
