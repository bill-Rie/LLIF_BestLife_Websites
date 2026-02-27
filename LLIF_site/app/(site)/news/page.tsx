import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, formatDate, type NewsCategory } from '@/lib/news'
import NewsFilter from './NewsFilter'

export const metadata: Metadata = {
  title: 'News | LLIF',
  description:
    'Updates, releases, and research infrastructure highlights from LLIF — built in Raleigh, NC.',
}

const CATEGORY_COLORS: Record<NewsCategory, string> = {
  'Releases':          'bg-sky/15 text-slate border-sky/30',
  'Blog':              'bg-gray-100 text-gray-600 border-gray-200',
  'Company Highlights':'bg-gold-pale text-gold border-gold/30',
  'Research Updates':  'bg-green-light text-green border-green/30',
  'Governance':        'bg-navy/[0.07] text-navy border-navy/15',
}

export default function NewsPage() {
  const posts = getAllPosts()
  const featured = posts.filter((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header-bg pt-[100px] pb-[60px] px-6">
        <div className="max-w-site mx-auto relative z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">
            News
          </div>
          <h1
            className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            Infrastructure Updates
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            Releases, research highlights, and governance updates from LLIF — a nonprofit
            data infrastructure built in Raleigh, NC.
          </p>
        </div>
      </div>

      {/* ── FEATURED POST ── */}
      {featured.length > 0 && (
        <section className="py-14 px-6 bg-cream border-b border-gray-200" aria-label="Featured post">
          <div className="max-w-site mx-auto">
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-6">
              Featured
            </div>
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex flex-col md:flex-row gap-8 rounded-[16px] border border-gray-200
                           bg-white hover:border-sky/40 hover:shadow-[0_6px_32px_rgba(137,176,211,0.15)]
                           transition-all duration-200 p-8"
              >
                <div className="flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.categories.map((c) => (
                      <span
                        key={c}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px]
                                    font-semibold uppercase tracking-[0.06em] border
                                    ${CATEGORY_COLORS[c]}`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="font-display font-medium text-navy text-[24px] leading-[1.3] mb-3
                               group-hover:text-slate transition-colors duration-150"
                    style={{ letterSpacing: '-0.015em' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[15px] text-gray-600 leading-[1.7] mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <time className="text-[13px] text-gray-400 font-medium" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <span className="text-[13px] font-semibold text-slate group-hover:text-navy
                                     transition-colors duration-150">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── ALL POSTS (filterable) ── */}
      <section className="py-16 px-6" aria-label="All news posts">
        <div className="max-w-site mx-auto">
          {featured.length > 0 && (
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-8">
              All Posts
            </div>
          )}
          <NewsFilter posts={rest.length > 0 ? rest : posts} />
        </div>
      </section>

      {/* ── PRIVACY CALLOUT ── */}
      <section className="px-6 pb-20" aria-label="Privacy and stewardship">
        <div className="max-w-site mx-auto">
          <div
            className="rounded-[14px] border border-sky/20 px-8 py-6 flex flex-col sm:flex-row
                        items-start sm:items-center gap-4"
            style={{ background: 'rgba(137,176,211,0.06)' }}
          >
            <svg
              className="w-6 h-6 text-sky flex-shrink-0 mt-0.5 sm:mt-0"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p className="text-[14px] text-gray-600 leading-[1.7]">
              <strong className="text-navy font-semibold">Privacy &amp; Stewardship — </strong>
              LLIF is a nonprofit, privacy-first data infrastructure. We do not sell user data.
              Individuals control and export their data at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
