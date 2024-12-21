import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { findLatestPosts } from '~/utils/posts';
import Hero from '~/components/widgets/Hero';

export const metadata: Metadata = {
  title: 'Blog - MetalKraft CNC',
};

const heroContent = {
  title: 'Our Blog',
  subtitle: 'Stay updated with the latest insights in CNC machining, manufacturing technologies, and industry trends.',
  className: 'text-center',
  background: 'bg-[#112745]'
};

export default async function Blog() {
  const posts = await findLatestPosts();

  return (
    <>
      <Hero {...heroContent} />
      <section className="py-8 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ slug, title, image, excerpt, publishDate, tags }) => (
              <article 
                key={slug} 
                className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-md sm:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl"
              >
                <Link href={`/blog/${slug}`} className="block aspect-[16/10] w-full overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      alt={title}
                      src={image}
                      className="transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="mb-2 sm:mb-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-block rounded-full bg-[#E8E8E8] px-2 sm:px-3 py-1 text-xs font-medium text-[#112745] transition-colors hover:bg-[#112745] hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-bold leading-tight text-[#112745] decoration-2 transition-colors group-hover:text-[#1a3c69]">
                    <Link href={`/blog/${slug}`} className="block">
                      {title}
                    </Link>
                  </h2>

                  <p className="mb-4 flex-1 text-xs sm:text-sm text-gray-600 line-clamp-3">{excerpt}</p>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4">
                    <time dateTime={publishDate} className="text-xs sm:text-sm text-gray-500">
                      {new Date(publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link 
                      href={`/blog/${slug}`} 
                      className="group/btn inline-flex items-center gap-1.5 sm:gap-2 text-sm font-medium text-[#112745] transition-colors hover:text-[#1a3c69]"
                    >
                      Read More
                      <svg 
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}