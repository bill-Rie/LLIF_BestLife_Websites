import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'LLIF is a 501(c)(3) nonprofit building data infrastructure that gives individuals agency over their data while enabling better decisions at every scale.',
}

const governance = [
  { title: '501(c)(3) Nonprofit',              desc: 'IRS-verified tax-exempt. Cannot earn a profit.' },
  { title: 'Candid Platinum 2026',             desc: 'Highest transparency rating' },
  { title: 'Donor-Restricted Asset',           desc: 'Data legally protected from resale with bankruptcy protections' },
  { title: 'Data Value May Be Tax Deductible', desc: 'Participant data contributions to the nonprofit' },
  { title: 'Board Governed',                   desc: 'Independent oversight ensures mission alignment' },
  { title: 'Financial Transparency',           desc: 'Annual Form 990 and financial reports publicly available' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header-bg pt-[100px] pb-[60px] px-6">
        <div className="max-w-site mx-auto relative z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-5">About</div>
          <h1 className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            We Believe Data Should Serve People
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            LLIF is a 501(c)(3) nonprofit building data infrastructure that gives individuals agency over their data while enabling
            better decisions at every scale.
          </p>
        </div>
      </div>

      {/* ── WHY A NONPROFIT ── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Our Belief</div>
              <h2 className="font-display font-medium text-navy mb-4"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
                Why a Nonprofit?
              </h2>
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-4">
                Today, a handful of companies profit enormously from data that people generate but never truly own. They make
                approximately $1,000 per person per year in the US alone — just by connecting businesses to consumers using captured
                data. The consumer gets irrelevant ads and none of the proceeds.
              </p>
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-4">
                We believe this is fundamentally wrong. People should own their data, benefit from it, and choose who accesses it.
                But a for-profit company can&apos;t credibly make this promise — business conditions change, investors demand
                monetization, companies get acquired.
              </p>
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-4">
                That&apos;s why LLIF is a 501(c)(3). It&apos;s not a marketing choice — it&apos;s a structural guarantee. Participant
                data is a donor-restricted asset with bankruptcy protections. No future CEO can reverse it. No acquisition can change it.
              </p>
              <p className="text-[15px] text-gray-600 leading-[1.8]">
                For developers: a foundation that will never compete with you. For researchers: data stewardship that outlives any
                grant. For individuals: agency over the data that shapes their lives.
              </p>
            </div>

            <div id="governance" className="bg-cream rounded-[14px] border border-gray-200 p-8">
              <h3 className="font-display text-[18px] font-semibold mb-4">Governance</h3>
              <div className="flex flex-col">
                {governance.map((item, i) => (
                  <div key={item.title}
                       className={`pb-3 mb-3 ${i < governance.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <div className="text-[14px] font-semibold mb-0.5">{item.title}</div>
                    <div className="text-[13px] text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE VISION ── */}
      <section className="py-20 px-6 bg-cream text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">The Vision</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Data Agency at Every Scale
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.8] mb-4">
            We&apos;re building toward a world where individuals control and benefit from their data — where that data powers better
            personal decisions, better research, better products, and better public policy. Where capitalism thrives on top of
            nonprofit-protected data, creating value without exploitation.
          </p>
          <p className="text-[16px] text-gray-600 leading-[1.8]">
            Programs are the first step. The marketplace, community insights, and global data democratization come next.
            We&apos;re just getting started.
          </p>
        </div>
      </section>

      {/* ── FINANCIAL REPORTS ── */}
      <section id="reports" className="py-20 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Transparency</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Financial Reports
          </h2>
          <p className="text-[15px] text-gray-600 leading-[1.7] mb-8">
            As a 501(c)(3), LLIF files annual returns and makes financial information publicly available.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold text-navy
                               transition-all duration-200 hover:bg-navy hover:text-white"
                    style={{ border: '2px solid #0B1D33' }}>
              View Form 990
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold text-navy
                               transition-all duration-200 hover:bg-navy hover:text-white"
                    style={{ border: '2px solid #0B1D33' }}>
              Candid Profile
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner-bg py-20 px-6 text-center">
        <div className="relative z-10 max-w-site mx-auto">
          <h2 className="font-display font-medium text-white mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
            Join us in building a better data future
          </h2>
          <p className="text-[16px] text-sky-light mb-8 font-light">
            We&apos;re looking for developers, researchers, and organizations who share our belief in data agency.
          </p>
          <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                           transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  )
}
