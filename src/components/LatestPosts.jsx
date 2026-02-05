import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export function LatestPosts({ limit = 5 }) {
    const latestPosts = [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="sidebar-section sidebar-latest">
            <h3>Latest Posts</h3>
            {latestPosts.map(post => (
                <Link key={post.slug} to={`/post/${post.slug}`} className="latest-post-item">
                    {post.title}
                    <span className="latest-post-date">{formatDate(post.date)}</span>
                </Link>
            ))}
        </div>
    );
}
