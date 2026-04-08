import { getPageBySlug, getAllPageSlugs } from '../../lib/wiki';
import { markdownToHtml, extractHeadings } from '../../lib/markdown';
import WikiPageContent from '../../components/WikiPageContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllPageSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return { title: 'Not found — UET-1 Wiki' };

  const h1Match = page.content.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1] : slug[slug.length - 1];
  return { title: `${title} — UET-1 Wiki` };
}

export default async function WikiPage({ params }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const html = await markdownToHtml(page.content, page.relPath);
  const headings = extractHeadings(html);

  const h1Match = page.content.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1] : slug[slug.length - 1];

  return <WikiPageContent html={html} headings={headings} title={title} />;
}
