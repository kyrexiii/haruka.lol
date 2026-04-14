import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsClient from "@/components/projects/projects-client"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex justify-center overflow-x-hidden selection:bg-white/10 selection:text-white relative">

      <div className="w-full max-w-5xl flex flex-col px-6 relative z-10">
        
        {/* Minimalist Projects Header */}
        <ProjectsHero />
        
        {/* Interactive Feed & Filters */}
        <ProjectsClient />
        
        <footer className="w-full pt-12 pb-12 flex flex-col md:flex-row items-center md:items-start justify-between text-[10px] text-muted-foreground font-mono uppercase tracking-widest border-t border-white/5">
          <p>© {new Date().getFullYear()} Haruka.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span>SYS_RENDER: MINIMAL</span>
             <span>OUTPUT: INDEXED</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
