import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconUpload,
  IconSettings,
  IconCalculator,
  IconBuildingFactory2,
  IconCertificate,
  IconTruck,
  IconRuler,
  IconShieldCheck,
  IconTools,
  IconEngine,
  IconBuildingBridge,
  IconRecycle,
  IconHammer,
  IconClipboardList,
  IconTruckDelivery,
  IconHeartRateMonitor,
  Icon3dCubeSphere,
  IconRobot,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import heroImg from '~/assets/images/hero.jpg';
import millingImg from '~/assets/images/cnc-milling.png';
import turningImg from '~/assets/images/turning.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Precision CNC Machining
      <br /> and Manufacturing Solutions
    </>
  ),
  subtitle: (
    <>
      <span className="text-sm sm:text-base md:text-lg">
        <span className="font-semibold">
          MetalKraft CNC 
        </span>{' '}
        specializes in high-quality machining services including{' '}
        <em>CNC milling</em>, <em>turning</em> and <em>Custom Component Production</em>.
        <br className="hidden sm:block" />
        From prototypes to production runs, we deliver precision-engineered solutions for automotive, aerospace, and beyond.
        <br />
        <br />
      </span>
    </>
  ),
  callToAction: {
    text: 'Request a Quote',
    href: '/contact#form',
    icon: IconMail,
    targetBlank: false,
    btnType: 'primary'
  },
  callToAction2: {
    text: 'Capabilities',
    href: '/#contentOne-on-home-one',
    targetBlank: false,
    btnType: 'secondary'
  },
  image: {
    src: heroImg,
    alt: 'Hero MetalKraft CNC',
  },
};



export const featuresAcceptedMaterials: FeaturesProps = {
  id: 'features-accepted-materials',
  hasBackground: true,
  className: 'bg-slate-100 dark:bg-slate-800/40',
  header: {
    title: 'Materials We Work With',
    subtitle: 'We offer machining services for a wide range of materials to meet your specific requirements.',
  },
  columns: 4,
  items: [
    {
      title: 'Aluminum',
      description: 'Lightweight and corrosion-resistant',
      icon: IconRocket,
    },
    {
      title: 'Brass',
      description: 'Excellent machinability and conductivity',
      icon: IconSettings,
    },
    {
      title: 'Copper',
      description: 'High thermal and electrical conductivity',
      icon: IconHammer,
    },
    {
      title: 'Stainless Steel',
      description: 'Corrosion-resistant and durable',
      icon: IconShieldCheck,
    },
    {
      title: 'Tool Steel',
      description: 'High hardness and wear resistance',
      icon: IconTools,
    },
    {
      title: 'Alloy Steel',
      description: 'Enhanced strength and properties',
      icon: IconEngine,
    },
    {
      title: 'Mild Steel',
      description: 'Cost-effective and versatile',
      icon: IconBuildingBridge,
    },
    {
      title: 'Plastics',
      description: 'Versatile engineering polymers',
      icon: IconRecycle,
    }
  ],
};


