import { Link } from 'react-router-dom';
import { formatDate } from '../utils/posts';
import { TagList } from './TagList';

export function PostCard({ post }) {
  return (
    <article className="post-card">
      <header className="post-card-header">
        <Link to={`/post/${post.slug}`} className="post-card-title">
          <h2>{post.title}</h2>
        </Link>
        <div className="post-card-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="separator">•</span>
          <span>{post.readingTime}</span>
          <span className="separator">•</span>
          <span>{post.author}</span>
        </div>
      </header>
      <p className="post-card-excerpt">{post.excerpt}</p>
      <footer className="post-card-footer">
        <TagList tags={post.tags} />
        <Link to={`/post/${post.slug}`} className="read-more">
          Read more →
        </Link>
      </footer>
    </article>
  );
}
