import Link from 'next/link'

// ─────────────────────────────────────────────────────────────────────────────
// Footer link columns
// ─────────────────────────────────────────────────────────────────────────────

const footerColumns = [
  {
    heading: 'Foundation',
    links: [
      { label: 'Mission',           href: '/about/mission' },
      { label: 'Story',             href: '/about/story' },
      { label: 'Governance',        href: '/about/governance' },   // canonical — one destination
      { label: 'Financials',        href: '/about/financials' },
      { label: 'FAQ',               href: '/about/faq' },
      { label: 'News',              href: '/news' },
    ],
  },
  {
    heading: 'For People',
    links: [
      { label: 'Why This Matters',          href: '/about/why-governance-matters' },
      { label: 'How Your Data Is Protected', href: '/about/how-llif-protects-data' },
      { label: 'Consent & Participation',   href: '/about/how-consent-and-stewardship-work' },
      { label: 'Best Life App',             href: 'https://bestlife.app', external: true },
    ],
  },
  {
    heading: 'For Researchers',
    links: [
      { label: 'Research Overview',        href: '/researchers' },
      { label: 'Governed Data & Research', href: '/about/governed-data-and-research' },
      { label: 'Grant Support',            href: '/researchers/grant-support' },
      { label: 'Use Cases',                href: '/researchers/use-cases' },
      { label: 'Partnership',              href: '/researchers/partnership' },
    ],
  },
  {
    heading: 'For Builders',
    links: [
      { label: 'Developer Docs',    href: '/developers' },
      { label: 'API Reference',     href: '/developers/api' },
      { label: 'OpenLife Platform', href: '/platform' },
      { label: 'Programs',          href: '/programs' },
      { label: 'Become a Partner',  href: '/contact' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-sky/10 pt-16 pb-8">
      <div className="max-w-site mx-auto px-6">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-semibold text-lg text-white"
              style={{ letterSpacing: '-0.02em' }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-navy"
                style={{ background: 'linear-gradient(135deg, #D4A853, #E8C97A)' }}
              >
                LF
              </span>
              LLIF
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-[240px] mt-4">
              Live Learn Innovate Foundation
            </p>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-[240px] mt-1">
              A 501(c)(3) nonprofit foundation for privacy, governance, and data stewardship.
            </p>

            {/* Trust signals */}
            <div className="mt-6 flex flex-col gap-2">
              {[
                '501(c)(3) Nonprofit',
                'Candid Platinum 2026',
                'No data resale — ever',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
                  <span className="text-[12px] text-gray-500">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(({ heading, links }) => (
            <div key={heading}>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-4">
                {heading}
              </h5>
              <div className="flex flex-col gap-0.5">
                {links.map(({ label, href, external }) =>
                  external ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[13px] text-white/55 py-1
                                 hover:text-white transition-colors duration-150 group"
                    >
                      {label}
                      <svg
                        className="w-3 h-3 text-white/25 group-hover:text-white/50 flex-shrink-0"
                        viewBox="0 0 12 12" fill="none" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round"
                      >
                        <path d="M2.5 9.5l7-7M5 2.5h4.5V7" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      key={label}
                      href={href}
                      className="text-[13px] text-white/55 py-1 hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-wrap justify-between items-center gap-3">
          <span className="text-[12px] text-gray-500">
            © 2026 Live Learn Innovate Foundation. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-[12px] text-gray-500 hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <span className="text-gray-700">·</span>
            <span className="text-[12px] text-gray-500">Privacy Policy · Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
