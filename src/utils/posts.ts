import fs from 'fs/promises'; // Use fs.promises for async operations
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function processImagePath(imagePath: string | undefined): string {
  if (!imagePath) return '/placeholder.jpg';
  return imagePath.replace(/^~\/assets/, '/assets');
}

export async function findLatestPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = await fs.readdir(BLOG_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const content = await fs.readFile(path.join(BLOG_DIR, file), 'utf8');
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
  );

  posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
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

  const content = await fs.readFile(filepath, 'utf8');
  const { data, content: markdown } = matter(content);

  const processedContent = await remark()
    .use(html)
    .process(markdown);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    publishDate: data.publishDate,
    excerpt: data.excerpt,
    image: processImagePath(data.image),
    tags: data.tags || [],
    content: contentHtml,
  };
}