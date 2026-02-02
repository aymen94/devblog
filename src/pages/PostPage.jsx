import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, formatDate } from '../utils/posts';
import { PostContent } from '../components/PostContent';
import { TagList } from '../components/TagList';

export function PostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="not-found">
        <h1>Post Not Found</h1>
        <p>The post you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  return (
    <article className="post-page">
      <header className="post-header">
        <Link to="/" className="back-link">← Back to Posts</Link>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="separator">•</span>
          <span>{post.readingTime}</span>
          <span className="separator">•</span>
          <span>By {post.author}</span>
        </div>
        <TagList tags={post.tags} />
      </header>

      <PostContent content={post.content} />

      <footer className="post-footer">
        <div className="share-section">
          <span>Share this post:</span>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-link"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-link"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </article>
  );
}
