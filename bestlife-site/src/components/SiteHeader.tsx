import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/news", label: "News" },
  { href: "/for-researchers", label: "For Researchers" },
  { href: "/privacy", label: "Privacy" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl border border-black/10 bg-black/90" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Best Life</div>
            <div className="text-xs text-black/60">Everything App</div>
          </div>
        </Link>

        <nav className="hidden gap-5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-black/70 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden rounded-xl px-3 py-2 text-sm text-black/70 hover:bg-black/5 md:inline-flex"
          >
            Early Access
          </Link>
          <a
            href="#cta"
            className="inline-flex items-center rounded-xl bg-black px-3 py-2 text-sm font-medium text-white hover:bg-black/90"
          >
            Start Tracking
          </a>
        </div>
      </div>
    </header>
  );
}