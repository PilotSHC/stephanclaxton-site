// Regenerate homepage writing list, /writing index, and sitemap from
// content/published.json (site platform only).

const fs = require('fs');
const path = require('path');
const { read: readState } = require('./published-state');
const { loadArticle } = require('./load-article');

const SITE_URL = process.env.SITE_URL || 'https://www.stephanclaxton.com';

function monthLabel(publishAt) {
  const d = new Date(publishAt);
  if (isNaN(d.getTime())) return '2026';
  return d.toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function dateTimeAttr(publishAt) {
  const d = new Date(publishAt);
  if (isNaN(d.getTime())) return '2026-01';
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

function escapeJsxText(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function listPublishedArticles() {
  const state = readState();
  const slugs = Object.keys(state).filter((slug) => state[slug]?.site);
  const articles = slugs.map((slug) => {
    const article = loadArticle(slug);
    const publishedAt =
      state[slug].site.publishedAt || article.publishAt || new Date().toISOString();
    return { ...article, publishedAt };
  });
  articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return articles;
}

function renderListItems(articles, liIndent) {
  const pad = liIndent;
  return articles
    .map((article) => {
      const title = escapeJsxText(article.title);
      const dek = escapeJsxText(article.description);
      const label = monthLabel(article.publishAt || article.publishedAt);
      const dateTime = dateTimeAttr(article.publishAt || article.publishedAt);
      return `${pad}<li>
${pad}  <time dateTime="${dateTime}">${label}</time>
${pad}  <div>
${pad}    <Link href="/writing/${article.slug}">
${pad}      ${title}
${pad}    </Link>
${pad}    <p className="dek">
${pad}      ${dek}
${pad}    </p>
${pad}  </div>
${pad}</li>`;
    })
    .join('\n');
}

function replaceWritingListBlockWithArticles(filePath, articles) {
  const src = fs.readFileSync(filePath, 'utf8');
  const startMarker = '<ul className="writing-list';
  const start = src.indexOf(startMarker);
  if (start === -1) {
    throw new Error(`${filePath}: could not find writing-list <ul>`);
  }
  const ulOpenEnd = src.indexOf('>', start) + 1;
  const ulClose = src.indexOf('</ul>', ulOpenEnd);
  if (ulClose === -1) {
    throw new Error(`${filePath}: could not find closing </ul>`);
  }
  const indentMatch = src.slice(ulOpenEnd, ulOpenEnd + 120).match(/\n(\s+)/);
  const liIndent = indentMatch ? indentMatch[1] : '          ';
  const listItems = renderListItems(articles, liIndent);
  const inner = listItems ? `\n${listItems}\n${liIndent.slice(0, Math.max(0, liIndent.length - 2))}` : '\n';
  const next = src.slice(0, ulOpenEnd) + inner + src.slice(ulClose);
  fs.writeFileSync(filePath, next);
}

function updateSitemap(articles) {
  const sitemapPath = path.join(process.cwd(), 'app', 'sitemap.ts');
  const articleEntries = articles
    .map(
      (a) => `    {
      url: \`\${base}/writing/${a.slug}\`,
      lastModified: now,
      priority: 0.8,
    }`,
    )
    .join(',\n');

  const content = `import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "${SITE_URL}";
  const now = new Date();
  return [
    { url: \`\${base}/\`, lastModified: now, priority: 1.0 },
    { url: \`\${base}/about\`, lastModified: now, priority: 0.9 },
    { url: \`\${base}/writing\`, lastModified: now, priority: 0.9 },
${articleEntries ? articleEntries + ',\n' : ''}  ];
}
`;
  fs.writeFileSync(sitemapPath, content);
}

function updateSiteIndex() {
  const articles = listPublishedArticles();
  if (articles.length === 0) {
    console.log('update-site-index: no site-published articles, skipping.');
    return false;
  }

  replaceWritingListBlockWithArticles(
    path.join(process.cwd(), 'app', 'writing', 'page.tsx'),
    articles,
  );
  replaceWritingListBlockWithArticles(path.join(process.cwd(), 'app', 'page.tsx'), articles);
  updateSitemap(articles);
  console.log(`update-site-index: refreshed ${articles.length} article(s) in index + sitemap.`);
  return true;
}

module.exports = { updateSiteIndex, listPublishedArticles };
