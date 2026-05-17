// scripts/publish-devto.js
// Docs: https://developers.forem.com/api/v1#tag/articles/operation/createArticle

const { loadArticle } = require('./lib/load-article');
const { isPublishedTo, markPublished } = require('./lib/published-state');

const PLATFORM = 'devto';

async function main() {
  const { DEVTO_API_KEY, ARTICLE_SLUG } = process.env;

  if (!DEVTO_API_KEY) {
    console.log('Dev.to API key not configured — skipping.');
    return;
  }

  if (isPublishedTo(ARTICLE_SLUG, PLATFORM)) {
    console.log(`Dev.to: ${ARTICLE_SLUG} already published, skipping.`);
    return;
  }

  const article = loadArticle(ARTICLE_SLUG);

  const payload = {
    article: {
      title: article.title,
      published: true,
      body_markdown: article.body,
      canonical_url: article.canonicalUrl,
      description: article.description,
      tags: Array.isArray(article.tags) ? article.tags.slice(0, 4) : [],
    },
  };

  const res = await fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: {
      'api-key': DEVTO_API_KEY,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.forem.api-v1+json',
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }

  if (!res.ok) {
    console.error('Dev.to publish failed:', res.status, data);
    process.exit(1);
  }

  markPublished(ARTICLE_SLUG, PLATFORM, data.url);
  console.log(`✓ Dev.to: ${data.url}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
