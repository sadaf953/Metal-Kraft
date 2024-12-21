import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image, className }: HeroProps) => {
  return (
    <section id="heroOne" className={`bg-[#112745] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mx-4">
        <div className="py-12 md:py-20">
          <div className={`mx-auto max-w-7xl ${!image ? 'text-center' : 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center'}`}>
            <div className={!image ? 'mx-auto max-w-3xl' : 'text-left'}>
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-[#E8E8E8]">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-6 text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#E8E8E8]">
                  {title}
                </h1>
              )}
              <div className="max-w-3xl">
                {subtitle && (
                  <p className="mb-6 text-xl font-normal text-[#E8E8E8] dark:text-slate-300">
                    {subtitle}
                  </p>
                )}
                <div className={`flex max-w-none flex-col flex-nowrap gap-4 sm:flex-row ${!image ? 'justify-center' : ''}`}>
                  {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary focus:ring-0" />}
                  {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn focus:ring-0" />}
                </div>
              </div>
            </div>
            {image && (
              <div className="relative">
                <Image
                  className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 64rem) 100vw, 600px"
                  loading="eager"
                  placeholder="blur"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
