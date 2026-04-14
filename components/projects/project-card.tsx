"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export interface ProjectCardProps {
  id: string
  title: string
  description: string
  longDescription: string
  year: string
  tags: string[]
  github?: string
  link?: string
  status?: string
}

export default function ProjectCard({ 
  project, 
  onTagClick,
  isSelected
}: { 
  project: ProjectCardProps, 
  onTagClick: (tag: string) => void,
  isSelected: (tag: string) => boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative border border-white/10 rounded-xl p-8 bg-background hover:bg-white/[0.02] transition-colors overflow-hidden"
    >
       {/* Minimalist Tech Background Text on Hover */}
       <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-5 transform translate-y-10 group-hover:translate-y-4 transition-all duration-500 pointer-events-none w-1/2 text-right overflow-hidden select-none">
          <span className="text-[120px] font-bold font-mono tracking-tighter leading-none">{project.year}</span>
       </div>

       <div className="flex flex-col h-full relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
             <div>
                <h3 className="text-2xl font-medium tracking-tight text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 max-w-sm">{project.description}</p>
             </div>
             
             {project.status === "in-progress" && (
                <div className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/50">
                  WIP / Active
                </div>
             )}
          </div>

          {/* Description */}
          <p className="text-foreground/60 text-sm mb-8 leading-relaxed max-w-2xl flex-grow">
             {project.longDescription}
          </p>

          {/* Bottom Metabar */}
          <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
             <div className="flex flex-wrap gap-2 max-w-[70%]">
                {project.tags.map(tag => {
                  const active = isSelected(tag);
                  return (
                    <button 
                      key={tag}
                      onClick={(e) => {
                        e.stopPropagation();
                        onTagClick(tag);
                      }}
                      className={`px-2 py-1 rounded border text-[10px] uppercase font-mono tracking-widest transition-colors ${active ? "border-foreground text-background bg-foreground" : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-white"}`}
                    >
                      {tag}
                    </button>
                  )
                })}
             </div>
             
             <div className="flex items-center gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors group-hover:translate-x-0" aria-label="Github Repo">
                     <Github className="w-4 h-4" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors group-hover:translate-x-0" aria-label="Live Demo">
                     <ExternalLink className="w-4 h-4" />
                  </a>
                )}
             </div>
          </div>
       </div>
    </motion.div>
  )
}
