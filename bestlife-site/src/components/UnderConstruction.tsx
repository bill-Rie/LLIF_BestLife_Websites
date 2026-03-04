import Link from 'next/link'

interface Props {
  title: string
  section?: string
}

export default function UnderConstruction({ title, section }: Props) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      {/* Construction icon */}
      <div className="w-14 h-14 rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-xl mb-6">
        🚧
      </div>

      {section && (
        <div className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-2">
          {section}
        </div>
      )}

      <h1 className="text-3xl font-semibold tracking-tight mb-1">{title}</h1>
      <p className="mt-2 text-sm font-medium text-black/40 uppercase tracking-wider">Under Construction</p>

      <p className="mt-4 max-w-md text-sm text-black/60 leading-relaxed">
        This page is part of our new site map and content is being added. Check back soon.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 rounded-xl border border-black/10 px-5 py-2.5 text-sm font-medium text-black/70 hover:bg-black/5 transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  )
}
