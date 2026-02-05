import { useState } from 'react';

export function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        {language && <span className="code-language">{language}</span>}
        <button 
          onClick={copyCode} 
          className={`code-copy-btn ${copied ? 'copied' : ''}`}
        >
          {copied ? '✓ Copied' : '📋 Copy'}
        </button>
      </div>
      <pre className={`language-${language || 'text'}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
