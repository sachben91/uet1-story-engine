import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const WIKI_DIR = path.join(process.cwd(), 'wiki');

// Returns all wiki pages as slug arrays, excluding sources/ and non-.md files
export function getAllPageSlugs() {
  const slugs = [];

  function walk(dir, base = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      if (entry.isDirectory()) {
        if (entry.name === 'sources') continue;
        walk(path.join(dir, entry.name), [...base, entry.name]);
      } else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
        const slug = [...base, entry.name.replace(/\.md$/, '')];
        slugs.push(slug);
      }
    }
  }

  walk(WIKI_DIR);
  return slugs;
}

// Returns all pages with metadata for sidebar navigation
export function getAllPages() {
  const pages = [];

  function walk(dir, base = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      if (entry.isDirectory()) {
        if (entry.name === 'sources') continue;
        walk(path.join(dir, entry.name), [...base, entry.name]);
      } else if (entry.name.endsWith('.md') && entry.name !== 'index.md' && entry.name !== 'schema.md' && entry.name !== 'log.md') {
        const slug = [...base, entry.name.replace(/\.md$/, '')];
        const filePath = path.join(dir, entry.name);
        const raw = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(raw);
        // Extract first H1 as title
        const h1Match = content.match(/^#\s+(.+)$/m);
        const title = h1Match ? h1Match[1] : slug[slug.length - 1];
        pages.push({
          slug,
          href: '/' + slug.join('/'),
          title,
          category: base[0] || 'misc',
        });
      }
    }
  }

  walk(WIKI_DIR);
  return pages;
}

// Read a specific wiki page by slug array
export function getPageBySlug(slug) {
  let filePath;

  if (!slug || slug.length === 0) {
    filePath = path.join(WIKI_DIR, 'index.md');
  } else {
    filePath = path.join(WIKI_DIR, ...slug) + '.md';
  }

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  // Relative path from wiki root, e.g. 'characters/rowan'
  const relPath = slug ? slug.join('/') : 'index';

  return { frontmatter: data, content, relPath };
}
