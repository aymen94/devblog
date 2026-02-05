import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, formatDate } from '../utils/posts';
import { PostContent } from '../components/PostContent';
import { TagList } from '../components/TagList';
import { ReadingProgress } from '../components/ReadingProgress';
import { RelatedPosts } from '../components/RelatedPosts';
import { BackToTop } from '../components/BackToTop';
import { PostNavigation } from '../components/PostNavigation';
import { SEOHead } from '../components/SEOHead';
import { ReadingTimeRemaining } from '../components/ReadingTimeRemaining';

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
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        keywords={post.tags}
        author={post.author}
        publishedDate={post.date}
      />
      <ReadingProgress />
      <ReadingTimeRemaining totalReadingTime={post.readingTime} />
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

        <div className="post-main">
          <PostContent content={post.content} />
        </div>

        <footer className="post-footer">
          <PostNavigation currentSlug={post.slug} />
          <RelatedPosts currentSlug={post.slug} tags={post.tags} />
        </footer>
      </article>
      <BackToTop />
    </>
  );
}
