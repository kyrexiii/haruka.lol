import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import ProjectShowcase from "@/components/project-showcase"
import Experience from "@/components/experience"
import GitHubContributions from "@/components/github-contributions"
import GetInTouch from "@/components/get-in-touch"
import Footer from "@/components/footer"

export default function Home() {
  return (
<main className="min-h-screen bg-background text-foreground">
  <Hero />
  <About />

  <Services />
  <GitHubContributions />
  <Experience />
  <GetInTouch />
  <Footer />
</main>

  )
}
