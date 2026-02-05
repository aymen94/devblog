export function PostControls({ 
  sortOrder, 
  onSortChange, 
  postsPerPage, 
  onPostsPerPageChange 
}) {
  return (
    <div className="post-controls">
      <div className="control-group">
        <label htmlFor="sort-order">Sort:</label>
        <button 
          id="sort-order"
          onClick={onSortChange}
          className="sort-button"
        >
          {sortOrder === 'asc' ? '📅 Oldest first' : '📅 Newest first'}
        </button>
      </div>
      <div className="control-group">
        <label htmlFor="posts-per-page">Posts per page:</label>
        <select
          id="posts-per-page"
          value={postsPerPage}
          onChange={(e) => onPostsPerPageChange(Number(e.target.value))}
          className="posts-per-page-select"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
}
