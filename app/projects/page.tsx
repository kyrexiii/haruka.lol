import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsClient from "@/components/projects/projects-client"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex justify-center overflow-x-hidden selection:bg-foreground/10 selection:text-foreground relative">

      <div className="w-full max-w-5xl flex flex-col px-6 relative z-10">
        
        {/* Minimalist Projects Header */}
        <ProjectsHero />
        
        {/* Interactive Feed & Filters */}
        <ProjectsClient />
        
        <Footer status="OUTPUT: INDEXED" />
      </div>
    </main>
  )
}
