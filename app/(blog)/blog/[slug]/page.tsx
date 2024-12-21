import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { findPostBySlug } from '~/utils/posts';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await findPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} - MetalKraft CNC Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await findPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Convert markdown to HTML
  const htmlContent = marked(post.content);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[#1a3c69] text-sm font-medium transition-colors hover:text-[#112745]"
          >
            <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#112745] tracking-tight">
            {post.title}
          </h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#E8E8E8] px-2.5 sm:px-3 py-1 text-xs font-medium text-[#112745] hover:bg-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="mt-3 sm:mt-4 block text-xs sm:text-sm text-gray-500">
            Published on {new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative mx-auto max-w-4xl mt-[-40px] sm:mt-[-50px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <article 
          className="prose prose-xs sm:prose-sm lg:prose-base mx-auto
            prose-headings:font-bold prose-headings:text-[#112745] 
            prose-h1:text-xl sm:prose-h1:text-2xl lg:prose-h1:text-3xl prose-h1:mb-4 sm:prose-h1:mb-6
            prose-h2:text-lg sm:prose-h2:text-xl lg:prose-h2:text-2xl prose-h2:mt-6 sm:prose-h2:mt-8 prose-h2:mb-3 sm:prose-h2:mb-4
            prose-h3:text-base sm:prose-h3:text-lg lg:prose-h3:text-xl prose-h3:mt-4 sm:prose-h3:mt-6 prose-h3:mb-2 sm:prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#1a3c69] prose-a:no-underline hover:prose-a:underline 
            prose-strong:text-[#112745] 
            prose-img:rounded-lg prose-img:shadow-lg
            prose-ul:list-disc prose-ul:pl-4 sm:prose-ul:pl-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:pl-4 sm:prose-ol:pl-6 prose-ol:mb-4
            prose-li:text-gray-700 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#1a3c69] prose-blockquote:pl-4 prose-blockquote:italic
            prose-code:text-[#1a3c69] prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>

      {/* Navigation */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-md bg-[#112745] px-4 sm:px-5 py-2 sm:py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a3c69]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m-7 7h18" />
          </svg>
          Back to All Posts
        </Link>
      </div>
    </div>
  );
}