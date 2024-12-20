import { twMerge } from 'tailwind-merge';
import { WrapperTagProps } from '~/shared/types';
import Background from './Background';

const WidgetWrapper = ({ children, id, hasBackground, containerClass, className }: WrapperTagProps) => (
  <section className="relative not-prose scroll-mt-[72px]" id={id}>
    <Background hasBackground={hasBackground} className={className} />
    <div
      className={twMerge(
        'relative mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12 lg:py-16 text-default',
        containerClass,
      )}
    >
      {children}
    </div>
  </section>
);

export default WidgetWrapper;