export const featuresQualityStandards: FeaturesProps = {
  id: 'features-quality',
  hasBackground: false,
  header: {
    title: 'Commitment to Excellence',
    subtitle: 'Our dedication to quality is driven by advanced methodologies including Lean Manufacturing and Six Sigma principles.',
    tagline: 'Quality Standards'
  },
  items: [
    {
      title: 'Lean Manufacturing',
      description: 'Implementing Just-in-Time production and waste reduction strategies to optimize efficiency while maintaining superior quality.',
      icon: IconShieldCheck,
    },
    {
      title: 'Six Sigma Certified',
      description: 'Our processes follow Six Sigma methodologies, ensuring consistent quality and minimal defects in production.',
      icon: IconCertificate,
    },
    {
      title: 'Quality Control',
      description: 'Rigorous inspection protocols and advanced measurement equipment guarantee precision in every component.',
      icon: IconListCheck,
    },
    {
      title: 'Continuous Improvement',
      description: 'Regular process audits and Kaizen practices ensure we maintain industry-leading quality standards.',
      icon: IconHeartRateMonitor,
    },
    {
      title: 'ISO 9001:2015',
      description: 'Certified quality management system ensuring consistent delivery of products that meet customer requirements.',
      icon: IconClipboardList,
    },
    {
      title: 'Statistical Process Control',
      description: 'Advanced monitoring and analysis of manufacturing processes to maintain exceptional quality standards.',
      icon: IconCalculator,
    }
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Advanced CNC Machining Solutions',
    subtitle: 'Precision Engineering for Complex Manufacturing Challenges',
    tagline: 'Capabilities',
  },
  content:
    'Our state-of-the-art CNC machining centers combine cutting-edge technology with expert craftsmanship to deliver exceptional results for your most demanding projects.',
  items: [
    {
      title: 'Vertical Machining Centers',
      description:
        'High-precision 3-axis to 5-axis milling capabilities for complex components, molds, and dies. Perfect for aerospace and automotive parts.',
    },
    {
      title: 'CNC Turning Solutions',
      description:
        'Advanced turning centers equipped for high-accuracy operations including facing, grooving, threading, and custom profile turning.',
    },
    {
      title: 'Multi-Material Expertise',
      description:
        'Comprehensive experience working with metals, plastics, and exotic materials. Our versatile capabilities ensure optimal results for any material.',
    },
  ],
  image: {
    src: millingImg,
    alt: 'CNC Machining Center',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'MetalKraft specializes in delivering end-to-end manufacturing solutions, from prototype development to full-scale production. Our commitment to quality and precision ensures your components meet exact specifications.',
  items: [
    {
      title: 'Computer-controlled machines',
    },
    {
      title: 'High Precision and Accuracy',
    },
    {
      title: 'Complex  Geometric and Rotational Shapes',
    },
    {
      title: 'Efficient for varied production scales',
    }
  ],
  image: {
    src: turningImg,
    alt: 'CNC Manufacturing Process',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: false,
  header: {
    title: 'Our Ordering Process',
    subtitle: 'From concept to completion, we ensure precision and quality at every step.',
  },
  items: [
    {
      title: 'Share Your Design',
      description: 'Send us your part design as a CAD file or drawing through our contact form or email.',
      icon: IconUpload,
    },
    {
      title: 'Technical Review',
      description: 'Our engineers analyze your design for manufacturability and optimization opportunities.',
      icon: IconSettings,
    },
    {
      title: 'Quote Generation',
      description: 'We provide a detailed quote with pricing, timeline, and material specifications.',
      icon: IconCalculator,
    },
    {
      title: 'Production Planning',
      description: 'Upon approval, we create a detailed production plan and schedule your order.',
      icon: IconClipboardList,
    },
    {
      title: 'Manufacturing',
      description: 'Your parts are manufactured with precision using our advanced CNC machines.',
      icon: IconBuildingFactory2,
    },
    {
      title: 'Quality & Delivery',
      description: 'Final inspection is performed before secure packaging and prompt delivery.',
      icon: IconTruckDelivery,
    },
  ],
  callToAction: {
    text: 'Try Now',
    href: '/contact#contactTwo-on-contact',
    icon: IconRocket,
  },
};



export const industrySolutionsData: FeaturesProps = {
  id: 'industry-solutions',
  hasBackground: true,
  className: 'bg-custom-blue-medium',
  header: {
    title: 'Industry Solutions',
    subtitle: 'Serving diverse industries with precision components',
  },
  items: [
    {
      title: 'Aerospace',
      description: 'High-precision components for aircraft and space applications',
      image: {
        src: '/images/industries/aerospace.jpeg',
        alt: 'Aerospace Manufacturing'
      }
    },
    {
      title: 'Automotive',
      description: 'Custom parts and prototypes for automotive manufacturers',
      image: {
        src: '/images/industries/automobile.jpeg',
        alt: 'Automotive Parts Manufacturing'
      }
    },
    {
      title: 'Medical',
      description: 'Precision medical devices and surgical instruments',
      image: {
        src: '/images/industries/medicine.png',
        alt: 'Medical Device Manufacturing'
      }
    },
    {
      title: 'Electronics',
      description: 'High-precision electronic components and assemblies',
      image: {
        src: '/images/industries/electronics.jpeg',
        alt: 'Electronics Manufacturing'
      }
    },
    {
      title: 'Food Processing',
      description: 'Specialized equipment for food processing industry',
      image: {
        src: '/images/industries/food.jpeg',
        alt: 'Food Processing Equipment'
      }
    },
    {
      title: 'Robotics and Automation',
      description: 'Precision parts for robotic systems and automation equipment',
      image: {
        src: '/images/industries/robotics.jpeg',
        alt: 'Robotics Manufacturing'
      }
    }
  ]
};

   
export const callToActionHome: CallToActionProps = {
  id: 'cta-home',
  hasBackground: true,
  title: 'Ready to Transform Your Manufacturing Vision?',
  subtitle: 'Contact us today to discuss your CNC machining needs and get a custom quote for your project.',
  callToAction: {
    text: 'Request a Quote',
    href: '/contact#form',
    icon: IconMail,
    targetBlank: false,
  },
};
