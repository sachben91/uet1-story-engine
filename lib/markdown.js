import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import path from 'path';

// Transform .md links to URL paths, relative to the source file's wiki location
function transformMdLinks(html, sourceRelPath) {
  const sourceDir = path.posix.dirname(sourceRelPath); // e.g. 'characters'

  return html.replace(
    /href="([^"#]*?\.md)(#[^"]*)?">/g,
    (match, mdPath, anchor = '') => {
      // Skip external links
      if (mdPath.startsWith('http')) return match;

      // Resolve relative path from source dir
      const resolved = path.posix.normalize(
        path.posix.join(sourceDir === '.' ? '' : sourceDir, mdPath)
      );

      // Strip leading slashes, convert to URL
      const urlPath = '/' + resolved.replace(/^\//, '').replace(/\.md$/, '');
      return `href="${urlPath}${anchor}">`;
    }
  );
}

// Extract headings from HTML for TOC
export function extractHeadings(html) {
  const headings = [];
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>(.*?)<\/h[23]>/gs;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const id = match[2];
    // Strip inner HTML tags to get plain text
    const text = match[3].replace(/<[^>]+>/g, '');
    headings.push({ level, id, text });
  }
  return headings;
}

export async function markdownToHtml(content, sourceRelPath = '') {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  const html = transformMdLinks(String(result), sourceRelPath);
  return html;
}
