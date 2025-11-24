"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { Search, ExternalLink, Github } from 'lucide-react'
import Footer from "@/components/footer"
import { projects, getAllTags } from "@/lib/projects-data"

const allTags = getAllTags()

export default function ProjectsPage() {
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

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="border-b border-border px-6 py-16 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm mb-8 inline-block">
                        ← Back to Portfolio
                    </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A collection of projects I've built showcasing my expertise in full-stack development,
            cloud architecture, and scalable systems.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="border-b border-border px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">Filter by technology</p>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-border"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {filteredProjects.length > 0 ? (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group border border-border rounded-lg p-6 hover:bg-secondary/50 transition-colors"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {project.status === "in-progress" && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                          In Progress
                        </span>
                      )}
                      {project.status === "archived" && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                          Archived
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 bg-secondary text-muted-foreground text-xs rounded font-medium cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found matching your criteria. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
