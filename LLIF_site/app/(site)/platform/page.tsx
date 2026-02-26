import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'LLIF Cloud is a nonprofit-governed, privacy-first data platform purpose-built for longitudinal health, lifestyle, and environmental data.',
}

/* ── SVG Icons ── */
function IconDB() {
  return <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
}
function IconLayers() {
  return <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
}
function IconPulse() {
  return <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
}
function IconGlobe() {
  return <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
}
function IconShield() {
  return <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
}
function IconLock() {
  return <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
}

const features = [
  { icon: <IconDB />, bg: 'navy-bg', title: '102 API Endpoints', desc: 'RESTful API covering event management, analytics, nutrition, environmental data, user management, sync, plans, compliance, and program administration.' },
  { icon: <IconLayers />, bg: 'gold-bg', title: '620+ Taxonomy Nodes', desc: 'Hierarchical health and lifestyle classification with 643 schemas. Standardized categories that enable cross-program and cross-study data harmonization.' },
  { icon: <IconPulse />, bg: 'navy-bg', title: 'Ingestion & Sync', desc: 'Apple Health, Google Fit, Fitbit, manual entry, barcode scanning, AI food lookup, voice input. Data from wherever participants already are.' },
  { icon: <IconGlobe />, bg: 'gold-bg', title: 'Environmental Enrichment', desc: '25+ weather, air quality, and pollen metrics automatically attached to every health event by location and time. The context that makes correlations possible.' },
  { icon: <IconShield />, bg: 'navy-bg', title: 'Insights Engine', desc: 'Cross-series correlation analysis, trend detection, calendar patterns, frequency distributions, and ML-powered predictions. The analytics that Programs deliver to participants.' },
  { icon: <IconLock />, bg: 'gold-bg', title: 'Compliance & Plans', desc: 'Conditional plans with targets, schedules, reminders, and automated compliance verification. Programs define expectations; the platform confirms them.' },
]

const compliance = [
  { title: 'Donor-Restricted Asset', status: 'Active',     statusClass: 'bg-green-light text-green',  desc: 'Participant data is legally classified as a donor-restricted asset under nonprofit governance. It cannot be sold, monetized, or repurposed — with bankruptcy protections.' },
  { title: 'IRB-Compatible Consent', status: 'Active',     statusClass: 'bg-green-light text-green',  desc: 'Participant opt-in consent architecture designed for IRB requirements. Clear data access boundaries and transparent handling.' },
  { title: 'HIPAA Alignment',        status: 'In Progress',statusClass: 'bg-gold/12 text-[#B8902A]',  desc: 'Infrastructure designed for HIPAA-adjacent workloads. Encryption at rest and in transit, access logging, audit trails.' },
  { title: 'SOC 2 Type II',          status: 'Roadmap',    statusClass: 'bg-sky/12 text-slate',       desc: 'Certification planned. Current infrastructure follows SOC 2 principles: access controls, monitoring, and incident response.' },
]

export default function PlatformPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      {/* .page-header { padding: 100px 24px 60px } */}
      <div className="page-header-bg pt-[100px] pb-[60px] px-6">
        <div className="max-w-site mx-auto relative z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-5">Platform</div>
          <h1 className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            The Infrastructure That Makes Programs Possible
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            LLIF Cloud is a nonprofit-governed, privacy-first data platform purpose-built for longitudinal health, lifestyle,
            and environmental data.
          </p>
        </div>
      </div>

      {/* ── FEATURE GRID ── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">What</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            LLIF Cloud by the Numbers
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7] font-light max-w-[640px]">
            Programs need infrastructure. Here&apos;s what powers them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {features.map((f) => (
              <div key={f.title}
                   className="bg-white rounded-[14px] border border-gray-200 p-8
                              transition-all duration-200 hover:border-gold hover:shadow-[0_8px_32px_rgba(212,168,83,0.08)] hover:-translate-y-0.5">
                <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center mb-4
                                ${f.bg === 'navy-bg' ? 'bg-navy/[0.06] text-slate' : 'bg-gold/12 text-gold'}`}>
                  {f.icon}
                </div>
                <h4 className="font-display text-[17px] font-semibold mb-2">{f.title}</h4>
                <p className="text-[14px] leading-[1.65] text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY & GOVERNANCE ── */}
      <section id="security" className="py-20 px-6 bg-cream">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Security &amp; Governance</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Nonprofit Structure = Structural Trust
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7] font-light max-w-[640px]">
            LLIF&apos;s governance model isn&apos;t a policy choice — it&apos;s a legal structure that permanently protects data from
            commercial exploitation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {compliance.map((c) => (
              <div key={c.title} className="bg-white rounded-xl border border-gray-200 p-7">
                <h4 className="flex items-center gap-2 flex-wrap text-[15px] font-semibold mb-2">
                  {c.title}
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.06em] ${c.statusClass}`}>
                    {c.status}
                  </span>
                </h4>
                <p className="text-[13px] text-gray-500 leading-[1.6]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner-bg py-20 px-6 text-center">
        <div className="relative z-10 max-w-site mx-auto">
          <h2 className="font-display font-medium text-white mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
            See what&apos;s under the hood
          </h2>
          <p className="text-[16px] text-sky-light mb-8 font-light">
            Schedule a technical walkthrough of LLIF Cloud and the Programs framework.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                             transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
              Request a Demo
            </Link>
            <Link href="/developers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold text-white
                             transition-all duration-200 hover:bg-white/[0.14] hover:border-white/30"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Developer Details →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
