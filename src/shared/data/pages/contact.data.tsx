import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall, IconMail } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Get Help',
  subtitle: (
    <>
      Speak to our team today
    </>
  ),
  tagline: 'Contact Page',
  callToAction: {
    text: 'Call us',
    href: 'tel:+919876543210',
    icon: IconPhoneCall,
    targetBlank: false,
  },
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: (
      <>
        Please fill out this form to help us understand your project requirements better.{' '}
        <span className="hidden md:inline">We'll get back to you promptly to discuss your precision machining needs.</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['Plot 23, Industrial Area', 'Sri City, Andhra Pradesh, India'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +91 9876543210', 'Email: metalkrft@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working Hours',
      description: ['Monday - Saturday: 9:00 AM - 6:00 PM'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email address',
      },
      {
        type: 'file',
        label: 'CAD File (optional)',
        name: 'cadFile',
        accept: '.stl,.obj,.step,.stp,.iges,.igs,.x3d,.dxf',
        placeholder: 'Upload your CAD file',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  hasBackground: true,
  className: 'bg-slate-100 dark:bg-slate-800/40',
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      callToAction: {
        text: 'Go to FAQ page',
        href: '/faqs',
      },
    },
    {
      title: 'Email Us',
      description: 'Send us an email anytime',
      icon: IconMail,
      callToAction: {
        text: 'Mail',
        href: 'mailto:metalkrft@gmail.com',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      callToAction: {
        text: 'Call us',
        href: 'tel:+919876543210',
        icon: IconPhoneCall,
      },
    },
  ],
};
