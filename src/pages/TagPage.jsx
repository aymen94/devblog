import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostsByTag } from '../utils/posts';
import { PostCard } from '../components/PostCard';
import { SearchBar } from '../components/SearchBar';
import { PostControls } from '../components/PostControls';
import { Pagination } from '../components/Pagination';

export function TagPage() {
  const { tag } = useParams();
  const posts = tag ? getPostsByTag(tag) : [];

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [posts, searchQuery, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredAndSortedPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredAndSortedPosts, currentPage, postsPerPage]);

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

  return (
    <div className="tag-page">
      <header className="tag-header">
        <Link to="/" className="back-link">← Back to Posts</Link>
        <h1>Posts tagged with #{tag}</h1>
        <p>{posts.length} post{posts.length !== 1 ? 's' : ''} found</p>
      </header>

<<<<<<< HEAD
      {posts.length > 0 && (
        <>
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
          <PostControls
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
            postsPerPage={postsPerPage}
            onPostsPerPageChange={handlePostsPerPageChange}
          />
        </>
      )}

      {paginatedPosts.length === 0 ? (
        <p className="no-posts">
          {searchQuery ? `No posts found matching "${searchQuery}"` : 'No posts found with this tag.'}
        </p>
      ) : (
        <>
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
=======
      {posts.length === 0 ? (
        <p className="no-posts">No posts found with this tag.</p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
>>>>>>> 198a29221c1f38fae958d15716394daa16231b7c
      )}
    </div>
  );
}
