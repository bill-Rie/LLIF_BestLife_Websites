import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grant Proposal Support',
  description:
    'Budget templates, boilerplate language, and letters of support — everything you need to include ethical data infrastructure in your proposal.',
}

function CheckGold() {
  return (
    <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}
function IconClock() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

const steps = [
  { n: 1, title: 'Describe Your Study',     desc: 'Tell us about your research design, participants, data types, and the grant program you\'re targeting.' },
  { n: 2, title: 'We Design the Program',   desc: 'We map your study to the LLIF Program framework — data requirements, compliance, insights — and provide cost estimates.' },
  { n: 3, title: 'Get Your Materials',      desc: 'Letter of support, budget line items, and section-specific boilerplate for your proposal.' },
  { n: 4, title: 'Submit With Confidence',  desc: 'Include LLIF as your data infrastructure partner. We\'re available for reviewer questions.' },
]

const grantPrograms = [
  'NIH (R01, R21, R34, U01, P01)',
  'NSF (SBE, CISE, ENG)',
  'PCORI',
  'AHRQ / CDC',
  'Foundation & philanthropic',
  'State & local public health',
]

export default function GrantsPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header-bg pt-24 pb-16 px-6">
        <div className="max-w-site mx-auto relative z-10">
          <div className="text-[13px] text-gray-400 mb-5 flex items-center gap-1.5">
            <span>For Researchers</span>
            <span className="text-gray-600">›</span>
            <span className="text-sky-light">Grant Support</span>
          </div>
          <h1 className="font-display font-medium text-white max-w-[640px] mb-4 leading-[1.2]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            Include LLIF in Your Grant Proposal
          </h1>
          <p className="text-[18px] text-sky-light leading-[1.7] max-w-[560px] font-light">
            Budget templates, boilerplate language, and letters of support — everything you need to include ethical data
            infrastructure in your proposal.
          </p>
        </div>
      </div>

      {/* ── PROCESS + GRANT LIST ── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 items-start">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Process</div>
              <h2 className="font-display font-medium text-navy mb-4"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
                How It Works
              </h2>

              <div className="mt-10">
                {steps.map((step, i) => (
                  <div key={step.n}
                       className={`flex gap-5 py-6 ${i < steps.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center text-[14px] font-bold flex-shrink-0">
                      {step.n}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold mb-1">{step.title}</h4>
                      <p className="text-[14px] text-gray-500 leading-[1.6]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-6 px-4 py-3 bg-green-light rounded-lg text-[14px] font-semibold text-green">
                <IconClock />
                Letters of support within 5 business days
              </div>
            </div>

            {/* Supported grant programs */}
            <div className="rounded-[14px] border border-gray-200 p-8 bg-cream">
              <h3 className="font-display text-[18px] font-semibold mb-4">Supported Grant Programs</h3>
              <div className="flex flex-col gap-2.5">
                {grantPrograms.map((g) => (
                  <div key={g} className="flex gap-2 text-[14px] text-gray-700 items-start">
                    <CheckGold />
                    {g}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAMPLE BOILERPLATE ── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Sample Language</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Boilerplate for Your Proposal
          </h2>

          <div className="mt-8 flex flex-col gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-7">
              <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-gold mb-2">Data Management Plan</div>
              <p className="text-[14px] text-gray-600 leading-[1.7] italic">
                &ldquo;Data collected in this study will be managed through the LLIF Cloud Platform, operated by the Live Learn
                Innovate Foundation, a 501(c)(3) nonprofit. The study will be implemented as an LLIF Program — a structured
                configuration of data collection templates, compliance schedules, and insight outputs. Participants opt in through
                mobile applications and control their data access. Participant data is classified as a donor-restricted asset under
                nonprofit governance, ensuring no resale or secondary commercial exploitation. Data will be retained for [duration]
                following study completion.&rdquo;
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-7">
              <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-gold mb-2">Facilities &amp; Equipment</div>
              <p className="text-[14px] text-gray-600 leading-[1.7] italic">
                &ldquo;This study will utilize the LLIF Cloud Platform, providing 102 RESTful API endpoints for health event management,
                analytics, nutrition tracking, and environmental enrichment. The platform supports multi-source data ingestion from
                Apple Health, Google Fit, and Fitbit, with automatic enrichment of health events with 25+ local weather, air quality,
                pollen, and UV metrics. LLIF&apos;s Program framework provides compliance-driven data collection with automated schedule
                tracking and target verification.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LETTER OF SUPPORT FORM ── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold mb-3">Request</div>
          <h2 className="font-display font-medium text-navy mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
            Request a Letter of Support
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7] font-light max-w-[640px] mb-8">
            A formal letter on LLIF letterhead confirming our commitment to support your study&apos;s data infrastructure.
          </p>

          <div className="max-w-[720px] bg-white rounded-[14px] border border-gray-200 p-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">Principal Investigator Name</label>
                <input className="px-4 py-3 rounded-lg border border-gray-300 text-[14px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" placeholder="Dr. Jane Smith" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">Institution</label>
                <input className="px-4 py-3 rounded-lg border border-gray-300 text-[14px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" placeholder="University of..." />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">Email</label>
                <input type="email" className="px-4 py-3 rounded-lg border border-gray-300 text-[14px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" placeholder="jsmith@university.edu" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">Grant Program</label>
                <select className="px-4 py-3 rounded-lg border border-gray-300 text-[14px] bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all">
                  <option>Select...</option>
                  <option>NIH</option><option>NSF</option><option>PCORI</option>
                  <option>AHRQ</option><option>CDC</option><option>Foundation</option><option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">Proposal Deadline</label>
                <input type="date" className="px-4 py-3 rounded-lg border border-gray-300 text-[14px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">Study Duration</label>
                <input className="px-4 py-3 rounded-lg border border-gray-300 text-[14px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" placeholder="e.g., 3 years" />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[13px] font-semibold text-gray-700">Study Description</label>
                <textarea className="px-4 py-3 rounded-lg border border-gray-300 text-[14px] min-h-[120px] resize-y focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all"
                          placeholder="Describe your study design, participant population, data types, and how LLIF Programs would support your research..." />
              </div>
            </div>
            <button className="mt-5 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                               transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
              Submit Request →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
