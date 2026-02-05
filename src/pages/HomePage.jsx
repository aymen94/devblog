import { useState, useMemo } from 'react';
import { getAllPosts, getAllTags } from '../utils/posts';
import { posts } from '../data/posts';
import { PostCard } from '../components/PostCard';
import { SearchBar } from '../components/SearchBar';
import { PostControls } from '../components/PostControls';
import { Pagination } from '../components/Pagination';
import { SEOHead } from '../components/SEOHead';
import {postsPerPageValue} from '../config/site';

export function HomePage() {
  const allPosts = getAllPosts();
  const tags = getAllTags();

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' = oldest first (default)
  const [postsPerPage, setPostsPerPage] = useState(postsPerPageValue);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedPosts = useMemo(() => {
    let result = [...allPosts];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [allPosts, searchQuery, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredAndSortedPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredAndSortedPosts, currentPage, postsPerPage]);

  // Reset to page 1 when filters change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    setCurrentPage(1);
  };

  const handlePostsPerPageChange = (count) => {
    setPostsPerPage(count);
    setCurrentPage(1);
  };

  const publishedPosts = posts.filter((post) => post.published);

  return (
    <div className="home-page">
      <SEOHead
        title="Home"
        description="A developer blog about coding, web development, and open source projects."
        type="website"
      />

      <SearchBar value={searchQuery} onChange={handleSearchChange} />

      <section className="posts-section">


        <PostControls
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
          postsPerPage={postsPerPage}
          onPostsPerPageChange={handlePostsPerPageChange}
        />

        {allPosts.length === 0 ? (
          <p className="no-posts">
            No posts yet. Add markdown files to <code>src/posts/</code> and run{' '}
            <code>npm run generate-posts</code>
          </p>
        ) : paginatedPosts.length === 0 ? (
          <p className="no-posts">No posts found matching "{searchQuery}"</p>
        ) : (
          <>
            <p className="posts-count">
              Showing {paginatedPosts.length} of {filteredAndSortedPosts.length} posts
            </p>
            <div className="posts-grid">
              {paginatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </section>
    </div>
  );
}
