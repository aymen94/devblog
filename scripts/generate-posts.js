import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'src', 'posts');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'generated', 'posts-manifest.json');

function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function extractExcerpt(content, maxLength = 160) {
  const plainText = content
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*|__/g, '')
    .replace(/\*|_/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/\n+/g, ' ')
    .trim();

  if (plainText.length <= maxLength) return plainText;
  return plainText.slice(0, maxLength).trim() + '...';
}

function generateSlug(filename) {
  return filename.replace(/\.md$/, '');
}

function generatePosts() {
  // Ensure directories exist
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
    console.log(`📁 Created posts directory: ${POSTS_DIR}`);
  }

  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md'));
  
  const posts = files.map((filename) => {
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const slug = data.slug || generateSlug(filename);
    
    return {
      title: data.title || 'Untitled',
      slug,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      description: data.description || '',
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      published: data.published !== false,
      readingTime: calculateReadingTime(content),
      excerpt: data.description || extractExcerpt(content),
    };
  });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
  
  console.log(`✅ Generated manifest with ${posts.length} posts`);
  posts.forEach((post) => {
    const status = post.published ? '📄' : '📝 (draft)';
    console.log(`   ${status} ${post.title}`);
  });
}

generatePosts();
