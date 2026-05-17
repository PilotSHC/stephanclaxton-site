// scripts/publish-hashnode.js
// Hashnode uses GraphQL. Docs: https://apidocs.hashnode.com/

const { loadArticle } = require('./lib/load-article');
const { isPublishedTo, markPublished } = require('./lib/published-state');

const PLATFORM = 'hashnode';

async function main() {
  const { HASHNODE_TOKEN, HASHNODE_PUBLICATION_ID, ARTICLE_SLUG } = process.env;

  if (!HASHNODE_TOKEN || !HASHNODE_PUBLICATION_ID) {
    console.log('Hashnode credentials not configured — skipping.');
    return;
  }

  if (isPublishedTo(ARTICLE_SLUG, PLATFORM)) {
    console.log(`Hashnode: ${ARTICLE_SLUG} already published, skipping.`);
    return;
  }

  const article = loadArticle(ARTICLE_SLUG);

  const mutation = `
    mutation PublishPost($input: PublishPostInput!) {
      publishPost(input: $input) {
        post { id slug url }
      }
    }
  `;

  const variables = {
    input: {
      title: article.title,
      contentMarkdown: article.body,
      publicationId: HASHNODE_PUBLICATION_ID,
      tags: (Array.isArray(article.tags) ? article.tags : [])
        .slice(0, 5)
        .map((name) => ({ slug: name.toLowerCase().replace(/\s+/g, '-'), name })),
      originalArticleURL: article.canonicalUrl,
      subtitle: article.description,
    },
  };

  const res = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      Authorization: HASHNODE_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }

  if (!res.ok || data.errors) {
    console.error('Hashnode publish failed:', res.status, JSON.stringify(data));
    process.exit(1);
  }

  const url = data.data?.publishPost?.post?.url;
  markPublished(ARTICLE_SLUG, PLATFORM, url);
  console.log(`✓ Hashnode: ${url}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
