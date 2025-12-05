import type React from "react"
import ServiceCard from "./service-card"
import { Code2, Cpu, Cloud, Database, Smartphone, Zap } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Code2 size={24} />,
    title: "Backend Development",
    description:
      "I build clean and fast backend systems using Node.js, TypeScript and PostgreSQL. I focus on writing code that is simple, scalable and easy to maintain. If you need stable APIs or backend logic, I can handle it.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Frontend Development",
    description:
      "I create smooth and simple UI using Next.js and React. I like making interfaces that feel natural and easy to use, without too much fancy stuff. My focus is always on user experience and performance.",
  },
  {
    icon: <Cloud size={24} />,
    title: "DevOps & Deployment",
    description:
      "Working with Linux servers, containers and deployments is something I enjoy. I can set up basic CI/CD, server configs, and help you run your app in a stable way. Not a DevOps expert, but I understand the workflow.",
  },
  {
    icon: <Database size={24} />,
    title: "System Architecture",
    description:
      "I understand how different parts of an app connect — databases, APIs, caching, networking and more. I try to design systems that don’t break easily and are simple to scale later.",
  },
  {
    icon: <Zap size={24} />,
    title: "API Development",
    description:
      "I build REST APIs using Node.js, TypeScript and PostgreSQL. Clean structure, proper error handling and good performance. If you need an API for your product, I can make it happen.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Basic Linux & Networking Setup",
    description:
      "I like working with Linux, servers and networking. I can help with server setup, SSH configs, hosting, DNS, firewalls, and small infra tasks that keep your project running smoothly.",
  },
]


export default function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-xs font-semibold tracking-widest mb-16 text-muted-foreground">HERE'S HOW I CAN HELP YOU</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
