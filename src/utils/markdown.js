import { marked } from 'marked';

// Configure marked for better rendering
marked.setOptions({
  gfm: true,
  breaks: true,
});

// Custom renderer for syntax highlighting ready code blocks
const renderer = new marked.Renderer();

renderer.code = ({ text, lang }) => {
  const language = lang || 'plaintext';
  return `<pre class="code-block"><code class="language-${language}">${escapeHtml(text)}</code></pre>`;
};

renderer.link = ({ href, title, text }) => {
  const isExternal = href.startsWith('http');
  const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
  const titleAttr = title ? ` title="${title}"` : '';
  return `<a href="${href}"${titleAttr}${attrs}>${text}</a>`;
};

marked.use({ renderer });

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export function parseMarkdown(content) {
  return marked(content);
}

export function extractExcerpt(content, maxLength = 160) {
  // Remove markdown syntax for excerpt
  const plainText = content
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*|__/g, '')
    .replace(/\*|_/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/\n+/g, ' ')
    .trim();

  if (plainText.length <= maxLength) return plainText;
  return plainText.slice(0, maxLength).trim() + '...';
}
