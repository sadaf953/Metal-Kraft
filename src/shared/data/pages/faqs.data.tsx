import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';
import { IconMinus, IconPlus } from '@tabler/icons-react';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently Asked Questions',
  subtitle: 'Find answers to common questions about our CNC machining services',
  className: 'text-center pt-12 md:pt-16',
  tagline: 'FAQs',
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Common Questions',
    subtitle: 'Everything you need to know about our CNC machining services.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Services & Capabilities',
        href: '/tab1',
      },
      items: [
        {
          title: 'What industries do you serve?',
          description: 'We specialize in serving automotive, aerospace, electronics, and general engineering industries. Our precision CNC machining capabilities cater to diverse manufacturing needs across these sectors.',
        },
        {
          title: 'What materials do you work with?',
          description: 'We handle a wide range of materials including metals like aluminum, steel, brass, and plastics like nylon and acrylic. Our machines are equipped to work with various material specifications and grades.',
        },
        {
          title: 'Can you handle custom designs?',
          description: 'Absolutely! We work with client specifications to deliver tailor-made components. Our team can work from your CAD files or help develop designs based on your requirements.',
        },
        {
          title: 'What are your minimum order quantities?',
          description: 'We accommodate both prototype and production runs. Our capacity allows us to handle orders ranging from single prototypes to large production batches.',
        },
      ],
    },
    {
      link: {
        label: 'Process & Quality',
        href: '/tab2',
      },
      items: [
        {
          title: 'What is the typical turnaround time?',
          description: 'Depending on project complexity, our standard delivery time ranges from 1 to 4 weeks. We provide specific timeline estimates after reviewing your project requirements and specifications.',
        },
        {
          title: 'Do you provide quality certification?',
          description: 'Yes, we provide detailed quality inspection reports and material certifications as needed. Our quality control processes ensure all components meet specified tolerances and industry standards.',
        },
        {
          title: 'How do you ensure quality control?',
          description: 'We maintain strict quality control measures throughout the manufacturing process. Each part undergoes thorough inspection using precision measurement tools, and we provide detailed quality reports.',
        },
        {
          title: 'What file formats do you accept?',
          description: 'We accept most common CAD file formats including STEP, IGES, DWG, and Solidworks files. Our engineering team can work with your preferred format to ensure accurate manufacturing.',
        },
        {
          title: 'Do you offer expedited manufacturing services?',
          description: 'Yes, we offer rush manufacturing services for urgent projects. While our standard lead times are 1-4 weeks, we can accommodate faster turnaround times for critical deadlines. Additional charges may apply for expedited services.',
        },
        {
          title: 'What are your tolerance capabilities?',
          description: 'Our CNC machines can achieve tight tolerances down to ±0.001 inches (0.025mm) depending on the material and geometry. We regularly work with precision components requiring strict dimensional accuracy.',
        },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Contact our team for detailed information about our CNC machining services.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
