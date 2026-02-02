import { useParams, Link } from 'react-router-dom';
import { getPostsByTag } from '../utils/posts';
import { PostCard } from '../components/PostCard';

export function TagPage() {
  const { tag } = useParams();
  const posts = tag ? getPostsByTag(tag) : [];

  return (
    <div className="tag-page">
      <header className="tag-header">
        <Link to="/" className="back-link">← Back to Posts</Link>
        <h1>Posts tagged with #{tag}</h1>
        <p>{posts.length} post{posts.length !== 1 ? 's' : ''} found</p>
      </header>

      {posts.length === 0 ? (
        <p className="no-posts">No posts found with this tag.</p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
