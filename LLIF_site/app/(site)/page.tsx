import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Your data should work for you — not against you',
  description:
    'LLIF is a 501(c)(3) nonprofit giving individuals agency over their health data while enabling better decisions at every scale.',
}

/* ── inline SVG helpers ── */
function IconCode() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  )
}
function IconPeople() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-bg">
        <div className="hero-grid" aria-hidden="true" />
        <div className="max-w-site mx-auto px-6 pt-[100px] pb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 text-xs font-semibold text-gold-light uppercase tracking-[0.08em]"
               style={{ background: 'rgba(212,168,83,0.12)', border: '1px solid rgba(212,168,83,0.25)' }}>
            501(c)(3) Nonprofit Foundation
          </div>
          <h1 className="font-display font-medium text-white max-w-[760px] mb-6 leading-[1.15]"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.02em' }}>
            Your data should work <em className="italic text-gold-light">for you</em> — not against you.
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[600px] mb-10 font-light">
            Every day, people generate health and lifestyle data that gets trapped in silos, exploited for profit, or simply lost.
            LLIF exists to change that — giving individuals agency over their data while enabling better decisions at every scale,
            from personal health to global research.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/programs"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                             transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,168,83,0.3)]">
              Discover Programs →
            </Link>
            <Link href="/developers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold text-white
                             transition-all duration-200 hover:bg-white/[0.14] hover:border-white/30"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Build on LLIF →
            </Link>
            <Link href="/researchers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold text-white
                             transition-all duration-200 hover:bg-white/[0.14] hover:border-white/30"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Research with LLIF →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section className="py-[100px] px-6 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Why We Exist</div>
          <p className="font-display font-normal text-navy leading-[1.4] mb-8"
             style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', letterSpacing: '-0.01em' }}>
            We believe that <em className="italic text-gold">individual data agency</em> — people owning and benefitting from their own data —
            is the foundation for better learning and better decisions, from a single person to the entire world.
          </p>
          <div className="w-[60px] h-[3px] bg-gold mx-auto rounded-full my-10" />
          <p className="text-[17px] leading-[1.8] text-gray-600 max-w-[720px] mx-auto mb-6 font-light">
            Today, a handful of companies profit enormously from data people generate but never truly own. Health insights stay locked in
            apps that don&apos;t talk to each other. Researchers struggle to access longitudinal data ethically. Organizations can&apos;t
            study population health without compromising individual privacy.
          </p>
          <p className="text-[17px] leading-[1.8] text-gray-600 max-w-[720px] mx-auto mb-6 font-light">
            LLIF is a 501(c)(3) nonprofit that structurally solves this. When data is governed by a nonprofit — classified as a
            donor-restricted asset, never sold, never exploited — it becomes safe to build on. Safe for individuals to share. Safe for
            developers to innovate on. Safe for researchers to study. Safe for organizations to learn from.
          </p>
          <p className="text-[17px] leading-[1.8] max-w-[720px] mx-auto font-medium text-navy">
            Data agency for individuals. Better decisions at every scale. That&apos;s why LLIF exists.
          </p>
        </div>
      </section>

      {/* ── OUR APPROACH: Golden Circle ── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-site mx-auto text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Our Approach</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            People don&apos;t buy what you do. They buy why you do it.
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7] font-light mx-auto max-w-[640px]">
            Everything we build starts from a simple belief about data ownership — and works outward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* WHY */}
            <div className="text-center px-7 py-10 rounded-2xl"
                 style={{ background: 'linear-gradient(160deg, rgba(212,168,83,0.1) 0%, rgba(212,168,83,0.03) 100%)', border: '1px solid rgba(212,168,83,0.2)' }}>
              <div className="w-16 h-16 rounded-full bg-gold text-navy flex items-center justify-center mx-auto mb-5
                              font-display text-sm font-bold uppercase tracking-[0.08em]">Why</div>
              <h3 className="font-display text-xl font-semibold mb-3">Individual Data Agency</h3>
              <p className="text-sm leading-[1.7] text-gray-600">
                People deserve to own, control, and benefit from their own data. When they do, better decisions happen — for
                individuals, organizations, and the world. A nonprofit structure guarantees this alignment permanently.
              </p>
            </div>
            {/* HOW */}
            <div className="text-center px-7 py-10 rounded-2xl"
                 style={{ background: 'linear-gradient(160deg, rgba(61,90,128,0.08) 0%, rgba(61,90,128,0.02) 100%)', border: '1px solid rgba(61,90,128,0.15)' }}>
              <div className="w-16 h-16 rounded-full bg-slate text-white flex items-center justify-center mx-auto mb-5
                              font-display text-sm font-bold uppercase tracking-[0.08em]">How</div>
              <h3 className="font-display text-xl font-semibold mb-3">Programs</h3>
              <p className="text-sm leading-[1.7] text-gray-600">
                Programs are how data agency becomes action. Organizers — app developers, researchers, healthcare providers, employers —
                create structured programs that participants subscribe to, collecting data on their terms while unlocking insights at every scale.
              </p>
            </div>
            {/* WHAT */}
            <div className="text-center px-7 py-10 rounded-2xl"
                 style={{ background: 'linear-gradient(160deg, rgba(137,176,211,0.08) 0%, rgba(137,176,211,0.02) 100%)', border: '1px solid rgba(137,176,211,0.15)' }}>
              <div className="w-16 h-16 rounded-full bg-sky text-navy flex items-center justify-center mx-auto mb-5
                              font-display text-sm font-bold uppercase tracking-[0.08em]">What</div>
              <h3 className="font-display text-xl font-semibold mb-3">LLIF Cloud Platform</h3>
              <p className="text-sm leading-[1.7] text-gray-600">
                102 API endpoints. 620+ health taxonomy nodes. Multi-source data ingestion. Correlation analysis. Environmental enrichment.
                Compliance tracking. The infrastructure that makes programs possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCALE: Individual → Global ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-site mx-auto text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Better Decisions at Every Scale</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            From Personal Insight to Global Impact
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7] font-light mx-auto max-w-[640px]">
            When individuals own their data and choose to participate, knowledge compounds — from a single person managing their
            migraines to researchers understanding population health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
            {[
              { icon: '🧑', title: 'Individual', desc: 'Discover triggers, manage conditions, build habits, and make better health decisions with your own longitudinal data.' },
              { icon: '🏢', title: 'Organization', desc: 'Corporate wellness, clinical programs, and employee health — with participant consent and compliance built in.' },
              { icon: '🎓', title: 'Research', desc: 'Longitudinal studies, clinical trials, and population health research — with ethical data that outlives any single grant.' },
              { icon: '🌍', title: 'Community & Global', desc: 'Anonymous, aggregated insights that quantify the impact of environment, policy, and public health interventions at scale.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white border border-gray-200 text-center">
                <div className="text-[28px] mb-3">{item.icon}</div>
                <h4 className="font-display text-[17px] font-semibold mb-1.5">{item.title}</h4>
                <p className="text-[13px] text-gray-500 leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="flex flex-wrap items-center justify-center gap-10 px-6 py-8 border-b border-gray-200">
        {[
          '501(c)(3) Nonprofit',
          'Candid Platinum 2026',
          'Data = Donor-Restricted Asset',
          'No Data Resale — Ever',
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
            <div className="w-2 h-2 rounded-full bg-green flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>

      {/* ── AUDIENCES ── */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Who Builds With Us</div>
          <h2 className="font-display font-medium text-white mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Your vision, your users, our foundation.
          </h2>
          <p className="text-[17px] text-sky-light leading-[1.7] font-light max-w-[640px]">
            LLIF is infrastructure — not a competing product. When you build on a nonprofit foundation, you build on aligned incentives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Developers card */}
            <Link href="/developers"
                  className="block p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: 'linear-gradient(160deg, rgba(137,176,211,0.08), rgba(137,176,211,0.02))', border: '1px solid rgba(137,176,211,0.15)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-sky"
                   style={{ background: 'rgba(137,176,211,0.15)' }}>
                <IconCode />
              </div>
              <h3 className="font-display text-[22px] font-medium text-white mb-3">App Developers</h3>
              <p className="text-[15px] leading-[1.7] text-sky-light mb-5">
                Bring health and lifestyle apps to market faster with a complete data backend — and offer your users Programs from a
                growing marketplace. Skip building infrastructure; start delivering value.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-all duration-200 group-hover:gap-2.5">
                Build on LLIF ›
              </span>
            </Link>

            {/* Researchers card */}
            <Link href="/researchers"
                  className="block p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: 'linear-gradient(160deg, rgba(212,168,83,0.08), rgba(212,168,83,0.02))', border: '1px solid rgba(212,168,83,0.15)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-gold-light"
                   style={{ background: 'rgba(212,168,83,0.15)' }}>
                <IconPeople />
              </div>
              <h3 className="font-display text-[22px] font-medium text-white mb-3">Research &amp; Institutional</h3>
              <p className="text-[15px] leading-[1.7] text-sky-light mb-5">
                Design longitudinal studies as Programs. Participants collect data through apps they already use. You get ethical,
                compliant, consent-driven data — and grant proposal support.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all duration-200 group-hover:gap-2.5">
                Research with LLIF ›
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner-bg py-20 px-6 text-center">
        <div className="relative z-10 max-w-site mx-auto">
          <h2 className="font-display font-medium text-white mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
            The future of health data is participant-owned.
          </h2>
          <p className="text-[16px] text-sky-light mb-8 font-light">
            Whether you&apos;re building an app, designing a study, or exploring what&apos;s possible — we&apos;d love to talk.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                             transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,168,83,0.3)]">
              Get in Touch
            </Link>
            <Link href="/programs"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold text-gold
                             transition-all duration-200 hover:bg-gold hover:text-navy"
                  style={{ border: '2px solid #D4A853' }}>
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
