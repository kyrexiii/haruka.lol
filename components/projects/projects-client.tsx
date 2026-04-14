"use client"

import { useState, useMemo } from "react"
import { Search } from 'lucide-react'
import ProjectCard from "./project-card"
import { projects, getAllTags } from "@/lib/projects-data"

const allTags = getAllTags()

export default function ProjectsClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.longDescription.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTags =
        selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const isSelected = (tag: string) => selectedTags.includes(tag)

  return (
    <div className="w-full flex md:flex-row flex-col gap-12 mt-12 mb-32 z-10 relative">
       {/* Sidebar / Filters (Sticky on Desktop) */}
       <aside className="w-full md:w-64 shrink-0 flex flex-col gap-8 md:sticky md:top-32 h-fit">
          <div className="space-y-4">
             <div className="text-[10px] font-mono tracking-widest uppercase text-white/30">Query System</div>
             <div className="relative group">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-white transition-colors" />
               <input
                 type="text"
                 placeholder="Search nodes..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
               />
             </div>
          </div>

          <div className="space-y-4 hidden md:block">
             <div className="text-[10px] font-mono tracking-widest uppercase text-white/30">Technology Filter</div>
             <div className="flex flex-col gap-1 w-full bg-black/40 border border-white/5 rounded-lg p-2 max-h-[400px] overflow-y-auto">
                {allTags.map(tag => {
                  const active = isSelected(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`text-left px-3 py-2 rounded text-xs tracking-wide transition-colors ${active ? "bg-foreground text-background font-medium" : "text-muted-foreground hover:bg-white/5 hover:text-white"}`}
                    >
                       {tag}
                    </button>
                  )
                })}
             </div>
          </div>
       </aside>

       {/* Project Feed */}
       <div className="flex-1 w-full flex flex-col gap-6" style={{ perspective: "1500px" }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
               <ProjectCard 
                 key={project.id} 
                 project={project} 
                 onTagClick={toggleTag} 
                 isSelected={isSelected} 
               />
            ))
          ) : (
            <div className="w-full py-24 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl bg-black/20">
               <div className="text-[10px] font-mono tracking-widest uppercase text-white/30 mb-2">OUTPUT = null</div>
               <p className="text-muted-foreground text-sm">No systems match the current query parameters.</p>
               <button 
                 onClick={() => { setSearchQuery(""); setSelectedTags([]); }}
                 className="mt-6 px-4 py-2 border border-white/10 rounded text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
               >
                 Abridge Query
               </button>
            </div>
          )}
       </div>
    </div>
  )
}
