import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function processImagePath(imagePath: string | undefined): string {
  if (!imagePath) return '/placeholder.jpg';
  // Remove the ~ alias and ensure the path starts with /
  return imagePath.replace(/^~\/assets/, '/assets');
}

export async function findLatestPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data } = matter(content);
      
      return {
        slug: file.replace('.md', ''),
        title: data.title,
        publishDate: data.publishDate,
        excerpt: data.excerpt,
        image: processImagePath(data.image),
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return posts;
}

export async function findPostBySlug(slug: string) {
  if (!fs.existsSync(BLOG_DIR)) {
    return null;
  }

  const filepath = path.join(BLOG_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filepath)) {
    return null;
  }

  const content = fs.readFileSync(filepath, 'utf8');
  const { data, content: markdown } = matter(content);

  return {
    slug,
    title: data.title,
    publishDate: data.publishDate,
    excerpt: data.excerpt,
    image: processImagePath(data.image),
    tags: data.tags || [],
    content: marked(markdown),
  };
}
