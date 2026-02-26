import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For Researchers',
  description:
    'LLIF provides ethical, consent-driven data infrastructure for longitudinal health research — with participants collecting data through apps they already use.',
}

const features = [
  {
    bg: 'gold-bg', iconPath: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    title: 'Consent-First Architecture',
    desc: 'Participants opt in. They see exactly what data is collected and why. IRB-compatible consent built into the infrastructure.',
  },
  {
    bg: 'navy-bg',
    iconPath: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>,
    title: 'Compliance-Driven Collection',
    desc: 'Define data requirements, schedules, and targets. The platform tracks compliance automatically — including historical data prerequisites.',
  },
  {
    bg: 'gold-bg',
    iconPath: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    title: 'Nonprofit-Protected Data',
    desc: 'Data classified as a donor-restricted asset. No resale, no secondary exploitation — with bankruptcy protections. Trust by structure, not by policy.',
  },
  {
    bg: 'navy-bg', iconPath: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
    title: 'Built-In Analytics',
    desc: 'Correlations, trends, calendar patterns, predictions, and community-level anonymous insights. Or export raw data for your own analysis.',
  },
  {
    bg: 'gold-bg',
    iconPath: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    title: 'Environmental Enrichment',
    desc: '25+ weather, AQI, and pollen metrics attached automatically. The environmental context that makes population health studies actionable.',
  },
  {
    bg: 'navy-bg',
    iconPath: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
    title: 'Outlives Your Funding',
    desc: "Nonprofit infrastructure doesn't depend on your grant cycle. Participant data remains available for follow-up with renewed consent.",
  },
]

export default function ResearchersPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      {/* .page-header { padding: 100px 24px 60px } */}
      <div className="page-header-bg pt-[100px] pb-[60px] px-6">
        <div className="max-w-site mx-auto relative z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-5">For Researchers</div>
          <h1 className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            Design Your Study as a Program
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            LLIF provides ethical, consent-driven data infrastructure for longitudinal health research — with participants
            collecting data through apps they already use.
          </p>
        </div>
      </div>

      {/* ── WHY LLIF FOR RESEARCH ── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Why LLIF for Research</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Studies as Programs. Data with Consent. Infrastructure That Outlives Your Grant.
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7] font-light max-w-[640px]">
            Your study becomes a Program — with defined data requirements, collection compliance, participant onboarding, and insight
            outputs. Participants subscribe through apps and collect data on their terms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {features.map((f) => (
              <div key={f.title}
                   className="bg-white rounded-[14px] border border-gray-200 p-8
                              transition-all duration-200 hover:border-gold hover:shadow-[0_8px_32px_rgba(212,168,83,0.08)] hover:-translate-y-0.5">
                <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center mb-4
                                ${f.bg === 'navy-bg' ? 'bg-navy/[0.06] text-slate' : 'bg-gold/12 text-gold'}`}>
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    {f.iconPath}
                  </svg>
                </div>
                <h4 className="font-display text-[17px] font-semibold mb-2">{f.title}</h4>
                <p className="text-[14px] leading-[1.65] text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRANT SUPPORT ── */}
      <section className="py-20 px-6 text-center" style={{ background: '#FDF5E6' }}>
        <div className="max-w-[700px] mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#B8902A' }}>
            Grant Proposal Support
          </div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Include LLIF in Your Grant Proposal
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7] mb-8">
            Budget templates, boilerplate language for data management plans, and letters of support — for NIH, NSF, PCORI,
            and foundation proposals.
          </p>
          <Link href="/grants"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                           transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
            Grant Resources &amp; Letter of Support →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner-bg py-20 px-6 text-center">
        <div className="relative z-10 max-w-site mx-auto">
          <h2 className="font-display font-medium text-white mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
            Ready to design your study?
          </h2>
          <p className="text-[16px] text-sky-light mb-8 font-light">
            Research program creation opens Q3 2026. Get in early to shape the platform for your needs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                             transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
              Become an Early Partner
            </Link>
            <Link href="/grants"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold text-white
                             transition-all duration-200 hover:bg-white/[0.14] hover:border-white/30"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Grant Support →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
