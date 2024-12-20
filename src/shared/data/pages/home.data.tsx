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
import millingImg from '~/assets/images/CNC MILLING.png';
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
  items: [
    {
      title: 'ISO 9001:2015 Certified',
      description:
        'Maintaining highest quality standards',
      icon: IconComponents,
    },
    {
      title: 'Advanced Inspection',
      description:
        'State-of-the-art measurement equipment',
      icon: IconRuler,
    },
  ],
};


// Features data on Home page *******************

export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: true,
  columns: 3,
  className: 'bg-[#203352]',
  header: {
    title: (
      <>
        Why Choose <span className="whitespace-nowrap">MetalKraft CNC</span>
      </>
    ),
    subtitle:
      "Experience excellence in precision manufacturing with our state-of-the-art CNC capabilities, industry expertise, and commitment to quality.",
    tagline: 'Features',
    className: 'text-gray-100',
  },
  items: [
    {
      title: 'State-of-the-Art CNC Machinery',
      description:
        'Our Vertical Machining Centers (VMCs) and CNC Turning Machines deliver unmatched accuracy, reliability, and efficiency for diverse applications.',
      icon: IconComponents,
      className: 'text-gray-100',
    },
    {
      title: 'Tailored to Your Needs',
      description:
        'We provide bespoke solutions from high-precision turning to prototype development, ensuring your project meets industry-specific requirements.',
      icon: IconListCheck,
      className: 'text-gray-100',
    },
    {
      title: 'Exceeding Industry Standards',
      description:
        'With a commitment to quality, MetalKraft CNC adheres to stringent inspection protocols, ensuring products meet and exceed client expectations.',
      icon: IconCheck,
      className: 'text-gray-100',
    },
    {
      title: 'Efficient and Timely Delivery',
      description:
        'Our streamlined workflows and advanced CAD/CAM integrations ensure projects are completed on schedule without compromising precision.',
      icon: IconRocket,
      className: 'text-gray-100',
    },
    {
      title: 'Environmentally Conscious Manufacturing',
      description:
        'We integrate eco-friendly practices into our machining processes, from resource-efficient operations to effective waste management.',
      icon: IconArrowsRightLeft,
      className: 'text-gray-100',
    },
    {
      title: 'Client-Centered Collaboration',
      description:
        'We work closely with clients to develop innovative machining solutions, fostering long-term partnerships.',
      icon: IconBulb,
      className: 'text-gray-100',
    },
  ],
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
      className: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      title: 'Brass',
      description: 'Excellent machinability and conductivity',
      icon: IconSettings,
      className: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/20',
    },
    {
      title: 'Copper',
      description: 'High thermal and electrical conductivity',
      icon: IconHammer,
      className: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
    },
    {
      title: 'Stainless Steel',
      description: 'Corrosion-resistant and durable',
      icon: IconShieldCheck,
      className: 'hover:bg-gray-50 dark:hover:bg-gray-900/20',
    },
    {
      title: 'Tool Steel',
      description: 'High hardness and wear resistance',
      icon: IconTools,
      className: 'hover:bg-red-50 dark:hover:bg-red-900/20',
    },
    {
      title: 'Alloy Steel',
      description: 'Enhanced strength and properties',
      icon: IconEngine,
      className: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
    },
    {
      title: 'Mild Steel',
      description: 'Cost-effective and versatile',
      icon: IconBuildingBridge,
      className: 'hover:bg-zinc-50 dark:hover:bg-zinc-900/20',
    },
    {
      title: 'Plastics',
      description: 'Versatile engineering polymers',
      icon: IconRecycle,
      className: 'hover:bg-green-50 dark:hover:bg-green-900/20',
    }
  ],
};




// Industry Solutions data on Home page *******************
export const features2Home: FeaturesProps = {
  id: 'features2-on-home',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Industry Solutions',
    subtitle: 'Expertise in precision manufacturing for diverse industries',
    tagline: 'Industry Solutions',
  },
  items: [
    {
      title: 'Aerospace',
      description:
        'Precision components for aircraft, spacecraft, and defense applications.',
      icon: IconComponents,
      callToAction: {
        text: 'Learn more',
        href: '/industries/aerospace',
      },
    },
    {
      title: 'Automotive',
      description:
        'High-performance components for the automotive industry, from prototypes to production runs.',
      icon: IconListCheck,
      callToAction: {
        text: 'Learn more',
        href: '/industries/automotive',
      },
    },
    {
      title: 'Medical',
      description:
        'Precision components for medical devices, implants, and equipment.',
      icon: IconCheck,
      callToAction: {
        text: 'Learn more',
        href: '/industries/medical',
      },
    },
    {
      title: 'Energy',
      description:
        'Components for renewable energy systems, including solar, wind, and hydroelectric power.',
      icon: IconRocket,
      callToAction: {
        text: 'Learn more',
        href: '/industries/energy',
      },
    },
    {
      title: 'Consumer Products',
      description:
        'Precision components for consumer goods, from electronics to household appliances.',
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Learn more',
        href: '/industries/consumer-products',
      },
    },
    {
      title: 'Industrial Equipment',
      description:
        'Components for industrial machinery, including pumps, valves, and gearboxes.',
      icon: IconBulb,
      callToAction: {
        text: 'Learn more',
        href: '/industries/industrial-equipment',
      },
    },
  ],
};

export const featuresQualityStandards: FeaturesProps = {
  id: 'features-quality-standards',
  hasBackground: false,
  columns: 2,
  className: 'bg-[#112745] text-white py-8',
  items: [
    {
      title: 'ISO 9001:2015 Certified',
      description: 'Maintaining highest quality standards',
      icon: IconCertificate,
    },
    {
      title: 'Advanced Inspection',
      description: 'State-of-the-art measurement equipment',
      icon: IconRuler,
    },
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

export const features3About: FeaturesProps = {
  id: 'features-three-on-about',
  hasBackground: false,
  header: {
    title: 'Industry Solutions',
    subtitle:
      'Serving diverse industries with precision components',
  },
  iconClass: 'w-5 h-5 p-1 bg-blue-50 rounded-sm dark:bg-slate-800',
  items: [
    {
      title: 'Aerospace',
      description:
        'High-precision components meeting aerospace standards',
      icon: IconRocket,
    },
    {
      title: 'Automotive',
      description:
        'Quality parts for automotive applications',
      icon: IconEngine,
    },
    {
      title: 'Medical',
      description:
        'Precision components for medical devices',
      icon: IconHeartRateMonitor,
    },
    {
      title: 'Military and Defense',
      description:
        'Mission-critical components with strict specifications',
      icon: IconShieldCheck,
    },
    {
      title: 'Consumer Goods',
      description:
        'High-quality parts for consumer products',
      icon: IconBuildingFactory2,
    },
    {
      title: 'Robotics and Automation',
      description:
        'Precision parts for robotic systems and automation equipment',
      icon: IconRobot,
    },
  ],
};

// Call to Action data on Home page *******************
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
