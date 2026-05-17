// scripts/publish-linkedin.js
// Posts a SHARE linking to the canonical site URL.
// Docs: https://learn.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/posts-api

const { loadArticle } = require('./lib/load-article');
const { isPublishedTo, markPublished } = require('./lib/published-state');

const PLATFORM = 'linkedin';

async function main() {
  const { LINKEDIN_TOKEN, LINKEDIN_AUTHOR_URN, ARTICLE_SLUG } = process.env;

  if (!LINKEDIN_TOKEN || !LINKEDIN_AUTHOR_URN) {
    console.log('LinkedIn credentials not configured — skipping.');
    return;
  }

  if (isPublishedTo(ARTICLE_SLUG, PLATFORM)) {
    console.log(`LinkedIn: ${ARTICLE_SLUG} already published, skipping.`);
    return;
  }

  const article = loadArticle(ARTICLE_SLUG);

  const commentary =
    article.linkedinHook ||
    `${article.title}\n\n${article.description}\n\nRead the full piece →`;

  const payload = {
    author: LINKEDIN_AUTHOR_URN,
    commentary,
    visibility: 'PUBLIC',
    distribution: {
      feedDistribution: 'MAIN_FEED',
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    content: {
      article: {
        source: article.canonicalUrl,
        title: article.title,
        description: article.description,
      },
    },
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  };

  const res = await fetch('https://api.linkedin.com/rest/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${LINKEDIN_TOKEN}`,
      'Content-Type': 'application/json',
      'LinkedIn-Version': '202405',
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error('LinkedIn publish failed:', res.status, text);
    process.exit(1);
  }
  const postId = res.headers.get('x-restli-id');
  markPublished(ARTICLE_SLUG, PLATFORM, postId ? `https://www.linkedin.com/feed/update/${postId}/` : null);
  console.log(`✓ LinkedIn: post ${postId} published`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
