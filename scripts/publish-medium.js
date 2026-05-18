// scripts/publish-medium.js
// Docs: https://github.com/Medium/medium-api-docs

const { loadArticle } = require('./lib/load-article');
const { isPublishedTo, markPublished } = require('./lib/published-state');

const PLATFORM = 'medium';

async function main() {
  const { MEDIUM_TOKEN, MEDIUM_USER_ID, ARTICLE_SLUG } = process.env;

  if (!MEDIUM_TOKEN || !MEDIUM_USER_ID) {
    console.log('Medium credentials not configured. Skipping.');
    return;
  }

  if (isPublishedTo(ARTICLE_SLUG, PLATFORM)) {
    console.log(`Medium: ${ARTICLE_SLUG} already published, skipping.`);
    return;
  }

  const article = loadArticle(ARTICLE_SLUG);

  const payload = {
    title: article.title,
    contentFormat: 'markdown',
    content: `# ${article.title}\n\n${article.body}\n\n---\n\n*Originally published at [stephanclaxton.com](${article.canonicalUrl}).*`,
    canonicalUrl: article.canonicalUrl,
    tags: Array.isArray(article.tags) ? article.tags.slice(0, 5) : [],
    publishStatus: 'public',
  };

  const res = await fetch(
    `https://api.medium.com/v1/users/${MEDIUM_USER_ID}/posts`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${MEDIUM_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );

  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }

  if (!res.ok) {
    console.error('Medium publish failed:', res.status, data);
    process.exit(1);
  }

  markPublished(ARTICLE_SLUG, PLATFORM, data.data?.url);
  console.log(`✓ Medium: ${data.data?.url}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
