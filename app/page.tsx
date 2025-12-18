import Hero from "@/components/sections/hero"
import Work from "@/components/sections/work"
import Skills from "@/components/sections/skills"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import Diagnostics from "@/components/sections/diagnostics"
import TraceLogs from "@/components/sections/trace-logs"
import WorkQueue from "@/components/sections/work-queue"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 selection:bg-foreground selection:text-background">
      <div className="max-w-[1200px] ml-[5%] md:ml-[10%] grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content Column */}
        <div className="space-y-24 max-w-[800px]">
          <Hero />
          <Work />
          <Skills />
          <Experience />
          <Contact />

          <section className="mb-16 text-muted-foreground/50 text-xs">
            <div className="font-bold mb-1">[DOCS]</div>
            <div className="flex gap-4">
              <Link href="/work" className="hover:text-foreground transition-colors">/work</Link>
              <span>·</span>
              <Link href="/about" className="hover:text-foreground transition-colors">/about</Link>
            </div>
          </section>

          {/* Bottom Sections (Appended to main flow) */}
          <div className="space-y-12">
            <WorkQueue />
          </div>
        </div>

        {/* Right Sticky Column */}
        <div className="relative">
          <Diagnostics />
        </div>
      </div>
    </main>
  )
}
