import { getPageBySlug } from '../lib/wiki';
import { markdownToHtml, extractHeadings } from '../lib/markdown';
import WikiPageContent from '../components/WikiPageContent';

export default async function IndexPage() {
  const page = getPageBySlug([]);
  if (!page) return <p>Index not found.</p>;

  const html = await markdownToHtml(page.content, page.relPath);
  const headings = extractHeadings(html);

  return <WikiPageContent html={html} headings={headings} title="UET-1 Wiki" />;
}
