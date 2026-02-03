export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} devblog — Built for developers, by developers</p>
        <p className="footer-links">
          <a 
            href="https://github.com/aymen94/devblog" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="separator">•</span>
          <a href="/rss.xml">RSS</a>
        </p>
      </div>
    </footer>
  );
}
