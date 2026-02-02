import { getAllPosts, getAllTags } from '../utils/posts';
import { PostCard } from '../components/PostCard';
import { TagList } from '../components/TagList';

export function HomePage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to the Blog</h1>
        <p className="hero-subtitle">
          Thoughts, tutorials, and insights on software engineering
        </p>
      </section>

      {tags.length > 0 && (
        <section className="tags-section">
          <h2>Topics</h2>
          <TagList tags={tags} />
        </section>
      )}

      <section className="posts-section">
        <h2>Latest Posts</h2>
        {posts.length === 0 ? (
          <p className="no-posts">
            No posts yet. Add markdown files to <code>src/posts/</code> and run{' '}
            <code>npm run generate-posts</code>
          </p>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
