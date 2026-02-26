'use client'

import { useState } from 'react'

type Tab = 'demo' | 'general' | 'partner'

const inputCls =
  'w-full px-4 py-3 rounded-lg border border-gray-300 text-[14px] bg-white focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all font-body'

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-gray-700">{label}</label>
      {children}
    </div>
  )
}

function DemoForm() {
  return (
    <>
      <div className="font-display text-[22px] font-semibold mb-2">See LLIF Cloud &amp; Programs in Action</div>
      <p className="text-[15px] text-gray-500 mb-7">
        We&apos;ll walk through the platform, the Program framework, and how it fits your use case.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Name"><input className={inputCls} /></FormField>
        <FormField label="Organization"><input className={inputCls} /></FormField>
        <FormField label="Email"><input type="email" className={inputCls} /></FormField>
        <FormField label="I'm interested as a...">
          <select className={inputCls}>
            <option>App Developer</option>
            <option>Researcher / PI</option>
            <option>Healthcare Organization</option>
            <option>Corporate Wellness</option>
            <option>Influencer / Creator</option>
            <option>Other</option>
          </select>
        </FormField>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="text-[13px] font-semibold text-gray-700">What are you building or researching?</label>
          <textarea className={`${inputCls} min-h-[120px] resize-y`} />
        </div>
      </div>
      <button className="mt-5 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                         transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
        Request Demo →
      </button>
    </>
  )
}

function GeneralForm() {
  return (
    <>
      <div className="font-display text-[22px] font-semibold mb-2">General Inquiry</div>
      <p className="text-[15px] text-gray-500 mb-7">
        Questions about LLIF, our platform, Programs, partnerships — anything at all.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Name"><input className={inputCls} /></FormField>
        <FormField label="Email"><input type="email" className={inputCls} /></FormField>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="text-[13px] font-semibold text-gray-700">Message</label>
          <textarea className={`${inputCls} min-h-[120px] resize-y`} />
        </div>
      </div>
      <button className="mt-5 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                         transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
        Send Message →
      </button>
    </>
  )
}

function PartnerForm() {
  return (
    <>
      <div className="font-display text-[22px] font-semibold mb-2">Become an Early Program Partner</div>
      <p className="text-[15px] text-gray-500 mb-7">
        The Program Marketplace launches Q3 2026. Early partners shape the platform and get priority access. We&apos;re looking for
        researchers, influencers, corporate wellness, and healthcare organizations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Name"><input className={inputCls} /></FormField>
        <FormField label="Organization"><input className={inputCls} /></FormField>
        <FormField label="Email"><input type="email" className={inputCls} /></FormField>
        <FormField label="Organizer Type">
          <select className={inputCls}>
            <option>Research / University</option>
            <option>Healthcare Provider</option>
            <option>Corporate Wellness</option>
            <option>Influencer / Creator</option>
            <option>Clinical Trial Sponsor</option>
            <option>Other</option>
          </select>
        </FormField>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="text-[13px] font-semibold text-gray-700">What kind of program would you create?</label>
          <textarea
            className={`${inputCls} min-h-[120px] resize-y`}
            placeholder="Describe the program you'd like to build — the participants, data types, goals, and how you'd distribute it..."
          />
        </div>
      </div>
      <button className="mt-5 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gold text-navy
                         transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5">
        Apply for Early Access →
      </button>
    </>
  )
}

const tabs: { id: Tab; label: string }[] = [
  { id: 'demo',    label: 'Request a Demo' },
  { id: 'general', label: 'General Inquiry' },
  { id: 'partner', label: 'Become an Early Partner' },
]

export default function ContactTabs() {
  const [active, setActive] = useState<Tab>('demo')

  return (
    <>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-5 py-2 rounded-full border-none text-[14px] font-semibold font-body transition-all duration-200
              ${active === tab.id ? 'bg-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {active === 'demo'    && <DemoForm />}
      {active === 'general' && <GeneralForm />}
      {active === 'partner' && <PartnerForm />}
    </>
  )
}
