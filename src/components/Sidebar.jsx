import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { posts } from '../data/posts';
import { ShareButtons } from './ShareButtons';
import { LatestPosts } from './LatestPosts';
import { Topics } from './Topics';

const POST_PATH_PREFIX = '/post/';

function useCurrentPost() {
    const { pathname } = useLocation();

    return useMemo(() => {
        if (!pathname.startsWith(POST_PATH_PREFIX)) {
            return null;
        }
        const slug = pathname.slice(POST_PATH_PREFIX.length);
        return posts.find((post) => post.slug === slug) ?? null;
    }, [pathname]);
}


function RightSidebar({ currentPost }) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = currentPost?.title ?? 'DevBlog';

    return (
        <>
            <LatestPosts />
            <ShareButtons title={shareTitle} url={shareUrl} />
        </>
    );
}

export function Sidebar({ position = 'left' }) {
    const currentPost = useCurrentPost();
    
    const leftContent = (
        <>
            <Topics />
        </>
    );
    
    const content = position === 'left' ? leftContent : <RightSidebar currentPost={currentPost} />;

    return (
        <aside className={`sidebar sidebar-${position}`}>
            {content}
        </aside>
    );
}
