import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For Developers',
  description:
    'Build health apps that give users data agency. Get a production health data backend with Programs, insights, and compliance — so you can focus on the experience your users love.',
}

function CheckGreen() {
  return (
    <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#2D8A56" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}
function CheckGold() {
  return (
    <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function DevelopersPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header-bg pt-24 pb-16 px-6">
        <div className="max-w-site mx-auto relative z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-5">For Developers</div>
          <h1 className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            Build Health Apps That Give Users Data Agency
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            Get a production health data backend with Programs, insights, and compliance — so you can focus on the experience your users love.
          </p>
        </div>
      </div>

      {/* ── WHY BUILD ON LLIF ── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Why Build on LLIF</div>
              <h2 className="font-display font-medium text-navy mb-4"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
                Your App + Our Foundation
              </h2>
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-6">
                Most health apps trap users in tiny, disconnected data silos. When your app builds on LLIF, you&apos;re offering
                something different: a unified, longitudinal data lake that belongs to the user — not to you, and not to us. That&apos;s
                a value proposition no for-profit backend can match.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  'Programs from the LLIF marketplace — prebuilt value for your users',
                  '102 API endpoints — events, analytics, nutrition, environment, users',
                  'Multi-source sync: Apple Health, Google Fit, Fitbit',
                  'Environmental enrichment with 25+ metrics per event',
                  'Insights engine: correlations, trends, predictions',
                  'No competing products — LLIF is infrastructure, not an app',
                ].map((item) => (
                  <div key={item} className="flex gap-2 text-[14px] text-gray-700 items-start">
                    <CheckGreen />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* You Own */}
              <div className="rounded-[14px] border border-gray-200 p-8 bg-gray-50">
                <h3 className="font-display text-[18px] font-semibold mb-4">You Own</h3>
                <div className="flex flex-col gap-2.5">
                  {['Your app, brand, and IP', 'Your user relationships', 'Your business model', 'Program revenue (80/20 split)'].map((item) => (
                    <div key={item} className="flex gap-2 text-[14px] text-gray-700 items-start">
                      <CheckGreen />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* LLIF Provides */}
              <div className="rounded-[14px] border border-gray-200 p-8" style={{ background: '#FDF5E6' }}>
                <h3 className="font-display text-[18px] font-semibold mb-4">LLIF Provides</h3>
                <div className="flex flex-col gap-2.5">
                  {['Longitudinal data infrastructure', 'Program framework & marketplace', 'Compliance & governance', 'Nonprofit trust guarantees'].map((item) => (
                    <div key={item} className="flex gap-2 text-[14px] text-gray-700 items-start">
                      <CheckGold />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NONPROFIT ADVANTAGE ── */}
      <section className="py-20 px-6 text-center" style={{ background: '#FDF5E6' }}>
        <div className="max-w-[680px] mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#B8902A' }}>The Nonprofit Advantage</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            We&apos;ll Never Compete With You
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7] mt-3">
            LLIF is a 501(c)(3) nonprofit. No investors. No acquisition risk. No incentive to hoard data or build competing apps.
            Unlike every for-profit backend, our success is defined by yours.
          </p>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section id="case-study" className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Case Study</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Best Life: The First App on LLIF Cloud
          </h2>
          <div className="mt-10 p-10 rounded-2xl"
               style={{ background: 'linear-gradient(135deg, #FDF5E6 0%, rgba(212,168,83,0.05) 100%)', border: '1px solid rgba(212,168,83,0.2)' }}>
            <h3 className="font-display text-[22px] font-semibold mb-3">
              Best Life — Comprehensive Health Tracking, Powered by LLIF
            </h3>
            <p className="text-[15px] text-gray-600 leading-[1.7] mb-4">
              Best Life Inc. builds and operates a consumer health and lifestyle app on iOS, Android, and web using LLIF Cloud as its
              entire backend. The app offers health and symptom tracking, nutrition, fitness, sleep, mood journaling, habit tracking,
              environmental correlation, and soon — a curated library of Programs from the LLIF marketplace.
            </p>
            <p className="text-[15px] text-gray-600 leading-[1.7] mb-5">
              <strong>Best Life Inc. owns its app, brand, and user relationships.</strong> LLIF provides the data foundation. This is
              exactly the model available to you.
            </p>
            <div className="flex flex-wrap gap-8 mt-5 pt-5 border-t border-gold/20">
              {[
                { num: '3',   label: 'Platforms' },
                { num: '620+', label: 'Trackable Categories' },
                { num: '5+',  label: 'Data Source Integrations' },
                { num: '25+', label: 'Environmental Metrics' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[24px] font-semibold text-navy">{s.num}</div>
                  <div className="text-[12px] text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner-bg py-20 px-6 text-center">
        <div className="relative z-10 max-w-site mx-auto">
          <h2 className="font-display font-medium text-white mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
            Start building on LLIF
          </h2>
          <p className="text-[16px] text-sky-light mb-8 font-light">
            Get sandbox access and explore what&apos;s possible.
          </p>
          <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                           transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
            Request Access
          </Link>
        </div>
      </section>
    </>
  )
}
