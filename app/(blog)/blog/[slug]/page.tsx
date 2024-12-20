import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { findPostBySlug } from '~/utils/posts';
import { notFound } from 'next/navigation';

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

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1a3c69] text-sm font-medium transition-colors hover:text-[#112745]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-[#112745] tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#E8E8E8] px-3 py-1 text-xs font-medium text-[#112745] hover:bg-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="mt-4 block text-sm text-gray-500">
            Published on {new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>

      {/* Image */}
      <div className="relative mx-auto max-w-4xl mt-[-50px] px-6 sm:px-8">
        <div className="overflow-hidden rounded-lg shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="object-cover w-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="prose prose-lg mx-auto max-w-none prose-headings:font-bold prose-headings:text-[#112745] prose-p:text-gray-700 prose-a:text-[#1a3c69] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#112745]">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-[#112745] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a3c69]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m-7 7h18" />
            </svg>
            Back to All Posts
          </Link>
        </div>
      </div>
    </article>
  );
}