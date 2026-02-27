#!/bin/bash
set -e

echo "🚀 Scaffolding Best Life (src/ layout detected)..."

# Confirm Next project
if [ ! -f "package.json" ]; then
  echo "❌ package.json not found. Run create-next-app first."
  exit 1
fi

# Install markdown renderer if missing
if ! npm ls react-markdown >/dev/null 2>&1; then
  echo "📦 Installing react-markdown..."
  npm install react-markdown
fi

# Create folders (src-aware)
mkdir -p src/app/about
mkdir -p src/app/how-it-works
mkdir -p src/app/use-cases
mkdir -p src/app/news
mkdir -p src/app/for-researchers
mkdir -p src/app/privacy

mkdir -p content/pages
mkdir -p src/components

# Markdown renderer component
cat <<'EOF' > src/components/MarkdownPage.tsx
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
      <article className="prose prose-lg max-w-none">
        <ReactMarkdown>{md}</ReactMarkdown>
      </article>
    </main>
  );
}
EOF

# Page wrapper helper
create_page () {
  local route=$1
  local slug=$2
  cat <<EOF > "src/app/${route}/page.tsx"
import MarkdownPage from "@/components/MarkdownPage";

export default async function Page() {
  return <MarkdownPage slug="${slug}" />;
}
EOF
}

create_page "about" "about"
create_page "how-it-works" "how-it-works"
create_page "use-cases" "use-cases"
create_page "news" "news"
create_page "for-researchers" "for-researchers"
create_page "privacy" "privacy"

# Home page
cat <<'EOF' > src/app/page.tsx
import MarkdownPage from "@/components/MarkdownPage";

export default async function Page() {
  return <MarkdownPage slug="home" />;
}
EOF

# Content files
cat <<'EOF' > content/pages/home.md
# Best Life — Track everything that matters.

Best Life is a privacy-first Everything App that helps you derive value from your living data over time.

## The model
Templates → Plans → Programs → Insights

## What you can do
- Track across domains
- Connect existing health sources
- Build structured programs
- Learn from longitudinal patterns

**CTA:** Start Tracking • Join Early Access
EOF

cat <<'EOF' > content/pages/about.md
# About Best Life

Best Life is the client experience powered by LLIF's longitudinal infrastructure.

## What we believe
- Health is longitudinal
- Programmability beats prescription
- Users own their data
EOF

cat <<'EOF' > content/pages/how-it-works.md
# How It Works

## 1 — Pick an event of interest
## 2 — Start with templates
## 3 — Add plans
## 4 — Combine into programs
## 5 — Unlock insights
EOF

cat <<'EOF' > content/pages/use-cases.md
# Use Cases

- Seasonal allergies
- Migraine tracking
- Sleep optimization
- Training blocks
- Mood & stress patterns
EOF

cat <<'EOF' > content/pages/news.md
# News

Releases, updates, and use case guides.
EOF

cat <<'EOF' > content/pages/for-researchers.md
# For Researchers

Best Life is the client experience.  
LLIF is the nonprofit-owned infrastructure behind it.

## Why this matters
Longitudinal, consent-based, user-owned data.

Contact: research@llif.org
EOF

cat <<'EOF' > content/pages/privacy.md
# Privacy & Control

Privacy is structural.

- You own your data
- Export anytime
- No resale
EOF

echo "✅ Done."
echo "👉 Run: npm run dev"
echo "👉 Visit: http://localhost:3000"
echo "👉 Test: /for-researchers"
EOF