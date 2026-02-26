import type { Metadata } from 'next'
import ContactTabs from './ContactTabs'

export const metadata: Metadata = {
  title: 'Contact — Get Involved',
  description: "Whether you're exploring, building, or researching — we're here. Request a demo, ask a question, or become an early partner.",
}

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header-bg pt-[100px] pb-[60px] px-6">
        <div className="max-w-site mx-auto relative z-10">
          <h1 className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            Let&apos;s Build Together
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            Whether you&apos;re exploring, building, or researching — we&apos;re here.
          </p>
        </div>
      </div>

      {/* ── TABS ── */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <ContactTabs />
        </div>
      </section>
    </>
  )
}
