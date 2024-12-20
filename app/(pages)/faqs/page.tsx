import type { Metadata } from 'next';

import CallToAction from '~/components/widgets/CallToAction';
import FAQs from '~/components/widgets/FAQs';
import { heroFaqs, callToActionFaqs, faqs4Faqs } from '~/shared/data/pages/faqs.data';
import Hero from '~/components/widgets/Hero';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  return (
    <>
      <Hero {...heroFaqs} />
      <FAQs {...faqs4Faqs} />
      <CallToAction {...callToActionFaqs} />
    </>
  );
};

export default Page;
