import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">Best Life</div>
            <p className="mt-2 text-sm text-black/60">
              Track what matters. Learn over time. Keep control of your data.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Pages</div>
            <div className="mt-2 grid gap-2 text-black/70">
              <Link href="/how-it-works" className="hover:text-black">How It Works</Link>
              <Link href="/use-cases" className="hover:text-black">Use Cases</Link>
              <Link href="/for-researchers" className="hover:text-black">For Researchers</Link>
              <Link href="/privacy" className="hover:text-black">Privacy</Link>
              <Link href="/news" className="hover:text-black">News</Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Built with intent</div>
            <p className="mt-2 text-black/60">
              Best Life is the client experience. LLIF is the nonprofit infrastructure behind it.
            </p>
          </div>
        </div>

        <div className="mt-10 text-xs text-black/50">
          © {new Date().getFullYear()} Best Life • All rights reserved
        </div>
      </div>
    </footer>
  );
}