import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type NewsCategory =
  | 'Releases'
  | 'Blog'
  | 'Company Highlights'
  | 'Research Updates'
  | 'Governance'

export interface PostMeta {
  title: string
  slug: string
  date: string        // YYYY-MM-DD
  categories: NewsCategory[]
  excerpt: string
  featured?: boolean
  hero_image?: string
}

export interface Post extends PostMeta {
  contentHtml: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'news')

function readMeta(filename: string): PostMeta {
  const fullPath = path.join(POSTS_DIR, filename)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(raw)
  return {
    title:      data.title,
    slug:       data.slug,
    date:       data.date,
    categories: data.categories ?? [],
    excerpt:    data.excerpt,
    featured:   data.featured ?? false,
    hero_image: data.hero_image,
  }
}

/** Returns all posts sorted newest-first. */
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))
  return files
    .map(readMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** Returns all slugs (for generateStaticParams). */
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf8')
      return matter(raw).data.slug as string
    })
}

/** Returns a single post with rendered HTML content. */
export async function getPost(slug: string): Promise<Post | null> {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))
  for (const filename of files) {
    const fullPath = path.join(POSTS_DIR, filename)
    const raw = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(raw)
    if (data.slug === slug) {
      const processed = await remark().use(html).process(content)
      return {
        title:       data.title,
        slug:        data.slug,
        date:        data.date,
        categories:  data.categories ?? [],
        excerpt:     data.excerpt,
        featured:    data.featured ?? false,
        hero_image:  data.hero_image,
        contentHtml: processed.toString(),
      }
    }
  }
  return null
}

/** Returns up to 3 related posts (same first category, different slug). */
export function getRelatedPosts(currentSlug: string, categories: NewsCategory[]): PostMeta[] {
  const all = getAllPosts()
  return all
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.categories.some((c) => categories.includes(c)),
    )
    .slice(0, 3)
}

/** Format a YYYY-MM-DD date string for display. */
export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
