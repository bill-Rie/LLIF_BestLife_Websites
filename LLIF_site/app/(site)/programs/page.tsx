import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Programs are configurable bundles of data collection, plans, and insights that organizers create and participants subscribe to — turning individual data into knowledge at any scale.',
}

export default function ProgramsPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header-bg pt-24 pb-16 px-6">
        <div className="max-w-site mx-auto relative z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-5">Programs</div>
          <h1 className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            Programs: How Data Agency Becomes Action
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            Programs are configurable bundles of data collection, plans, and insights that organizers create and participants subscribe
            to — turning individual data into knowledge at any scale.
          </p>
        </div>
      </div>

      {/* ── WHAT IS A PROGRAM ── */}
      <section id="concept" className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">The Concept</div>
              <h2 className="font-display font-medium text-navy mb-4"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
                One Framework, Unlimited Applications
              </h2>
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-5">
                A Program is a structured, programmable configuration that an organizer creates and distributes to participants.
                Every program contains three elements:
              </p>
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-3">
                <strong className="text-navy">Templates &amp; Data Collection</strong> — What to track (Events of Interest), what
                influences them (Factors of Interest), and what they lead to (Outcomes of Interest). Synced from wearables, entered
                manually, captured by voice, or enriched from environmental data.
              </p>
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-3">
                <strong className="text-navy">Plans &amp; Compliance</strong> — Schedules, targets, reminders, and conditions that
                guide data collection and behavior change. Compliance is tracked automatically, confirming actions through any means.
              </p>
              <p className="text-[15px] text-gray-600 leading-[1.8]">
                <strong className="text-navy">Insights &amp; Predictions</strong> — Correlations, trends, calendar patterns, and
                predictions derived from collected data. Programs surface knowledge that participants and organizers can act on.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-gray-200">
              <h3 className="font-display text-[18px] font-semibold mb-4">Program Purpose Types</h3>
              <div className="flex flex-col gap-0">
                {[
                  { type: 'Discover', desc: 'Identify influences on an Event of Interest. What triggers my migraines? What affects my sleep?' },
                  { type: 'Manage', desc: 'Ongoing tracking and insight for chronic conditions, mental health, or property care.' },
                  { type: 'Change', desc: 'Build or break habits with targets and compliance. Lose weight, quit smoking, exercise more.' },
                  { type: 'Maintain', desc: 'Sustain achieved goals and healthy habits over time with monitoring and accountability.' },
                  { type: 'Prepare / Recover', desc: 'Structured programs for surgery prep, procedure recovery, or event-triggered protocols like IBS flare-ups.' },
                ].map((item, i) => (
                  <div key={item.type} className={`py-3.5 ${i > 0 ? 'border-t border-gray-200' : ''}`}>
                    <strong className="text-[14px]">{item.type}</strong>
                    <br />
                    <span className="text-[13px] text-gray-500">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAMPLE PROGRAMS ── */}
      <section id="examples" className="py-20 px-6 bg-cream">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Program Examples</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            From Allergy Discovery to Clinical Trials
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7] font-light max-w-[640px]">
            The same program framework serves radically different use cases depending on who the organizer is and what they&apos;re trying to learn.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {programs.map((p) => (
              <div key={p.title} className="bg-white rounded-[14px] border border-gray-200 p-7 relative
                                           transition-all duration-200 hover:border-gold hover:shadow-[0_8px_24px_rgba(212,168,83,0.08)] hover:-translate-y-0.5">
                {p.badge && (
                  <span className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.06em] ${p.badgeClass}`}>
                    {p.badge}
                  </span>
                )}
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.06em] mb-3.5 ${p.typeClass}`}>
                  {p.type}
                </span>
                <h4 className="font-display text-[16px] font-semibold mb-2">{p.title}</h4>
                <p className="text-[13px] text-gray-500 leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORGANIZER TYPES ── */}
      <section id="organizers" className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">For Organizers</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Who Creates Programs?
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7] font-light max-w-[640px]">
            Programs are created by organizers and distributed to participants through apps.
            The same infrastructure serves every type of organizer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {organizers.map((o) => (
              <div key={o.title} className="bg-white rounded-xl border border-gray-200 p-7 transition-all duration-200 hover:border-gold">
                <h4 className="text-[15px] font-semibold mb-1.5 flex items-center gap-2 flex-wrap">
                  {o.title}
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.06em] ${o.statusClass}`}>
                    {o.status}
                  </span>
                </h4>
                <p className="text-[13px] text-gray-500 leading-[1.6]">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETPLACE ── */}
      <section className="py-20 px-6 text-center" style={{ background: '#FDF5E6' }}>
        <div className="max-w-[700px] mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#B8902A' }}>Coming Q3 2026</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            The Program Marketplace
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7] mb-8">
            A searchable directory where participants discover and subscribe to programs — and where organizers publish, distribute,
            and monetize their work. Public, semi-public, semi-private, and private distribution. Free and paid models.
          </p>
          <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                           transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
            Get Early Access →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner-bg py-20 px-6 text-center">
        <div className="relative z-10 max-w-site mx-auto">
          <h2 className="font-display font-medium text-white mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
            Want to create a program?
          </h2>
          <p className="text-[16px] text-sky-light mb-8 font-light">
            Whether you&apos;re an app developer, researcher, health influencer, or organization — we&apos;ll help you design and
            distribute your first program.
          </p>
          <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                           transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  )
}

const programs = [
  { badge: 'Live',    badgeClass: 'bg-green-light text-green', type: 'Discover',      typeClass: 'bg-sky/15 text-slate',                title: 'Seasonal Allergies',   desc: 'Track respiratory symptoms against 25+ environmental factors (AQI, pollen, weather) to identify personal triggers. Auto-enriched with local conditions.' },
  { badge: 'Live',    badgeClass: 'bg-green-light text-green', type: 'Manage',        typeClass: 'bg-green/10 text-green',              title: 'Mental Health',        desc: 'Holistic mood, stress, emotion, and medication tracking with correlations to sleep, nutrition, exercise, and environmental factors.' },
  { badge: 'Live',    badgeClass: 'bg-green-light text-green', type: 'Discover',      typeClass: 'bg-sky/15 text-slate',                title: 'Sleep Improvement',    desc: 'Track sleep metrics alongside daily habits, nutrition, exercise, screen time, and environment to discover what helps you sleep better.' },
  { badge: 'Q2 2026', badgeClass: 'bg-gold/12 text-[#B8902A]', type: 'Manage',       typeClass: 'bg-green/10 text-green',              title: 'Joint Pain Management',desc: 'Chronic pain tracking with body map, medication logging, and factor correlation including barometric pressure and activity levels.' },
  { badge: 'Q2 2026', badgeClass: 'bg-gold/12 text-[#B8902A]', type: 'Change',       typeClass: 'bg-gold/12 text-[#B8902A]',           title: 'Weight Loss',          desc: 'Nutrition tracking with iterative targets, exercise compliance, and AI-driven insights. Progressive goals with weekly milestones.' },
  { badge: 'Q3 2026', badgeClass: 'bg-gold/12 text-[#B8902A]', type: 'Research Study',typeClass: 'bg-navy/[0.08] text-navy',           title: 'Your Study Here',      desc: 'Design your longitudinal study as a program. Define data requirements, compliance schedules, and insight outputs. Participants collect data through apps.' },
  { badge: 'Q3 2026', badgeClass: 'bg-sky/12 text-slate',      type: 'Corporate',    typeClass: 'bg-gold/12 text-[#B8902A]',           title: 'Corporate Wellness',   desc: 'Employee health challenges with group-level insights, compliance tracking, and anonymous aggregate reporting for HR.' },
  { badge: 'Q4 2026', badgeClass: 'bg-sky/12 text-slate',      type: 'Healthcare',   typeClass: 'bg-green/10 text-green',              title: 'Treatment Plans',      desc: 'Provider-created, patient-specific programs with medication compliance, vitals monitoring, and exception alerts.' },
  { badge: 'Q4 2026', badgeClass: 'bg-sky/12 text-slate',      type: 'Clinical',     typeClass: 'bg-navy/[0.08] text-navy',            title: 'Clinical Trials',      desc: 'Trial protocols as programs with strict compliance requirements, participant dashboards, and raw data export for sponsor analysis.' },
]

const organizers = [
  { title: 'App Developers',             status: 'Live',     statusClass: 'bg-green-light text-green',       desc: 'Build health and lifestyle apps that offer programs from the LLIF marketplace. Best Life is the first app developer on the platform — your app could be next.' },
  { title: 'Research Organizations',     status: 'Q3 2026',  statusClass: 'bg-gold/12 text-[#B8902A]',       desc: 'Universities and research institutions design longitudinal studies as programs with defined data requirements, compliance schedules, and anonymized outputs.' },
  { title: 'Influencers & Content Creators', status: 'Q3 2026', statusClass: 'bg-gold/12 text-[#B8902A]',   desc: 'Health and wellness influencers create curated programs for their audience — a new revenue stream built on real data, not just content.' },
  { title: 'Corporate Wellness',         status: 'Q4 2026',  statusClass: 'bg-sky/12 text-slate',            desc: 'Employers create wellness programs with group compliance tracking and anonymous aggregate health metrics for insurance and HR outcomes.' },
  { title: 'Healthcare Providers',       status: 'Q4 2026',  statusClass: 'bg-sky/12 text-slate',            desc: 'Clinicians create personalized treatment plans with medication compliance, vitals monitoring, and patient dashboards.' },
  { title: 'Clinical Trial Sponsors',    status: '2027',     statusClass: 'bg-sky/12 text-slate',            desc: 'Pharmaceutical and trial organizations use LLIF for focused data collection apps with compliance, insights, and raw data export.' },
]
