import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-sky/10 pt-16 pb-8">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg text-white"
                  style={{ letterSpacing: '-0.02em' }}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-navy"
                    style={{ background: 'linear-gradient(135deg, #D4A853, #E8C97A)' }}>
                LF
              </span>
              LLIF
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-[280px] mt-4">
              Live Learn Innovate Foundation — a 501(c)(3) nonprofit building data infrastructure
              that gives individuals agency over their data while enabling better decisions at every scale.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400 mb-4">Platform</h5>
            <div className="flex flex-col gap-1">
              <Link href="/programs"  className="text-sm text-white/60 py-1 hover:text-white transition-colors">Programs</Link>
              <Link href="/platform"  className="text-sm text-white/60 py-1 hover:text-white transition-colors">Infrastructure &amp; API</Link>
              <Link href="/platform#security" className="text-sm text-white/60 py-1 hover:text-white transition-colors">Security &amp; Compliance</Link>
              <Link href="/platform"  className="text-sm text-white/60 py-1 hover:text-white transition-colors">Integrations</Link>
            </div>
          </div>

          {/* Build With Us */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400 mb-4">Build With Us</h5>
            <div className="flex flex-col gap-1">
              <Link href="/developers"  className="text-sm text-white/60 py-1 hover:text-white transition-colors">For Developers</Link>
              <Link href="/researchers" className="text-sm text-white/60 py-1 hover:text-white transition-colors">For Researchers</Link>
              <Link href="/grants"      className="text-sm text-white/60 py-1 hover:text-white transition-colors">Grant Support</Link>
              <Link href="/contact"     className="text-sm text-white/60 py-1 hover:text-white transition-colors">Become a Partner</Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400 mb-4">About</h5>
            <div className="flex flex-col gap-1">
              <Link href="/about"   className="text-sm text-white/60 py-1 hover:text-white transition-colors">Why LLIF</Link>
              <Link href="/about#governance" className="text-sm text-white/60 py-1 hover:text-white transition-colors">Governance</Link>
              <Link href="/about#reports"    className="text-sm text-white/60 py-1 hover:text-white transition-colors">Financial Reports</Link>
              <Link href="/contact" className="text-sm text-white/60 py-1 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-wrap justify-between items-center gap-3 text-xs text-gray-500">
          <span>© 2026 Live Learn Innovate Foundation. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service · Disclaimers</span>
        </div>
      </div>
    </footer>
  )
}
