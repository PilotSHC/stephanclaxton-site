// scripts/lib/load-article.js
// Reads /content/articles/<slug>.md and parses frontmatter.
// Required fields: title, description, slug
// Optional: tags (array), publishAt (ISO 8601), linkedinHook

const fs = require('fs');
const path = require('path');

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error('Missing frontmatter. Article must start with --- block.');
  }
  const [, fmRaw, body] = match;
  const fm = {};
  const lines = fmRaw.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) continue;
    let [, key, value] = m;
    value = value.trim();

    // multiline block scalar: e.g. linkedinHook: |
    if (value === '|') {
      const block = [];
      let j = i + 1;
      while (j < lines.length && (lines[j].startsWith('  ') || lines[j] === '')) {
        block.push(lines[j].replace(/^ {2}/, ''));
        j++;
      }
      fm[key] = block.join('\n').trim();
      i = j - 1;
      continue;
    }

    // strip quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // arrays: tags: [a, b, c]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    }

    fm[key] = value;
  }

  return { frontmatter: fm, body: body.trim() };
}

function loadArticle(slug) {
  const filepath = path.join(
    process.cwd(),
    'content',
    'articles',
    `${slug}.md`,
  );
  if (!fs.existsSync(filepath)) {
    throw new Error(`Article not found: ${filepath}`);
  }
  const raw = fs.readFileSync(filepath, 'utf8');
  const { frontmatter, body } = parseFrontmatter(raw);

  const required = ['title', 'description', 'slug'];
  for (const k of required) {
    if (!frontmatter[k]) {
      throw new Error(`${slug}: missing required frontmatter field: ${k}`);
    }
  }

  return {
    ...frontmatter,
    body,
    canonicalUrl: `${process.env.SITE_URL}/writing/${frontmatter.slug}`,
  };
}

function listScheduledArticles() {
  const dir = path.join(process.cwd(), 'content', 'articles');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

module.exports = { loadArticle, listScheduledArticles };
