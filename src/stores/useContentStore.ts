import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface NavigationItem {
  label: string
  path: string
  external?: boolean
}

interface SocialLink {
  name: string
  url: string
  icon: string
}

interface ContactMethod {
  type: 'email' | 'phone' | 'consultation'
  title: string
  description: string
  contact?: string
  cta?: string
}

interface HeroContent {
  badge: {
    icon: string
    text: string
  }
  title: string
  highlight: string
  description: string
  primaryAction: {
    text: string
    link: string
  }
  secondaryAction: {
    text: string
    link: string
  }
  chips: Array<{ label: string }>
}

interface CTAContent {
  title: string
  description: string
  features: string[]
  primaryAction: {
    text: string
    link: string
  }
  secondaryAction: {
    text: string
    link: string
  }
  note: string
}

interface AboutContent {
  title: string
  subtitle: string
  mission: {
    heading: string
    text: string
  }
  team: {
    heading: string
    text: string
  }
  philosophy: {
    heading: string
    points: string[]
  }
  values: {
    heading: string
    items: Array<{
      title: string
      description: string
    }>
  }
}

interface FAQCategory {
  title: string
  questions: Array<{
    question: string
    answer: string
  }>
}

export const useContentStore = defineStore('content', () => {
  // Navigation
  const navigation = ref<NavigationItem[]>([
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Contact', path: '/contact' },
  ])

  const footerNavigation = ref({
    products: [
      { label: 'MyxoFlow Platform', path: '/products/dashboards' },
      { label: 'StichFlow', path: '/products/stichflow' },
      { label: 'MyxoFill', path: '/products/fill' },
      { label: 'MyxoDate', path: '/products/date' },
      { label: 'Golgappa.inc', path: '/products/golgappa' },
      { label: 'MyxoCraft', path: '/products/craft' },
    ],
    company: [
      { label: 'About', path: '/about' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
    ],
    resources: [
      { label: 'Documentation', path: '#' },
      { label: 'API Reference', path: '#' },
      { label: 'Support', path: '#' },
      { label: 'Status', path: '#' },
      { label: 'Blog', path: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Cookie Policy', path: '#' },
    ],
  })

  const socialLinks = ref<SocialLink[]>([
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/myxoflow',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/myxoflow',
      icon: 'twitter',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/myxoflow',
      icon: 'github',
    },
  ])

  // Company Information
  const company = ref({
    name: 'MyxoFlow',
    tagline: 'Unified Dashboard Technology',
    description:
      'Unified dashboard technology powering market optimization across industries. Direct developer support, rapid iteration, proven results.',
    email: 'hello@myxoflow.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA',
    copyright: `© ${new Date().getFullYear()} MyxoFlow. All rights reserved.`,
  })

  // Hero Content
  const hero = ref<HeroContent>({
    badge: {
      icon: '✨',
      text: 'Unified Dashboard Technology',
    },
    title: 'Transform Your Business',
    highlight: 'Infinite Possibilities',
    description:
      'Discover our suite of market solutions powered by unified dashboard technology. Direct developer support, rapid iteration, proven results.',
    primaryAction: {
      text: 'Explore Solutions',
      link: '/products',
    },
    secondaryAction: {
      text: 'How It Works',
      link: '/how-it-works',
    },
    chips: [
      { label: 'Multi-Market' },
      { label: 'Real-time Analytics' },
      { label: 'Developer-First' },
    ],
  })

  // CTA Content
  const cta = ref<CTAContent>({
    title: 'Ready to Transform Your Operations?',
    description:
      "Join companies already optimizing their operations with MyxoFlow's unified platform technology.",
    features: [
      'Dedicated developer support',
      '30-day money-back guarantee',
      'Enterprise-grade security',
    ],
    primaryAction: {
      text: 'Schedule Consultation',
      link: '/contact',
    },
    secondaryAction: {
      text: 'View Products',
      link: '/products',
    },
    note: 'Direct developer support. No account managers, just rapid iteration and results.',
  })

  // About Page Content
  const about = ref<AboutContent>({
    title: 'About MyxoFlow',
    subtitle:
      'We believe in the power of unified technology to transform how businesses operate across different markets.',
    mission: {
      heading: 'Our Mission',
      text: 'To provide unified dashboard technology that enables rapid market expansion and optimization, empowering businesses to scale efficiently across diverse industries.',
    },
    team: {
      heading: 'Our Team',
      text: 'A dedicated group of developers, designers, and market specialists committed to building technology that makes a real difference in how businesses operate and grow.',
    },
    philosophy: {
      heading: 'Our Philosophy',
      points: [
        'Direct developer support over account management',
        'Rapid iteration based on real user feedback',
        'Unified solutions that work across markets',
        'Transparent pricing with proven ROI',
      ],
    },
    values: {
      heading: 'Our Values',
      items: [
        {
          title: 'Developer-First',
          description:
            'We prioritize direct technical communication and rapid implementation over bureaucratic processes.',
        },
        {
          title: 'Market Agnostic',
          description:
            'Our platform adapts to any industry while maintaining consistent user experience and performance.',
        },
        {
          title: 'Transparent Results',
          description:
            'We provide clear metrics and honest assessments of what our technology can achieve for your business.',
        },
      ],
    },
  })

  // Contact Methods
  const contactMethods = ref<ContactMethod[]>([
    {
      type: 'email',
      title: 'Email Us',
      description: "Send us an email and we'll respond within 24 hours.",
      contact: 'hello@myxoflow.com',
    },
    {
      type: 'phone',
      title: 'Call Us',
      description: 'Speak directly with our team during business hours.',
      contact: '+1 (555) 123-4567',
    },
    {
      type: 'consultation',
      title: 'Free Consultation',
      description: 'Schedule a personalized consultation to discuss your needs.',
      cta: 'Schedule Now',
    },
  ])

  // FAQ Content
  const faq = ref<FAQCategory[]>([
    {
      title: 'General Questions',
      questions: [
        {
          question: 'What is MyxoFlow?',
          answer:
            'MyxoFlow is a unified dashboard technology platform that enables businesses to rapidly expand and optimize operations across different market verticals.',
        },
        {
          question: 'How does the unified dashboard work?',
          answer:
            'Our platform provides a consistent interface and shared optimization benefits across all market solutions, allowing improvements in one area to benefit all your operations.',
        },
        {
          question: 'What markets do you support?',
          answer:
            'We currently support textiles, manufacturing, dating platforms, food services, and crafts markets, with new verticals added regularly.',
        },
      ],
    },
    {
      title: 'Technical Questions',
      questions: [
        {
          question: 'How long does implementation take?',
          answer:
            'Most implementations are completed within 2-4 weeks, depending on your specific requirements and integration needs.',
        },
        {
          question: 'Do you provide technical support?',
          answer:
            'Yes, we provide direct developer support with no account managers. You work directly with our technical team for rapid iteration and problem solving.',
        },
        {
          question: 'Is the platform secure?',
          answer:
            'We implement enterprise-grade security measures including encryption, regular audits, and compliance with industry standards.',
        },
      ],
    },
    {
      title: 'Pricing & Plans',
      questions: [
        {
          question: 'How is pricing determined?',
          answer:
            'Pricing is based on your specific market vertical, user count, and feature requirements. We offer transparent pricing with clear ROI projections.',
        },
        {
          question: 'Is there a free trial?',
          answer:
            'Yes, we offer a 30-day free trial with full access to platform features and dedicated setup assistance.',
        },
        {
          question: "What's included in the setup?",
          answer:
            'Setup includes platform configuration, data migration assistance, team training, and ongoing technical support.',
        },
      ],
    },
  ])

  // Page Titles and Meta
  const pageMeta = ref({
    home: {
      title: 'MyxoFlow - Unified Dashboard Technology',
      description:
        'Transform your business with unified dashboard technology. Multi-market solutions with direct developer support.',
    },
    about: {
      title: 'About Us - MyxoFlow',
      description:
        "Learn about MyxoFlow's mission to provide unified dashboard technology for rapid market expansion.",
    },
    products: {
      title: 'Products - MyxoFlow',
      description:
        'Discover our suite of market solutions powered by unified dashboard technology.',
    },
    contact: {
      title: 'Contact Us - MyxoFlow',
      description:
        'Get in touch with our team to discuss how MyxoFlow can transform your operations.',
    },
    faq: {
      title: 'FAQ - MyxoFlow',
      description:
        'Find answers to common questions about MyxoFlow and our optimization solutions.',
    },
  })

  // Error Messages
  const errorMessages = ref({
    404: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
      action: 'Go Home',
    },
    500: {
      title: 'Server Error',
      description: 'Something went wrong on our end. Please try again later.',
      action: 'Try Again',
    },
    form: {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      phone: 'Please enter a valid phone number',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    },
  })

  return {
    // Navigation
    navigation,
    footerNavigation,
    socialLinks,

    // Company
    company,

    // Content
    hero,
    cta,
    about,
    contactMethods,
    faq,

    // Meta
    pageMeta,
    errorMessages,
  }
})
