import AboutHero from "@/components/sections/about-hero"
import AboutPhilosophy from "@/components/sections/about-philosophy"
import AboutExpertise from "@/components/sections/about-expertise"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex justify-center overflow-x-hidden selection:bg-foreground/10 selection:text-foreground relative">
      {/* Subtle Noise / Grain Background Layer 
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
*/}
      <div className="w-full max-w-5xl flex flex-col gap-12 px-6">
        
        {/* Minimalist Senior About Sections */}
        <AboutHero />
        <AboutPhilosophy />
        <AboutExpertise />
        
        <Footer status="STATE: OPERATIONAL" />
      </div>
    </main>
  )
}
