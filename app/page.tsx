import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Features2 from '~/components/widgets/Features2';
import Steps from '~/components/widgets/Steps';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import IndustrySolutions from '~/components/widgets/IndustrySolutions';

import {
  callToActionHome,
  featuresQualityStandards,
  heroHome,
  stepsHome,
  contentHomeOne,
  contentHomeTwo,
  featuresAcceptedMaterials,
  industrySolutionsData,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: 'Home',
};

const Page = () => {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresQualityStandards} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Features {...featuresAcceptedMaterials} />
      <Steps {...stepsHome} />
      <IndustrySolutions {...industrySolutionsData} />
      <CallToAction {...callToActionHome} />
    </>
    );
};

export default Page;
