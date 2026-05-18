// scripts/run-scheduled-publish.js
// The cron entrypoint. Run every hour by GitHub Actions.
//
// For each article in content/articles/:
//   - Parse publishAt
//   - If publishAt <= now AND not yet fully published, run all publishers
//   - Publishers themselves check the per-platform state and are idempotent
//
// Outputs:
//   - GITHUB_OUTPUT: any_published=true|false, slugs=comma-separated
//   - Updated content/published.json (committed by the workflow)

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { loadArticle, listScheduledArticles } = require('./lib/load-article');
const { read: readState } = require('./lib/published-state');

const ALL_PLATFORMS = ['site', 'devto', 'hashnode', 'medium', 'linkedin'];

function isDue(article) {
  if (!article.publishAt) return false; // unscheduled drafts are skipped
  const when = new Date(article.publishAt);
  if (isNaN(when.getTime())) {
    console.warn(`${article.slug}: invalid publishAt "${article.publishAt}", skipping.`);
    return false;
  }
  return when.getTime() <= Date.now();
}

function platformsRemaining(slug) {
  const state = readState();
  const published = state[slug] || {};
  const enabled = ALL_PLATFORMS.filter((p) => isPlatformEnabled(p));
  return enabled.filter((p) => !published[p]);
}

function isPlatformEnabled(p) {
  switch (p) {
    case 'site':
      return true; // always: the site page is generated locally then committed
    case 'devto':
      return Boolean(process.env.DEVTO_API_KEY);
    case 'hashnode':
      return Boolean(process.env.HASHNODE_TOKEN && process.env.HASHNODE_PUBLICATION_ID);
    case 'medium':
      return Boolean(process.env.MEDIUM_TOKEN && process.env.MEDIUM_USER_ID);
    case 'linkedin':
      return Boolean(process.env.LINKEDIN_TOKEN && process.env.LINKEDIN_AUTHOR_URN);
    default:
      return false;
  }
}

function runPublisher(script, slug) {
  console.log(`\n--- ${script} for ${slug} ---`);
  try {
    execSync(`node scripts/${script}`, {
      stdio: 'inherit',
      env: { ...process.env, ARTICLE_SLUG: slug },
    });
    return true;
  } catch (e) {
    console.error(`${script} for ${slug} failed:`, e.message);
    return false;
  }
}

function generateSitePage(article) {
  const dir = path.join(process.cwd(), 'app', 'writing', article.slug);
  const pagePath = path.join(dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    console.log(`Site page already exists for ${article.slug}, skipping generation.`);
    return false;
  }
  fs.mkdirSync(dir, { recursive: true });

  // Convert markdown body to React-friendly HTML.
  // Keep this conservative: paragraphs and h2 headings only.
  // Anything fancier should be added by hand before scheduling.
  const html = article.body
    .split(/\n\n+/)
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('## ')) {
        return `<h2>${escapeHtml(trimmed.slice(3))}</h2>`;
      }
      if (trimmed === '---') return '<hr />';
      if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
        return `<p className="endnote">${escapeHtml(trimmed.slice(1, -1))}</p>`;
      }
      return `<p>${escapeHtml(trimmed)}</p>`;
    })
    .join('\n        ');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    author: {
      '@type': 'Person',
      name: 'Stephan Claxton',
      url: 'https://stephanclaxton.com',
    },
    datePublished: article.publishAt || article.date || new Date().toISOString(),
    publisher: { '@type': 'Person', name: 'Stephan Claxton' },
  };

  const tsx = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ${JSON.stringify(article.title)},
  description: ${JSON.stringify(article.description)},
  openGraph: {
    title: ${JSON.stringify(article.title)},
    description: ${JSON.stringify(article.description)},
    type: "article",
    publishedTime: ${JSON.stringify(article.publishAt || article.date || '')},
    authors: ["Stephan Claxton"],
  },
};

const articleSchema = ${JSON.stringify(articleSchema, null, 2)};

export default function Article() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="article">
        <div className="meta">Essay</div>
        <h1>${escapeHtml(article.title)}</h1>
        <div className="byline">
          Stephan Claxton, Systems Engineer at Applied Intuition
        </div>

        ${html}
      </article>
    </>
  );
}
`;
  fs.writeFileSync(pagePath, tsx);
  console.log(`Generated site page: ${pagePath}`);
  return true;
}

function escapeHtml(s) {
  return s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
}

function setOutput(key, value) {
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
  }
  console.log(`::set-output ${key}=${value}`);
}

async function main() {
  const slugs = listScheduledArticles();
  if (slugs.length === 0) {
    console.log('No articles in content/articles/');
    setOutput('any_published', 'false');
    setOutput('slugs', '');
    return;
  }

  const publishedThisRun = [];

  for (const slug of slugs) {
    const article = loadArticle(slug);
    if (!isDue(article)) {
      console.log(`⏳ ${slug}: not due yet (publishAt=${article.publishAt || 'none'})`);
      continue;
    }

    const remaining = platformsRemaining(slug);
    if (remaining.length === 0) {
      console.log(`✓ ${slug}: already fully published`);
      continue;
    }

    console.log(`\n========================================`);
    console.log(`Publishing ${slug} → ${remaining.join(', ')}`);
    console.log(`========================================`);

    let anySucceeded = false;

    if (remaining.includes('site')) {
      const generated = generateSitePage(article);
      if (generated) {
        // Mark site as published by updating state directly
        const { markPublished } = require('./lib/published-state');
        markPublished(slug, 'site', article.canonicalUrl);
        anySucceeded = true;
      }
    }
    if (remaining.includes('devto')) {
      if (runPublisher('publish-devto.js', slug)) anySucceeded = true;
    }
    if (remaining.includes('hashnode')) {
      if (runPublisher('publish-hashnode.js', slug)) anySucceeded = true;
    }
    if (remaining.includes('medium')) {
      if (runPublisher('publish-medium.js', slug)) anySucceeded = true;
    }
    if (remaining.includes('linkedin')) {
      if (runPublisher('publish-linkedin.js', slug)) anySucceeded = true;
    }

    if (anySucceeded) publishedThisRun.push(slug);
  }

  setOutput('any_published', publishedThisRun.length > 0 ? 'true' : 'false');
  setOutput('slugs', publishedThisRun.join(','));

  console.log(`\nRun complete. Published this run: ${publishedThisRun.join(', ') || '(none)'}`);
}

main().catch((err) => {
  console.error('Scheduler failed:', err);
  process.exit(1);
});
