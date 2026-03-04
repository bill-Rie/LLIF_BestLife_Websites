'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Platform',
    href: '/platform',
    dropdown: [
      { label: 'Overview', href: '/platform/overview' },
      { label: 'Infrastructure', href: '/platform/infrastructure' },
      { label: 'Privacy & Governance', href: '/platform/privacy-governance' },
      { label: 'Security & Compliance', href: '/platform/security-compliance' },
      { label: 'Integrations', href: '/platform/integrations' },
    ],
  },
  {
    label: 'Researchers',
    href: '/researchers',
    dropdown: [
      { label: 'Overview', href: '/researchers/overview' },
      { label: 'Grant Support', href: '/researchers/grant-support' },
      { label: 'Use Cases', href: '/researchers/use-cases' },
      { label: 'Case Studies', href: '/researchers/case-studies' },
      { label: 'Documentation', href: '/researchers/documentation' },
      { label: 'Partnership', href: '/researchers/partnership' },
    ],
  },
  {
    label: 'Developers',
    href: '/developers',
    dropdown: [
      { label: 'API Reference', href: '/developers/api' },
      { label: 'SDKs', href: '/developers/sdks' },
      { label: 'Documentation', href: '/developers/documentation' },
      { label: 'Integrations', href: '/developers/integrations' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    dropdown: [
      { label: 'Best Life', href: '/community/best-life' },
      { label: 'Use Cases', href: '/community/use-cases' },
      { label: 'Programs', href: '/community/programs' },
      { label: 'Forum', href: '/community/forum' },
    ],
  },
  {
    label: 'News',
    href: '/news',
    dropdown: [
      { label: 'Releases', href: '/news/releases' },
      { label: 'Blog', href: '/news/blog' },
      { label: 'Highlights', href: '/news/highlights' },
      { label: 'Research', href: '/news/research' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Mission', href: '/about/mission' },
      { label: 'Story', href: '/about/story' },
      { label: 'Team', href: '/about/team' },
      { label: 'Governance', href: '/about/governance' },
      { label: 'Financials', href: '/about/financials' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-sky/10"
         style={{ background: 'rgba(11,29,51,0.97)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-site mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg text-white tracking-tight"
              style={{ letterSpacing: '-0.02em' }}>
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-navy"
                style={{ background: 'linear-gradient(135deg, #D4A853, #E8C97A)' }}>
            LF
          </span>
          LLIF
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="nav-dropdown relative">
                <Link
                  href={item.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${isActive(item.href)
                      ? 'text-gold'
                      : 'text-white/75 hover:text-white hover:bg-white/[0.08]'}`}
                >
                  {item.label}
                </Link>
                <div
                  className="nav-dropdown-menu absolute top-full left-0 min-w-[240px] rounded-xl p-1.5 mt-1
                              border border-sky/15 shadow-[0_16px_48px_rgba(0,0,0,0.3)]
                              opacity-0 invisible translate-y-1 transition-all duration-200"
                  style={{ background: '#132B4A' }}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-3.5 py-2.5 rounded-md text-[13px] text-white/70
                                 hover:text-white hover:bg-white/[0.08] transition-all duration-150"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${isActive(item.href)
                    ? 'text-gold'
                    : 'text-white/75 hover:text-white hover:bg-white/[0.08]'}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:block px-[18px] py-2 rounded-md text-[13px] font-semibold
                     bg-gold text-navy transition-all duration-200
                     hover:bg-gold-light hover:-translate-y-px ml-2"
        >
          Get Involved
        </Link>
      </div>
    </nav>
  )
}
