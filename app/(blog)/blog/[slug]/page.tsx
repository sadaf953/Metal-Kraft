import type { Metadata } from 'next';
import Image from 'next/image';
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
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await findPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header className="text-center">
        <h1 className="leading-tighter font-heading mb-8 text-4xl font-bold tracking-tighter md:text-5xl">
          {post.title}
        </h1>
        <div className="mb-8">
          <time dateTime={post.publishDate} className="text-gray-700">
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>
      
      {post.image && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      <div 
        className="prose prose-lg mx-auto dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
