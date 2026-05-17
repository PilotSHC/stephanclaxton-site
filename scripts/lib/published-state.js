// scripts/lib/published-state.js
// Tracks which articles have been published to which platforms.
// Stored in content/published.json — committed back to repo by the workflow.

const fs = require('fs');
const path = require('path');

const STATE_PATH = path.join(process.cwd(), 'content', 'published.json');

function read() {
  if (!fs.existsSync(STATE_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
  } catch (e) {
    console.warn('Could not parse published.json, treating as empty:', e.message);
    return {};
  }
}

function write(state) {
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2) + '\n');
}

function isPublishedTo(slug, platform) {
  const state = read();
  return Boolean(state[slug] && state[slug][platform]);
}

function markPublished(slug, platform, url) {
  const state = read();
  if (!state[slug]) state[slug] = {};
  state[slug][platform] = {
    publishedAt: new Date().toISOString(),
    url: url || null,
  };
  write(state);
}

module.exports = { read, write, isPublishedTo, markPublished, STATE_PATH };
