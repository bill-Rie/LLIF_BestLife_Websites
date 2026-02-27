import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getAllSlugs,
  getPost,
  getRelatedPosts,
  formatDate,
  type NewsCategory,
} from '@/lib/news'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | LLIF News`,
    description: post.excerpt,
  }
}

const CATEGORY_COLORS: Record<NewsCategory, string> = {
  'Releases':          'bg-sky/15 text-slate border-sky/30',
  'Blog':              'bg-gray-100 text-gray-600 border-gray-200',
  'Company Highlights':'bg-gold-pale text-gold border-gold/30',
  'Research Updates':  'bg-green-light text-green border-green/30',
  'Governance':        'bg-navy/[0.07] text-navy border-navy/15',
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, post.categories)

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header-bg pt-[100px] pb-[60px] px-6">
        <div className="max-w-[780px] mx-auto relative z-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-[13px] text-sky/80
                       hover:text-white transition-colors duration-150 mb-6"
          >
            ← Back to News
          </Link>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.categories.map((c) => (
              <span
                key={c}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px]
                            font-semibold uppercase tracking-[0.06em] border ${CATEGORY_COLORS[c]}`}
              >
                {c}
              </span>
            ))}
          </div>

          <h1
            className="font-display font-medium text-white mb-4 leading-[1.2]"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>

          <time className="text-[14px] text-sky/70 font-medium" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <article className="py-16 px-6">
        <div className="max-w-[780px] mx-auto">
          <div
            className="prose-llif"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-cream border-t border-gray-200" aria-label="Related posts">
          <div className="max-w-site mx-auto">
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-8">
              Related
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}`}
                  className="group flex flex-col bg-white rounded-[14px] border border-gray-200 p-6
                             hover:border-sky/40 hover:shadow-[0_4px_24px_rgba(137,176,211,0.14)]
                             transition-all duration-200"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {rel.categories.map((c) => (
                      <span
                        key={c}
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px]
                                    font-semibold uppercase tracking-[0.06em] border ${CATEGORY_COLORS[c]}`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="font-display font-medium text-navy text-[16px] leading-[1.4] mb-2
                               group-hover:text-slate transition-colors duration-150"
                  >
                    {rel.title}
                  </h3>
                  <time className="text-[12px] text-gray-400 mt-auto pt-3" dateTime={rel.date}>
                    {formatDate(rel.date)}
                  </time>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BACK LINK ── */}
      <div className="py-10 px-6 text-center border-t border-gray-100">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-[13px] font-semibold
                     text-navy border-2 border-navy transition-all duration-200
                     hover:bg-navy hover:text-white"
        >
          ← Back to All News
        </Link>
      </div>
    </>
  )
}
