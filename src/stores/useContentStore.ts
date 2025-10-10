import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  NavigationItem,
  SocialLink,
  ContactMethod,
  HeroContent,
  CTAContent,
  AboutContent,
  FAQCategory,
  ErrorMessages,
} from '@/types/interfaces'

interface PageInfo {
  title: string
  description: string
  keywords: string[]
}
interface FooterLink {
  label: string
  path: string
  external?: boolean // optional
}
interface FooterNavigation {
  products: FooterLink[]
  company: FooterLink[]
  resources: FooterLink[]
  legal: FooterLink[]
}
interface PageMeta {
  home: PageInfo
  about: PageInfo
  products: PageInfo
  contact: PageInfo
  faq: PageInfo
}

export const useContentStore = defineStore('content', () => {
  // Company Information
  const company = ref({
    name: 'MyxoFlow',
    tagline: 'Unified Dashboard Technology',
    description:
      'Unified dashboard technology powering market optimization across industries. Direct developer support, rapid iteration, proven results.',
    email: 'hello@myxoflow.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA',
    founded: '2023',
    employees: '25-50',
    website: 'https://myxoflow.com',
    copyright: `© ${new Date().getFullYear()} MyxoFlow. All rights reserved.`,
  })

  // Navigation Structure
  const navigation = ref<NavigationItem[]>([
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Products',
      path: '/products',
      children: [
        { label: 'All Products', path: '/products' },
        { label: 'StichFlow', path: '/products/stichflow' },
        { label: 'MyxoFill', path: '/products/fill' },
        { label: 'MyxoDate', path: '/products/date' },
        { label: 'Platform', path: '/products/dashboards' },
      ],
    },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ])

  const footerNavigation = ref<FooterNavigation>({
    products: [
      { label: 'Platform Overview', path: '/products/dashboards' },
      { label: 'StichFlow', path: '/products/stichflow' },
      { label: 'MyxoFill', path: '/products/fill' },
      { label: 'MyxoDate', path: '/products/date' },
      { label: 'Golgappa.inc', path: '/products/golgappa' },
      { label: 'MyxoCraft', path: '/products/craft' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/careers' },
    ],
    resources: [
      { label: 'Documentation', path: 'https://docs.myxoflow.com', external: true },
      { label: 'API Reference', path: 'https://api.myxoflow.com', external: true },
      { label: 'Support Center', path: '/support' },
      { label: 'Status Page', path: 'https://status.myxoflow.com', external: true },
      { label: 'Blog', path: '/blog' },
      { label: 'Community', path: '/community' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Security', path: '/security' },
    ],
  })

  const socialLinks = ref<SocialLink[]>([
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/myxoflow',
      icon: 'linkedin',
      color: '#0077B5',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/myxoflow',
      icon: 'twitter',
      color: '#1DA1F2',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/myxoflow',
      icon: 'github',
      color: '#333',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/myxoflow',
      icon: 'discord',
      color: '#7289DA',
    },
  ])

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
      variant: 'primary',
      icon: 'arrow-right',
    },
    secondaryAction: {
      text: 'How It Works',
      link: '/how-it-works',
      variant: 'secondary',
    },
    chips: [
      { label: 'Multi-Market', color: 'blue' },
      { label: 'Real-time Analytics', color: 'green' },
      { label: 'Developer-First', color: 'purple' },
      { label: 'Enterprise Ready', color: 'orange' },
    ],
  })

  // CTA Content
  const cta = ref<CTAContent>({
    title: 'Ready to Transform Your Operations?',
    description:
      "Join companies already optimizing their operations with MyxoFlow's unified platform technology. Experience the difference that direct developer support makes.",
    features: [
      'Free consultation and setup assistance',
      'Dedicated developer support (no account managers)',
      '30-day money-back guarantee',
      'Enterprise-grade security and compliance',
      'Rapid deployment in under 48 hours',
      'Cross-market optimization benefits',
    ],
    primaryAction: {
      text: 'Schedule Consultation',
      link: '/contact',
      variant: 'primary',
      icon: 'calendar',
    },
    secondaryAction: {
      text: 'View Case Studies',
      link: '/case-studies',
      variant: 'secondary',
    },
    note: '**Direct developer support.** No account managers, just rapid iteration and results.',
    variant: 'default',
  })

  // About Page Content
  const about = ref<AboutContent>({
    title: 'About MyxoFlow',
    subtitle:
      'We believe in the power of unified technology to transform how businesses operate across different markets.',
    mission: {
      heading: 'Our Mission',
      text: 'To provide unified dashboard technology that enables rapid market expansion and optimization, empowering businesses to scale efficiently across diverse industries while maintaining direct developer relationships.',
      image: '/images/mission.jpg',
    },
    team: {
      heading: 'Our Team',
      text: 'A dedicated group of developers, designers, and market specialists committed to building technology that makes a real difference in how businesses operate and grow. We prioritize direct communication and rapid iteration.',
      image: '/images/team.jpg',
    },
    philosophy: {
      heading: 'Our Development Philosophy',
      points: [
        'Direct developer support over account management bureaucracy',
        'Rapid iteration based on real user feedback and needs',
        'Unified solutions that work seamlessly across all markets',
        'Transparent pricing with proven ROI and clear metrics',
        'Open communication channels and collaborative development',
        'Enterprise-grade security without compromising on usability',
      ],
    },
    values: {
      heading: 'Core Values',
      items: [
        {
          title: 'Developer-First Approach',
          description:
            'We prioritize direct technical communication and rapid implementation over bureaucratic processes. Work directly with our engineering team.',
          icon: 'code',
        },
        {
          title: 'Market-Agnostic Platform',
          description:
            'Our platform adapts to any industry while maintaining consistent user experience, performance, and optimization benefits across all verticals.',
          icon: 'globe',
        },
        {
          title: 'Transparent Results',
          description:
            'We provide clear metrics, honest assessments, and real-time insights into what our technology can achieve for your specific business needs.',
          icon: 'chart',
        },
        {
          title: 'Rapid Innovation',
          description:
            'Continuous improvement and feature development based on user feedback, market demands, and emerging technology trends.',
          icon: 'lightning',
        },
      ],
    },
  })

  // Contact Methods
  const contactMethods = ref<ContactMethod[]>([
    {
      type: 'email',
      title: 'Email Us',
      description: "Send us an email and we'll respond within 24 hours during business days.",
      contact: 'hello@myxoflow.com',
      availability: '24/7',
    },
    {
      type: 'phone',
      title: 'Call Us',
      description:
        'Speak directly with our technical team during business hours for immediate assistance.',
      contact: '+1 (555) 123-4567',
      availability: '9 AM - 6 PM PST',
    },
    {
      type: 'consultation',
      title: 'Free Consultation',
      description: 'Schedule a personalized consultation to discuss your needs and see live demos.',
      cta: 'Schedule Now',
      availability: 'Flexible scheduling',
    },
    {
      type: 'chat',
      title: 'Live Chat',
      description: 'Connect with our support team instantly through our website chat.',
      cta: 'Start Chat',
      availability: '24/7',
    },
  ])

  // FAQ Content
  const faq = ref<FAQCategory[]>([
    {
      title: 'General Questions',
      questions: [
        {
          question: 'What is MyxoFlow and how does it work?',
          answer:
            'MyxoFlow is a unified dashboard technology platform that enables businesses to rapidly expand and optimize operations across different market verticals. Our platform provides consistent interfaces and shared optimization benefits.',
          tags: ['general', 'platform'],
        },
        {
          question: 'How does the unified dashboard approach benefit my business?',
          answer:
            'Our platform provides consistent interface and shared optimization benefits across all market solutions. Improvements in one area automatically benefit all your operations, reducing training time and maximizing efficiency.',
          tags: ['benefits', 'dashboard'],
        },
        {
          question: 'What markets and industries do you currently support?',
          answer:
            'We currently support textiles and fashion, manufacturing, dating platforms, food services, crafts and handmade goods, with new verticals added regularly based on demand.',
          tags: ['markets', 'industries'],
        },
        {
          question: 'How do you differ from other business optimization platforms?',
          answer:
            'We provide direct developer support (no account managers), unified technology across markets, rapid deployment, and transparent pricing with proven ROI metrics.',
          tags: ['differentiation', 'comparison'],
        },
      ],
    },
    {
      title: 'Technical Questions',
      questions: [
        {
          question: 'How long does implementation typically take?',
          answer:
            'Most implementations are completed within 2-4 weeks, depending on your specific requirements, data migration needs, and integration complexity. Simple setups can be done in under 48 hours.',
          tags: ['implementation', 'timeline'],
        },
        {
          question: 'What kind of technical support do you provide?',
          answer:
            'We provide direct developer support with no account managers. You work directly with our technical team for rapid iteration, problem-solving, and feature requests.',
          tags: ['support', 'developers'],
        },
        {
          question: 'Is the platform secure and compliant?',
          answer:
            'Yes, we implement enterprise-grade security measures including end-to-end encryption, regular security audits, SOC 2 compliance, and adherence to GDPR and other data protection standards.',
          tags: ['security', 'compliance'],
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer:
            'Absolutely. Our platform is designed with integration in mind, supporting REST APIs, webhooks, and common business software integrations including CRMs, ERPs, and analytics tools.',
          tags: ['integration', 'apis'],
        },
      ],
    },
    {
      title: 'Pricing & Plans',
      questions: [
        {
          question: 'How is your pricing structured?',
          answer:
            'Pricing is based on your specific market vertical, user count, and feature requirements. We offer transparent pricing with clear ROI projections and no hidden fees.',
          tags: ['pricing', 'cost'],
        },
        {
          question: 'Do you offer a free trial?',
          answer:
            'Yes, we offer a 30-day free trial with full access to platform features, dedicated setup assistance, and direct developer support to ensure success.',
          tags: ['trial', 'free'],
        },
        {
          question: "What's included in the setup and onboarding?",
          answer:
            'Setup includes platform configuration, data migration assistance, team training, integration support, and 90 days of enhanced technical support.',
          tags: ['setup', 'onboarding'],
        },
        {
          question: 'Are there any long-term contracts required?',
          answer:
            'No, we offer flexible month-to-month plans. We believe in earning your business through results, not contracts. Cancel anytime with 30 days notice.',
          tags: ['contracts', 'flexibility'],
        },
      ],
    },
  ])

  // Page Meta Information
  const pageMeta = ref<PageMeta>({
    home: {
      title: 'MyxoFlow - Unified Dashboard Technology for Business Optimization',
      description:
        'Transform your business with unified dashboard technology. Multi-market solutions with direct developer support and proven results.',
      keywords: ['dashboard', 'business optimization', 'multi-market', 'SaaS'],
    },
    about: {
      title: 'About MyxoFlow - Our Mission & Team',
      description:
        "Learn about MyxoFlow's mission to provide unified dashboard technology for rapid market expansion with direct developer support.",
      keywords: ['about', 'mission', 'team', 'values'],
    },
    products: {
      title: 'Products - MyxoFlow Platform Solutions',
      description:
        'Discover our suite of market solutions powered by unified dashboard technology. StichFlow, MyxoFill, MyxoDate, and more.',
      keywords: ['products', 'solutions', 'SaaS', 'platform'],
    },
    contact: {
      title: 'Contact MyxoFlow - Get Started Today',
      description:
        'Get in touch with our team to discuss how MyxoFlow can transform your operations. Direct developer support guaranteed.',
      keywords: ['contact', 'support', 'consultation'],
    },
    faq: {
      title: 'FAQ - Frequently Asked Questions',
      description:
        'Find answers to common questions about MyxoFlow platform, pricing, implementation, and technical support.',
      keywords: ['faq', 'questions', 'help', 'support'],
    },
  })

  // Error Messages

  const errorMessages = ref<ErrorMessages>({
    404: {
      title: 'Page Not Found',
      description:
        "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
      action: 'Go Home',
    },
    500: {
      title: 'Server Error',
      description:
        'Something went wrong on our end. Our team has been notified. Please try again later.',
      action: 'Try Again',
    },
    403: {
      title: 'Access Denied',
      description:
        "You don't have permission to view this page. Please contact support if you believe this is an error.",
      action: 'Contact Support',
    },
    form: {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      phone: 'Please enter a valid phone number',
      minLength: 'This field must be at least {min} characters long',
      maxLength: 'This field must be no more than {max} characters long',
      success: "Message sent successfully! We'll get back to you soon.",
      error: 'Failed to send message. Please try again or contact us directly.',
      submitting: 'Sending your message...',
      validation: 'Please fix the errors below before submitting.',
    },
  })

  // Form Configurations
  const formConfigs = ref({
    contact: {
      fields: [
        {
          name: 'name',
          label: 'Full Name',
          type: 'text',
          placeholder: 'Enter your full name',
          required: true,
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'Enter your email address',
          required: true,
        },
        {
          name: 'company',
          label: 'Company Name',
          type: 'text',
          placeholder: 'Enter your company name',
          required: false,
        },
        {
          name: 'industry',
          label: 'Industry',
          type: 'select',
          placeholder: 'Select your industry',
          required: false,
          options: [
            'Textiles & Fashion',
            'Manufacturing',
            'Dating & Social',
            'Food & Beverage',
            'Crafts & Handmade',
            'E-commerce',
            'Healthcare',
            'Education',
            'Other',
          ],
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
          placeholder: 'Tell us about your needs and challenges...',
          required: true,
        },
      ],
    },
  })

  // Computed Properties
  const primaryNavigation = computed(() =>
    navigation.value.filter((item) => !item.children || item.children.length === 0),
  )

  const navigationWithChildren = computed(() =>
    navigation.value.filter((item) => item.children && item.children.length > 0),
  )

  return {
    // Company
    company,

    // Navigation
    navigation,
    footerNavigation,
    socialLinks,
    primaryNavigation,
    navigationWithChildren,

    // Content
    hero,
    cta,
    about,
    contactMethods,
    faq,

    // Meta & Config
    pageMeta,
    errorMessages,
    formConfigs,
  }
})
