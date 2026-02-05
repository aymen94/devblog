import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { darkMode, toggleTheme } = useTheme();

=======

export function Header() {
>>>>>>> 198a29221c1f38fae958d15716394daa16231b7c
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
<<<<<<< HEAD
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
=======
>>>>>>> 198a29221c1f38fae958d15716394daa16231b7c
        </nav>
      </div>
    </header>
  );
}
