import type { Metadata } from 'next';

import Contact from '~/components/widgets/Contact';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Hero {...heroContact} />
      <Contact {...contact2Contact} />
      <Features2 {...features2Contact} />
    </>
  );
};

export default Page;
