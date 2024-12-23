'use client';

import { useRef, useCallback } from 'react';
import Image from 'next/image';
import { FeaturesProps } from '~/shared/types';
import Headline from '~/components/common/Headline';
import WidgetWrapper from '~/components/common/WidgetWrapper';

const IndustrySolutions = ({ id, header, items, hasBackground = false, className = '' }: FeaturesProps) => {
  const bgColor = className || 'bg-custom-blue-medium';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('[data-card]')?.clientWidth ?? 0;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section id={id} className={`relative ${bgColor}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <WidgetWrapper id={id} hasBackground={false} containerClass="scroll-mt-16">
        {header && <Headline header={header} titleClass="text-4xl md:text-5xl px-6 mb-6" />}
        <div className="relative w-full overflow-hidden group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            aria-label="Scroll left"
          >
            <span className="text-2xl font-bold text-custom-blue-medium">‹</span>
          </button>
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 px-6 pb-4 snap-x snap-mandatory hide-scrollbar"
          >
            {items?.map((item, index) => (
              <div 
                key={`${id}-item-${index}`} 
                className="flex-none w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] snap-start"
                data-card
              >
                <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-slate-900">
                  {item.image && (
                    <div className="relative h-44 w-full">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            aria-label="Scroll right"
          >
            <span className="text-2xl font-bold text-custom-blue-medium">›</span>
          </button>
        </div>
      </WidgetWrapper>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default IndustrySolutions;
