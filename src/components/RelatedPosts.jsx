import { Link } from 'react-router-dom';
import { getAllPosts, formatDate } from '../utils/posts';

export function RelatedPosts({ currentSlug, tags }) {
  const allPosts = getAllPosts();
  
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const commonTags = post.tags.filter((tag) => 
        tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
      );
      return { ...post, relevance: commonTags.length };
    })
    .filter((post) => post.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="related-posts">
      <h3>Related Posts</h3>
      <div className="related-posts-grid">
        {relatedPosts.map((post) => (
          <Link key={post.slug} to={`/post/${post.slug}`} className="related-post-card">
            <h4>{post.title}</h4>
            <div className="related-post-meta">
              <time>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
