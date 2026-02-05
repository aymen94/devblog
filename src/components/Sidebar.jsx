import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { posts } from '../data/posts';
import { ShareButtons } from './ShareButtons';
import { TableOfContents } from './TableOfContents';
import { LatestPosts } from './LatestPosts';
import { Topics } from './Topics';
import { SearchBar } from './SearchBar';

export function Sidebar({ position = 'left' }) {
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    // Check if we're on a post page
    const isPostPage = location.pathname.startsWith('/post/');
    const currentSlug = isPostPage ? location.pathname.split('/post/')[1] : null;
    const currentPost = currentSlug ? posts.find(p => p.slug === currentSlug) : null;

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = currentPost?.title || 'DevBlog';

    return (
        <aside className={`sidebar sidebar-${position}`}>
            {position === 'left' && (
                <>
                    <div className="sidebar-section sidebar-search">
                        <h3>Search</h3>
                        <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    </div>
                    <Topics />
                </>
            )}

            {position === 'right' && (
                <>
                    <LatestPosts />
                    {isPostPage && currentPost?.content && (
                        <TableOfContents content={currentPost.content} />
                    )}
                    {isPostPage && <ShareButtons title={shareTitle} url={shareUrl} />}
                </>
            )}
        </aside>
    );
}
