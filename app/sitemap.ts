import { MetadataRoute } from 'next'
import { projects } from '@/lib/projects-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haruka.lol'

  const staticRoutes = [
    '',
    '/about',
    '/work',
    '/projects',
    '/contact',
    '/notes'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
