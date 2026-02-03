import { useMemo } from 'react';
import { parseMarkdown } from '../utils/markdown';

export function PostContent({ content }) {
  const htmlContent = useMemo(() => parseMarkdown(content), [content]);

  return (
    <div 
      className="post-content prose"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
