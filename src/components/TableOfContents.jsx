import { useState, useEffect } from 'react';

export function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!content) return;

    // Parse headings from markdown content
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const matches = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].replace(/[*_`\[\]]/g, '').trim();
      const id = text.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
      if (text) {
        matches.push({ level, text, id });
      }
    }

    setHeadings(matches);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Show TOC if there's at least 1 heading
  if (headings.length === 0) return null;

  return (
    <nav className="table-of-contents">
      <h3>Table of Contents</h3>
      <ul>
        {headings.map(({ level, text, id }) => (
          <li key={id} className={`toc-level-${level}`}>
            <a
              href={`#${id}`}
              className={activeId === id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
