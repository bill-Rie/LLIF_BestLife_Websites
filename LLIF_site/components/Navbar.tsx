'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// Nav data
// ─────────────────────────────────────────────────────────────────────────────

type DropdownItem = {
  label: string
  href: string
  external?: boolean
  note?: string        // small descriptive line shown under label in dropdown
  divider?: boolean    // render a separator before this item
}

type NavItem = {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Mission',     href: '/about/mission',    note: 'Why LLIF exists' },
      { label: 'Story',       href: '/about/story',      note: 'How we got here' },
      { label: 'Team',        href: '/about/team' },
      { label: 'Financials',  href: '/about/financials', note: 'Form 990 & transparency' },
    ],
  },
  {
    // Single canonical destination — no dropdown
    label: 'Governance',
    href: '/about/governance',
  },
  {
    label: 'For People',
    href: '/about/faq',
    dropdown: [
      { label: 'Why This Matters',        href: '/about/why-governance-matters',         note: 'Why governance protects you' },
      { label: 'How Your Data Is Protected', href: '/about/how-llif-protects-data',      note: 'Structural vs. policy protection' },
      { label: 'Consent & Participation', href: '/about/how-consent-and-stewardship-work', note: 'How consent works in practice' },
      { label: 'FAQ',                     href: '/about/faq',                            note: 'Common questions, plain answers' },
      { label: 'Best Life App',           href: 'https://bestlife.app', external: true,  note: 'The app for individuals', divider: true },
    ],
  },
  {
    label: 'For Researchers',
    href: '/researchers',
    dropdown: [
      { label: 'Research Overview',      href: '/researchers',                        note: 'How LLIF supports research' },
      { label: 'Governed Data & Research', href: '/about/governed-data-and-research', note: 'Ethical data for longitudinal study' },
      { label: 'Grant Support',          href: '/researchers/grant-support' },
      { label: 'Use Cases',              href: '/researchers/use-cases' },
      { label: 'Case Studies',           href: '/researchers/case-studies' },
      { label: 'Partnership',            href: '/researchers/partnership' },
    ],
  },
  {
    label: 'For Builders',
    href: '/developers',
    dropdown: [
      { label: 'Developer Overview',  href: '/developers',              note: 'Build on governed infrastructure' },
      { label: 'API Reference',       href: '/developers/api' },
      { label: 'SDKs',                href: '/developers/sdks' },
      { label: 'Documentation',       href: '/developers/documentation' },
      { label: 'OpenLife Platform',   href: '/platform', note: 'Infrastructure & integrations', divider: true },
      { label: 'Programs',            href: '/programs' },
    ],
  },
  {
    label: 'News',
    href: '/news',
    dropdown: [
      { label: 'Releases',   href: '/news/releases' },
      { label: 'Blog',       href: '/news/blog' },
      { label: 'Highlights', href: '/news/highlights' },
      { label: 'Research',   href: '/news/research' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    // Governance: exact match so /about doesn't also highlight it
    if (href === '/about/governance') return pathname === '/about/governance' || pathname.startsWith('/about/governance')
    return pathname.startsWith(href)
  }

  const toggleMobileSection = (label: string) =>
    setMobileExpanded((prev) => (prev === label ? null : label))

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b border-sky/10"
        style={{ background: 'rgba(11,29,51,0.97)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-site mx-auto flex items-center justify-between px-6 h-16">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-semibold text-lg text-white tracking-tight flex-shrink-0"
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

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="nav-dropdown relative">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                      ${isActive(item.href)
                        ? 'text-gold'
                        : 'text-white/75 hover:text-white hover:bg-white/[0.07]'}`}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className="nav-dropdown-menu absolute top-full left-0 min-w-[260px] rounded-xl p-1.5 mt-1.5
                                border border-sky/15 shadow-[0_16px_48px_rgba(0,0,0,0.35)]
                                opacity-0 invisible translate-y-1 transition-all duration-200"
                    style={{ background: '#0f2540' }}
                  >
                    {item.dropdown.map((sub) => (
                      <div key={sub.label}>
                        {sub.divider && (
                          <div className="my-1 border-t border-white/[0.07]" />
                        )}
                        {sub.external ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 px-3.5 py-2.5 rounded-md
                                       hover:bg-white/[0.07] transition-all duration-150 group"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] text-white/75 group-hover:text-white transition-colors">
                                  {sub.label}
                                </span>
                                <svg className="w-3 h-3 text-white/35 group-hover:text-white/60 flex-shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                  <path d="M2.5 9.5l7-7M5 2.5h4.5V7" />
                                </svg>
                              </div>
                              {sub.note && (
                                <p className="text-[11px] text-white/35 mt-0.5 leading-snug">{sub.note}</p>
                              )}
                            </div>
                          </a>
                        ) : (
                          <Link
                            href={sub.href}
                            className="flex items-start px-3.5 py-2.5 rounded-md
                                       hover:bg-white/[0.07] transition-all duration-150 group"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] text-white/75 group-hover:text-white transition-colors leading-snug">
                                {sub.label}
                              </p>
                              {sub.note && (
                                <p className="text-[11px] text-white/35 mt-0.5 leading-snug">{sub.note}</p>
                              )}
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Direct link (Governance)
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${isActive(item.href)
                      ? 'text-gold'
                      : 'text-white/75 hover:text-white hover:bg-white/[0.07]'}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* ── Desktop CTA + Mobile hamburger ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:block px-[18px] py-2 rounded-md text-[13px] font-semibold
                         bg-gold text-navy transition-all duration-200
                         hover:bg-gold-light hover:-translate-y-px"
            >
              Get Involved
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]
                         rounded-md hover:bg-white/[0.08] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block w-5 h-px bg-white/80 transition-all duration-200
                ${mobileOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block w-5 h-px bg-white/80 transition-all duration-200
                ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-white/80 transition-all duration-200
                ${mobileOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile nav panel ── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 overflow-y-auto"
          style={{ background: 'rgba(11,29,51,0.99)', backdropFilter: 'blur(12px)' }}
        >
          <div className="px-5 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    {/* Section toggle */}
                    <button
                      onClick={() => toggleMobileSection(item.label)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-lg
                                 text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.06]
                                 transition-all duration-150"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 text-white/40 transition-transform duration-200
                          ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                        viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75"
                        strokeLinecap="round"
                      >
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </button>

                    {/* Sub-items */}
                    {mobileExpanded === item.label && (
                      <div className="ml-3 mt-0.5 mb-1 pl-3 border-l border-white/[0.08] flex flex-col gap-0.5">
                        {item.dropdown.map((sub) => (
                          <div key={sub.label}>
                            {sub.divider && <div className="my-1 border-t border-white/[0.06]" />}
                            {sub.external ? (
                              <a
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-1.5 px-3 py-2.5 rounded-md
                                           text-[13px] text-white/65 hover:text-white
                                           hover:bg-white/[0.06] transition-all duration-150"
                              >
                                {sub.label}
                                <svg className="w-3 h-3 text-white/30 flex-shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                  <path d="M2.5 9.5l7-7M5 2.5h4.5V7" />
                                </svg>
                              </a>
                            ) : (
                              <Link
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2.5 rounded-md text-[13px] text-white/65
                                           hover:text-white hover:bg-white/[0.06] transition-all duration-150"
                              >
                                {sub.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Direct link (Governance)
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-sm font-medium transition-all duration-150
                      ${isActive(item.href)
                        ? 'text-gold bg-white/[0.04]'
                        : 'text-white/80 hover:text-white hover:bg-white/[0.06]'}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-white/[0.08]">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3 rounded-lg text-[14px] font-semibold
                           bg-gold text-navy hover:bg-gold-light transition-colors duration-200"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
