import type React from "react"
interface ServiceCardProps {
  service: {
    icon: React.ReactNode
    title: string
    description: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="space-y-4">
      <div className="text-foreground">{service.icon}</div>
      <h3 className="text-xs font-semibold tracking-widest text-foreground">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  )
}
