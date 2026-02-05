import { useEffect } from 'react';

export function SEOHead({ 
  title, 
  description, 
  keywords = [], 
  author,
  publishedDate,
  type = 'article',
  image 
}) {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | DevBlog` : 'DevBlog - Developer Coding Blog';

    // Helper to update meta tags
    const setMeta = (name, content, isProperty = false) => {
      if (!content) return;
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMeta('description', description);
    setMeta('keywords', keywords.join(', '));
    setMeta('author', author);

    // Open Graph tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:image', image, true);

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    // Article specific
    if (publishedDate) {
      setMeta('article:published_time', publishedDate, true);
    }
  }, [title, description, keywords, author, publishedDate, type, image]);

  return null;
}
