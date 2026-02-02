import { Link } from 'react-router-dom';

export function Header() {
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
        </nav>
      </div>
    </header>
  );
}
