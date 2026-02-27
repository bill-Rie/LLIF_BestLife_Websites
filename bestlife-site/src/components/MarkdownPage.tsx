import fs from "fs/promises";
import path from "path";
import ReactMarkdown from "react-markdown";

export async function readMarkdown(slug: string) {
  const filePath = path.join(process.cwd(), "content", "pages", `${slug}.md`);
  return fs.readFile(filePath, "utf8");
}

export default async function MarkdownPage({ slug }: { slug: string }) {
  const md = await readMarkdown(slug);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <article className="prose prose-lg max-w-none prose-headings:tracking-tight prose-p:text-black/70 prose-li:text-black/70">
        <ReactMarkdown>{md}</ReactMarkdown>

        {/* Consistent CTA block across all Markdown pages */}
        <div id="cta" className="mt-10 rounded-2xl border border-black/10 bg-black/[0.03] p-6">
          <div className="text-sm font-semibold">Ready to start?</div>
          <p className="mt-1 text-sm text-black/60">
            Best Life is building toward 2.0. Track what matters now — and opt into early access.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
              Start Tracking
            </button>
            <button className="rounded-xl border border-black/15 px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/5">
              Join Early Access
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}