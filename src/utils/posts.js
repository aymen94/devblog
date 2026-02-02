// Import all markdown files from the posts directory
const postModules = import.meta.glob('../posts/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default' 
});

// Import the generated posts manifest
import postsManifest from '../generated/posts-manifest.json';

export function getAllPosts() {
  return postsManifest
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug) {
  const meta = postsManifest.find((post) => post.slug === slug);
  
  if (!meta) return null;

  const filePath = `../posts/${slug}.md`;
  const rawContent = postModules[filePath];
  
  if (!rawContent) return null;

  // Extract content after frontmatter
  const contentMatch = rawContent.match(/---[\s\S]*?---\s*([\s\S]*)/);
  const content = contentMatch ? contentMatch[1].trim() : rawContent;

  return {
    ...meta,
    content,
  };
}

export function getPostsByTag(tag) {
  return getAllPosts().filter((post) => 
    post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllTags() {
  const posts = getAllPosts();
  const tags = new Set();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
