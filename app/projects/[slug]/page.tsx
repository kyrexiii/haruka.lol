import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug }  = await params;
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex justify-center py-32 px-6">
      <div className="w-full max-w-3xl flex flex-col gap-8 relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono tracking-widest text-[10px] uppercase w-fit mb-8"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Archive
        </Link>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-foreground/5 pb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
               <span className="text-foreground/30 font-mono tracking-widest text-xs uppercase">
                 SYS_YEAR: {project.year}
               </span>
               {project.status === "in-progress" && (
                 <span className="px-2 py-0.5 border border-foreground/10 rounded text-[10px] font-mono text-foreground/50 uppercase">
                   Active
                 </span>
               )}
            </div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">{project.title}</h1>
          </div>
          
          <div className="flex items-center gap-6">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-mono">Source</span>
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-mono">Live</span>
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed prose-headings:text-foreground max-w-none mt-8">
           <p className="text-xl text-foreground font-medium mb-12">
             {project.description}
           </p>

           <h2 className="text-xl font-medium tracking-tight mt-12 mb-6">Overview</h2>
           <p>
             {project.longDescription}
           </p>
           
           {/* You can add more generic case study content here in the future mapping over markdown bodies */}
        </article>

        {/* Technology Stack Footer */}
        <div className="mt-24 pt-12 border-t border-foreground/5">
          <div className="text-[10px] font-mono tracking-widest uppercase text-foreground/30 mb-6">Execution Stack</div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 border border-foreground/10 rounded-md text-xs uppercase tracking-widest text-muted-foreground bg-foreground/[0.02]">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
