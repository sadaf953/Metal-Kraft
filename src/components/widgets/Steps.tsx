import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';
import CTA from '../common/CTA';

const Steps = ({
  id,
  header,
  items,
  isImageDisplayed = true,
  image,
  isReversed = false,
  hasBackground = false,
  callToAction,
}: StepsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-3xl">
    <div className={`${isReversed ? 'md:flex-row-reverse' : ''} ${isImageDisplayed ? 'md:flex-row' : ''}`}>
      <div className="flex flex-col gap-8 p-8 md:p-12 rounded-xl">
        {header && (
          <Headline
            header={header}
            containerClass="text-center"
            titleClass="text-3xl sm:text-4xl text-gray-100"
            subtitleClass="text-gray-300"
          />
        )}
        <Timeline 
          items={items} 
          defaultIcon={IconCheck} 
          iconClass="text-primary border-primary-900" 
          containerClass="max-w-2xl mx-auto"
        />
        {callToAction && (
          <div className="flex justify-center mt-8">
            <CTA 
              callToAction={callToAction} 
              linkClass="btn btn-primary px-8 py-3 text-lg font-semibold"
            />
          </div>
        )}
      </div>
      {isImageDisplayed && image && (
        <div className="relative mt-8">
          <Image
            src={image.src}
            width={400}
            height={768}
            alt={image.alt}
            placeholder="blur"
            className="w-full rounded-md shadow-lg bg-gray-400 dark:bg-slate-700"
            quality={50}
          />
        </div>
      )}
    </div>
  </WidgetWrapper>
);

export default Steps;
