import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useTheme } from '../context/ThemeContext';

export function Layout({ children }) {
  const { darkMode, toggleTheme } = useTheme();

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
            <button 
              onClick={toggleTheme}
              className="theme-toggle" 
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
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
          <p>
            © {new Date().getFullYear()} powered by   {''}
            <a
              href="https://github.com/aymen94/devblog"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevBlog
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
