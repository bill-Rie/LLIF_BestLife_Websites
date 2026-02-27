'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { PostMeta, NewsCategory } from '@/lib/news'

const ALL_CATEGORIES: NewsCategory[] = [
  'Releases',
  'Blog',
  'Company Highlights',
  'Research Updates',
  'Governance',
]

const CATEGORY_COLORS: Record<NewsCategory, string> = {
  'Releases':          'bg-sky/15 text-slate border-sky/30',
  'Blog':              'bg-gray-100 text-gray-600 border-gray-200',
  'Company Highlights':'bg-gold-pale text-gold border-gold/30',
  'Research Updates':  'bg-green-light text-green border-green/30',
  'Governance':        'bg-navy/[0.07] text-navy border-navy/15',
}

function CategoryBadge({ category }: { category: NewsCategory }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold
                  uppercase tracking-[0.06em] border ${CATEGORY_COLORS[category]}`}
    >
      {category}
    </span>
  )
}

function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group flex flex-col bg-white rounded-[14px] border border-gray-200
                        hover:border-sky/40 hover:shadow-[0_4px_24px_rgba(137,176,211,0.14)]
                        transition-all duration-200 overflow-hidden">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.categories.map((c) => (
            <CategoryBadge key={c} category={c} />
          ))}
        </div>

        <h2 className="font-display font-medium text-navy text-[18px] leading-[1.35] mb-2
                       group-hover:text-slate transition-colors duration-150"
            style={{ letterSpacing: '-0.01em' }}>
          {post.title}
        </h2>

        <p className="text-[13px] text-gray-500 mb-3 flex-1 leading-[1.65]">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <time className="text-[12px] text-gray-400 font-medium" dateTime={post.date}>
            {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </time>
          <Link
            href={`/news/${post.slug}`}
            className="text-[13px] font-semibold text-slate hover:text-navy transition-colors duration-150"
            aria-label={`Read full article: ${post.title}`}
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  )
}

interface Props {
  posts: PostMeta[]
}

export default function NewsFilter({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | null>(null)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let result = posts
    if (activeCategory) {
      result = result.filter((p) => p.categories.includes(activeCategory))
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q),
      )
    }
    return result
  }, [posts, activeCategory, query])

  return (
    <div>
      {/* ── Search + Filters ── */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-[380px]">
          <label htmlFor="news-search" className="sr-only">Search news</label>
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="news-search"
            type="search"
            placeholder="Search news…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-[14px]
                       text-gray-800 placeholder-gray-400 bg-white
                       focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky/50
                       transition-all duration-150"
          />
        </div>

        <div
          role="group"
          aria-label="Filter news by category"
          className="flex flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
            className={`px-3.5 py-2 rounded-lg text-[13px] font-medium border transition-all duration-150
              ${activeCategory === null
                ? 'bg-navy text-white border-navy'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800'}`}
          >
            All
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              aria-pressed={activeCategory === cat}
              className={`px-3.5 py-2 rounded-lg text-[13px] font-medium border transition-all duration-150
                ${activeCategory === cat
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-[15px]">No posts match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
