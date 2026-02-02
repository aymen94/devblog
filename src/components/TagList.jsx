import { Link } from 'react-router-dom';

export function TagList({ tags, clickable = true }) {
  if (clickable) {
    return (
      <div className="tag-list">
        {tags.map((tag) => (
          <Link 
            key={tag} 
            to={`/tag/${tag.toLowerCase()}`} 
            className="tag"
          >
            #{tag}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          #{tag}
        </span>
      ))}
    </div>
  );
}
