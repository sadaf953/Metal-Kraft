import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Features2 from '~/components/widgets/Features2';
import Steps from '~/components/widgets/Steps';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';

import {
  callToActionHome,
  featuresHome,
  featuresQualityStandards,
  heroHome,
  stepsHome,
  contentHomeOne,
  contentHomeTwo,
  featuresAcceptedMaterials,
  features3About,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: 'Home',
};

const Page = () => {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresQualityStandards} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Features {...featuresAcceptedMaterials} />
      <Steps {...stepsHome} />
      <Features {...features3About} />
      <CallToAction {...callToActionHome} />
    </>
  );
};

export default Page;
