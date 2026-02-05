import { useMemo, useEffect } from 'react';
import { parseMarkdown } from '../utils/markdown';

export function PostContent({ content }) {
  const htmlContent = useMemo(() => parseMarkdown(content), [content]);

  useEffect(() => {
    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('.post-content pre');
    
    codeBlocks.forEach((pre) => {
      if (pre.querySelector('.code-copy-btn')) return;
      
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      
      const header = document.createElement('div');
      header.className = 'code-block-header';
      
      const codeElement = pre.querySelector('code');
      const language = codeElement?.className?.replace('language-', '') || '';
      
      if (language) {
        const langSpan = document.createElement('span');
        langSpan.className = 'code-language';
        langSpan.textContent = language;
        header.appendChild(langSpan);
      }
      
      const copyBtn = document.createElement('button');
      copyBtn.className = 'code-copy-btn';
      copyBtn.textContent = '📋 Copy';
      copyBtn.onclick = async () => {
        const code = codeElement?.textContent || pre.textContent;
        try {
          await navigator.clipboard.writeText(code);
          copyBtn.textContent = '✓ Copied';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = '📋 Copy';
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      };
      
      header.appendChild(copyBtn);
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });

    // Add IDs to headings for table of contents
    const headings = document.querySelectorAll('.post-content h2, .post-content h3, .post-content h4');
    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent
          .toLowerCase()
          .replace(/[^\w]+/g, '-')
          .replace(/^-|-$/g, '');
      }
    });
  }, [htmlContent]);

  return (
    <div 
      className="post-content prose"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
