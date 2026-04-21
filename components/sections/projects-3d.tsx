"use client"

import Link from "next/link"
import React, { useState } from "react"
import { projects } from "@/lib/projects-data"
import ProjectCard from "@/components/projects/project-card"
import { ArrowRight } from "lucide-react"

export default function Projects3D() {
  // If you only have 1 or 2, this will just take what exists
  const featuredProjects = projects.slice(0, 2)
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)

  const isSelected = (tag: string) => hoveredTag === tag

  // Check if we have enough projects to justify an "Archive" page
  const hasArchive = projects.length > 2

  return (
    <section className="w-full py-24 md:py-32 flex flex-col items-center justify-center relative">
      <div className="w-full flex justify-between items-end mb-16 border-b border-foreground/5 pb-4">
        <div>
          <div className="text-[10px] font-mono tracking-widest uppercase mb-2 text-muted-foreground">
            [ 02_CURRENT_FOCUS ]
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Latest Build.
          </h2>
        </div>

        {/* Only show the Archive link if you actually have more than 2 projects */}
        {hasArchive && (
          <Link href="/projects" className="group hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            View Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      <div className="relative w-full flex flex-col gap-12 md:gap-24" style={{ perspective: "1500px" }}>
        {featuredProjects.map((project, idx) => (
          <div
            key={project.id}
            // If there's only 1 project, center it or make it span full width beautifully
            className={`w-full shadow-2xl md:w-[85%] ${
              featuredProjects.length === 1 ? 'mx-auto' : idx % 2 === 1 ? 'md:self-end' : 'md:self-start'
            }`}
          >
            <ProjectCard
              project={project}
              onTagClick={setHoveredTag}
              isSelected={isSelected}
            />
          </div>
        ))}
      </div>

      {/* Mobile Archive Button - also conditionally rendered */}
      {hasArchive && (
        <div className="w-full mt-16 md:hidden flex justify-center">
          <Link href="/projects" className="px-6 py-3 border border-foreground/10 rounded-full text-xs font-mono uppercase tracking-widest text-foreground hover:bg-foreground/5 transition-colors">
            View Archive
          </Link>
        </div>
      )}
    </section>
  )
}