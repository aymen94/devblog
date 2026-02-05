import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-symbol">{'⚡'}</span>
          devblog
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <a 
            href="https://github.com/aymen94/devblog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
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
  );
}
