import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export function PostNavigation({ currentSlug }) {
  const publishedPosts = posts.filter((p) => p.published);
  const currentIndex = publishedPosts.findIndex((p) => p.slug === currentSlug);
  
  const prevPost = currentIndex > 0 ? publishedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < publishedPosts.length - 1 ? publishedPosts[currentIndex + 1] : null;

  if (!prevPost && !nextPost) return null;

  return (
    <nav className="post-navigation">
      <div className="post-nav-item post-nav-prev">
        {prevPost && (
          <Link to={`/post/${prevPost.slug}`}>
            <span className="post-nav-label">← Previous</span>
            <span className="post-nav-title">{prevPost.title}</span>
          </Link>
        )}
      </div>
      <div className="post-nav-item post-nav-next">
        {nextPost && (
          <Link to={`/post/${nextPost.slug}`}>
            <span className="post-nav-label">Next →</span>
            <span className="post-nav-title">{nextPost.title}</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
