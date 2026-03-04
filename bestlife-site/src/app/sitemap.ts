import type { MetadataRoute } from 'next'

const BASE_URL = 'https://bestlife.app'

const staticRoutes = [
  '/',
  '/what-is-best-life',
  '/use-cases',
  '/programs',
  '/how-it-works',
  '/download',
  '/news',
  '/news/releases',
  '/news/blog',
  '/news/highlights',
  '/about',
  '/privacy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
  }))
}
