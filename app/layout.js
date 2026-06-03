import './globals.css';
import Link from 'next/link';
import { getAllPages } from '../lib/wiki';

export const metadata = {
  title: 'UET-1 Wiki',
  description: 'The UET-1 universe wiki',
};

const CATEGORY_LABELS = {
  stories: 'Stories',
  characters: 'Characters',
  world: 'World',
  concepts: 'Concepts',
};

const CATEGORY_ORDER = ['stories', 'characters', 'world', 'concepts'];

export default function RootLayout({ children }) {
  const pages = getAllPages();

  // Group by category
  const grouped = {};
  for (const cat of CATEGORY_ORDER) {
    grouped[cat] = pages.filter(p => p.category === cat);
  }

  return (
    <html lang="en">
      <head>
        <script src="https://hypothes.is/embed.js" async></script>
      </head>
      <body>
        <div className="wiki-shell">
          <nav className="wiki-sidebar" aria-label="Wiki navigation">
            <div className="wiki-sidebar-logo">
              <Link href="/">
                <div className="logo-title">UET-1 Wiki</div>
                <div className="logo-sub">The UET-1 Universe</div>
              </Link>
            </div>

            <div className="wiki-nav-section">
              <div className="wiki-nav-heading">Navigation</div>
              <ul>
                <li><Link href="/">Main page</Link></li>
                <li><Link href="/schema">Schema</Link></li>
                <li><Link href="/log">Change log</Link></li>
              </ul>
            </div>

            {CATEGORY_ORDER.map(cat => (
              grouped[cat].length > 0 && (
                <div className="wiki-nav-section" key={cat}>
                  <div className="wiki-nav-heading">{CATEGORY_LABELS[cat]}</div>
                  <ul>
                    {grouped[cat].map(page => (
                      <li key={page.href}>
                        <Link href={page.href}>{page.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}

            <div className="wiki-nav-section">
              <div className="wiki-nav-heading">Maps</div>
              <ul>
                <li><a href="/uet1-route-map.html">UET-1 Route Map</a></li>
              </ul>
            </div>
          </nav>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <main className="wiki-main">
              {children}
            </main>
            <footer className="wiki-footer">
              UET-1 Wiki · Maintained by Claude · Content is fictional
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
