'use client';

export default function WikiPageContent({ html, headings, title }) {
  const showToc = headings.length >= 3;

  return (
    <>
      <div className="wiki-page-header">
        <h1>{title}</h1>
        <div className="wiki-page-subhead">From the UET-1 Wiki</div>
        <button
          className="wiki-print-btn"
          onClick={() => window.print()}
          aria-label="Download as PDF"
        >
          ↓ Download PDF
        </button>
      </div>

      <article className="wiki-content">
        {showToc && (
          <div className="wiki-toc">
            <div className="wiki-toc-title">Contents</div>
            <ol>
              {headings.map((h, i) => (
                <li key={h.id} className={h.level === 3 ? 'toc-h3' : ''}>
                  <a href={`#${h.id}`}>{h.text}</a>
                </li>
              ))}
            </ol>
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
}
