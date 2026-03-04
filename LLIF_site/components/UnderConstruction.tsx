import Link from 'next/link'

interface Props {
  title: string
  section?: string
}

export default function UnderConstruction({ title, section }: Props) {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header-bg pt-[100px] pb-[60px] px-6">
        <div className="max-w-site mx-auto relative z-10">
          {section && (
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">
              {section}
            </div>
          )}
          <h1
            className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            {title}
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            This page is part of our new site map and content is being added.
          </p>
        </div>
      </div>

      {/* UNDER CONSTRUCTION BODY */}
      <section className="py-24 px-6">
        <div className="max-w-[560px] mx-auto text-center">
          {/* Construction icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl"
            style={{ background: 'linear-gradient(135deg, #D4A853, #E8C97A)' }}
          >
            🚧
          </div>

          <h2
            className="font-display font-medium text-navy mb-3"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)', letterSpacing: '-0.02em' }}
          >
            Under Construction
          </h2>
          <p className="text-[15px] text-gray-500 leading-[1.8] mb-8">
            We&apos;re actively building out this section of the site. Check back soon or{' '}
            <Link href="/contact" className="text-navy underline underline-offset-2 hover:text-gold transition-colors">
              get in touch
            </Link>{' '}
            if you need information now.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-semibold text-white
                       transition-all duration-200 hover:-translate-y-px"
            style={{ background: '#0B1D33' }}
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
