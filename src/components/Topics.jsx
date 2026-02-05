import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export function Topics() {
    // Get all unique tags with counts
    const tagCounts = posts.reduce((acc, post) => {
        post.tags?.forEach(tag => {
            acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
    }, {});

    return (
        <div className="sidebar-section sidebar-topics">
            <h3>Topics</h3>
            <div className="topic-list">
                {Object.entries(tagCounts).map(([tag, count]) => (
                    <Link key={tag} to={`/tag/${tag}`} className="topic-tag">
                        {tag}
                        <span className="topic-count">({count})</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
