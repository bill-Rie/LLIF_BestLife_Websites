import fs from "fs/promises";
import path from "path";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";

async function getMarkdown() {
  const filePath = path.join(process.cwd(), "content", "pages", "home.md");
  return fs.readFile(filePath, "utf8");
}

export default async function Home() {
  const md = await getMarkdown();

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      {/* HERO SECTION */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* LEFT COLUMN */}
        <div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
            Best Life 2.0 • building now
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Track everything that matters.
          </h1>

          <p className="mt-4 text-lg text-black/70">
            Best Life turns daily signals into longitudinal insight — without
            giving up control of your data.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="#cta"
              className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            >
              Start Tracking
            </a>

            <Link
              href="/how-it-works"
              className="rounded-xl border border-black/15 px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/5"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-6 text-sm text-black/60">
            Privacy-first by design • Export anytime • No resale
          </div>
        </div>

        {/* RIGHT COLUMN — APP PREVIEW */}
        <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6">
          <div className="text-xs font-medium text-black/50">
            App preview
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <Image
              src="/app-ux/Nutrition.webp"
              alt="Best Life 2.0 dashboard"
              width={900}
              height={1600}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="mt-3 text-sm text-black/60">
            Nutrition tracking inside Best Life 2.0
          </div>
        </div>
      </section>

      {/* BODY MARKDOWN SECTION */}
      <section className="mt-14">
        <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-p:text-black/70 prose-li:text-black/70">
          <ReactMarkdown>{md}</ReactMarkdown>

          <div
            id="cta"
            className="mt-10 rounded-2xl border border-black/10 bg-black/[0.03] p-6"
          >
            <div className="text-sm font-semibold">Get early access</div>

            <p className="mt-1 text-sm text-black/60">
              Best Life 2.0 is on the near-term horizon. Join early access to
              help shape it.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
                Join Early Access
              </button>

              <Link
                href="/privacy"
                className="rounded-xl border border-black/15 px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/5"
              >
                Read Privacy & Control
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}