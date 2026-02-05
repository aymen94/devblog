import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-symbol">&lt;</span>
            DevBlog
            <span className="logo-symbol">/&gt;</span>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link"
            >
              GitHub
            </a>
            <button className="theme-toggle" aria-label="Toggle theme">
              ☀️
            </button>
          </nav>
        </div>
      </header>

      <div className="main-wrapper">
        <Sidebar position="left" />
        <main className="main-content">
          {children}
        </main>
        <Sidebar position="right" />
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} DevBlog. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}
