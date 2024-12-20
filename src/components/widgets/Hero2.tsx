import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero2 = ({ title, subtitle, tagline, callToAction, callToAction2, image, className }: HeroProps) => {
  return (
    <section id="heroTwo" className={`bg-[#112745] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-left">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-[#E8E8E8]">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-[#E8E8E8]">
                  {title}
                </h1>
              )}
              <div className="max-w-xl">
                {subtitle && (
                  <p className="text-xl text-[#E8E8E8] mb-8">
                    {subtitle}
                  </p>
                )}
                <div className="flex flex-col flex-nowrap gap-4 sm:flex-row">
                  {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                  {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
                </div>
              </div>
            </div>
            {image && (
              <div className="w-full md:w-1/2">
                <Image
                  className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={475}
                  sizes="(max-width: 48rem) 100vw, 800px"
                  loading="eager"
                  placeholder="blur"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
