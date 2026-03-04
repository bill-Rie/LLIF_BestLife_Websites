import type { MetadataRoute } from 'next'

const BASE_URL = 'https://llif.org'

const staticRoutes = [
  '/',
  '/platform',
  '/platform/overview',
  '/platform/infrastructure',
  '/platform/privacy-governance',
  '/platform/security-compliance',
  '/platform/integrations',
  '/researchers',
  '/researchers/overview',
  '/researchers/grant-support',
  '/researchers/use-cases',
  '/researchers/case-studies',
  '/researchers/documentation',
  '/researchers/partnership',
  '/developers',
  '/developers/api',
  '/developers/sdks',
  '/developers/documentation',
  '/developers/integrations',
  '/community',
  '/community/best-life',
  '/community/use-cases',
  '/community/programs',
  '/community/forum',
  '/news',
  '/news/releases',
  '/news/blog',
  '/news/highlights',
  '/news/research',
  '/about',
  '/about/mission',
  '/about/story',
  '/about/team',
  '/about/governance',
  '/about/financials',
  '/contact',
  '/programs',
  '/grants',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
  }))
}
