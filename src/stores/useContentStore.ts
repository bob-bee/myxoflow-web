// src/stores/contentStore.ts
import { defineStore } from 'pinia'
import type {
  CaseStudy,
  ContentState,
  FAQContent,
  FAQQuestion,
  HeroContent,
  Product,
  ProductDetail,
  ProductDetailsContent,
} from '@/types/content'

export const useContentStore = defineStore('content', {
  state: (): ContentState => ({
    // Hero Section
    hero: {
      headline: 'One Dashboard Platform, Multiple Markets',
      subheadline:
        'Transform any industry workflow with our unified dashboard technology. From clothing manufacturing to freelancer management - one platform, infinite possibilities.',
      ctaPrimary: 'Explore Our Solutions',
      ctaSecondary: 'See Live Dashboards',
    },

    // Company Introduction
    intro: {
      title: 'Multi-Market Process Optimization Without the Premium Price Tag',
      body:
        'MyxoFlow powers specialized dashboards across diverse industries using the same core technology. ' +
        "Whether you're managing clothing supply chains, coordinating freelance networks, or optimizing manufacturing workflows, " +
        'our unified platform adapts to your market while maintaining our lean, cost-effective approach with direct developer support.',
    },

    // "What We Do" Section - Updated to reflect multi-market approach
    whatWeDo: {
      title: 'How MyxoFlow Adapts to Any Market',
      items: [
        {
          key: 'unified-platform',
          heading: 'Unified Dashboard Technology',
          description:
            'One powerful dashboard framework that adapts to any industry. The same core technology powers clothing manufacturing, ' +
            'freelancer networks, food service optimization, and custom manufacturing processes.',
        },
        {
          key: 'market-specialization',
          heading: 'Market-Specific Solutions',
          description:
            'Each market gets tailored business logic while leveraging our proven dashboard infrastructure. ' +
            'From StichFlow (clothing SCM) to MyxoFill (freelancer management) - specialized functionality on a unified foundation.',
        },
        {
          key: 'scalable-architecture',
          heading: 'Cross-Market Scalability',
          description:
            'Launch in one market, expand to others seamlessly. Our architecture allows rapid deployment of new market solutions ' +
            'while maintaining consistency and shared optimizations across all verticals.',
        },
      ],
    },

    // Products Overview - Updated to show the multi-market dashboard approach
    products: {
      title: 'Our Market Solutions',
      list: [
        {
          key: 'dashboards',
          name: 'MyxoFlow Dashboards',
          description:
            'The core dashboard platform that powers all our market solutions. Unified technology stack with ' +
            'customizable business logic for any industry workflow optimization.',
        },
        {
          key: 'stichflow',
          name: 'StichFlow (MyxoMake)',
          description:
            'Clothing supply chain management powered by MyxoFlow Dashboards. Connect workshops with retailers, ' +
            'manage bulk orders, track production, and optimize apparel manufacturing workflows.',
        },
        {
          key: 'fill',
          name: 'MyxoFill',
          description:
            'Freelancer marketplace and project management using our dashboard technology. Run regional competitions, ' +
            'optimize gig assignments, and manage distributed teams efficiently.',
        },
        {
          key: 'date',
          name: 'MyxoDate',
          description:
            'Premium relationship platform built on MyxoFlow infrastructure. $100/month membership ensures serious ' +
            'participants while leveraging our proven user management and matching algorithms.',
        },
        {
          key: 'golgappa',
          name: 'Golgappa.inc',
          description:
            'Mobile food service optimization platform. DC-powered workstation management, route optimization, ' +
            'and autonomous delivery preparation using our dashboard framework.',
        },
        {
          key: 'craft',
          name: 'MyxoCraft',
          description:
            'Design-to-manufacturing platform combining open-source SVG library with production dashboards. ' +
            'Customize designs and trigger optimized supply chains through our unified interface.',
        },
      ],
    },

    // Why Choose MyxoFlow - Updated to emphasize the platform approach
    why: {
      title: 'Why Choose MyxoFlow Platform',
      points: [
        {
          key: 'unified-tech',
          heading: 'One Platform, Multiple Markets',
          description:
            'Deploy proven dashboard technology across any industry. Our unified platform reduces development time and costs while ensuring consistency.',
        },
        {
          key: 'rapid-deployment',
          heading: 'Rapid Market Entry',
          description:
            'Launch new market solutions in weeks, not months. Our dashboard framework provides the foundation while custom business logic handles industry specifics.',
        },
        {
          key: 'proven-results',
          heading: 'Cross-Market Success',
          description:
            'From 90% cost reduction in clothing manufacturing to efficient freelancer matching - our platform delivers results across diverse industries.',
        },
        {
          key: 'lean-approach',
          heading: 'Direct Developer Partnership',
          description:
            'Work directly with our two-person development team across all market solutions. No account managers, just rapid iteration and direct communication.',
        },
      ],
    },

    // Call to Action Footer
    ctaFooter: {
      heading: 'Ready to Launch Your Market Solution?',
      primaryButton: 'Schedule Platform Demo',
      secondaryButton: 'Explore Market Solutions',
    },

    // ABOUT PAGE - Updated to reflect the platform approach
    about: {
      title: 'About MyxoFlow',
      subtitle: 'One Platform. Multiple Markets. Infinite Possibilities.',
      mission: {
        heading: 'Our Mission',
        text: 'To democratize industry-specific workflow optimization by providing a unified dashboard platform that adapts to any market - from clothing manufacturing to freelancer management - without the enterprise price tag.',
      },
      team: {
        heading: 'Our Team',
        text: 'MyxoFlow is powered by a focused two-developer team that maintains our unified platform architecture across all market verticals. This lean structure enables rapid deployment of new market solutions while ensuring consistent quality and direct client communication.',
      },
      philosophy: {
        heading: 'Our Philosophy',
        points: [
          'Build once, deploy everywhere - unified technology across markets',
          'Market-specific business logic on proven dashboard foundation',
          'Horizontal scaling through platform optimization, not infrastructure costs',
          'Direct developer partnerships across all market solutions',
          'Real-world results through adaptive, industry-focused implementations',
        ],
      },
      values: {
        heading: 'What Drives Us',
        items: [
          {
            key: 'platform-first',
            title: 'Platform-First Thinking',
            description:
              'Every solution built on our unified dashboard technology ensures consistency and rapid market entry',
          },
          {
            key: 'market-adaptation',
            title: 'Market Adaptation',
            description:
              'The same core platform powers clothing SCM, freelancer networks, food service, and manufacturing processes',
          },
          {
            key: 'unified-experience',
            title: 'Unified User Experience',
            description:
              'Consistent interface design and interaction patterns across all market solutions',
          },
          {
            key: 'scalable-growth',
            title: 'Scalable Growth',
            description:
              'Launch in one market, expand to others seamlessly using our proven dashboard framework',
          },
        ],
      },
    },

    // DETAILED PRODUCTS - Updated to show the platform relationships
    productDetails: {
      dashboards: {
        name: 'MyxoFlow Dashboards',
        tagline: 'The Foundation Platform for All Market Solutions',
        overview:
          'Our core dashboard technology that powers every market solution. A unified platform providing consistent user experience, data management, and workflow optimization across diverse industries.',
        features: [
          'Unified user interface framework adaptable to any market',
          'Real-time data synchronization and analytics across solutions',
          'Customizable business logic engine for industry-specific workflows',
          'Cross-platform compatibility (web, mobile, desktop)',
          'Integrated user management and authentication system',
          'Scalable architecture supporting multiple market deployments',
        ],
        useCases: [
          'Clothing supply chain management (StichFlow)',
          'Freelancer marketplace operations (MyxoFill)',
          'Premium dating platform management (MyxoDate)',
          'Food service optimization (Golgappa.inc)',
          'Design-to-manufacturing workflows (MyxoCraft)',
        ],
        pricing: 'Platform licensing based on market deployment and customization needs',
      },
      stichflow: {
        name: 'StichFlow (MyxoMake)',
        tagline: 'Clothing Supply Chain Management on MyxoFlow Platform',
        overview:
          'Complete B2B apparel supply chain solution built on MyxoFlow Dashboards. Connect clothing workshops with retailers, manage bulk orders, and optimize manufacturing workflows through our unified platform.',
        features: [
          'Workshop and retailer onboarding with profile management',
          'Bulk order processing and customization tracking',
          'Real-time production monitoring and quality control',
          'Payment processing and shipment tracking integration',
          'Multi-language support (English, Dutch, Italian)',
          'Sustainable manufacturing process optimization',
        ],
        useCases: [
          'Private label clothing manufacturing coordination',
          'Small to medium batch apparel production',
          'Cut and sew operation management',
          'Sustainable clothing supply chain optimization',
          'OEM clothing manufacturing workflows',
        ],
        pricing: 'Subscription model based on order volume and workshop network size',
      },
      fill: {
        name: 'MyxoFill',
        tagline: 'Freelancer Network Management via Dashboard Platform',
        overview:
          'Advanced freelancer marketplace and project management system powered by MyxoFlow Dashboards. Optimize talent matching, manage distributed teams, and coordinate project delivery through regional competitions.',
        features: [
          'Regional talent competitions and skill assessment',
          'AI-powered freelancer matching and optimization',
          'Integrated project management and milestone tracking',
          'Multi-currency payment processing and invoicing',
          'Performance analytics and freelancer rating systems',
          'Cross-market talent pool sharing',
        ],
        useCases: [
          'Content creation and copywriting project management',
          'Technical development team coordination',
          'Design and creative service marketplace',
          'Virtual assistance and administrative task management',
        ],
        pricing: 'Commission-based model with platform usage fees',
      },
      date: {
        name: 'MyxoDate',
        tagline: 'Premium Relationship Platform on MyxoFlow Infrastructure',
        overview:
          'High-quality dating platform built using MyxoFlow Dashboard technology. Premium membership model ensures serious participants while leveraging our proven user management and matching optimization.',
        features: [
          '$100/month premium membership with income verification',
          'Advanced compatibility matching using platform algorithms',
          'Verified profile system with background checks',
          'Event planning and meetup coordination tools',
          'Cross-platform messaging and communication suite',
          'Privacy-focused design with secure data handling',
        ],
        useCases: [
          'Professional networking and relationship building',
          'Executive and high-income bracket matching',
          'Location-based premium dating experiences',
          'Event-driven social connections',
        ],
        pricing: '$100/month premium membership with no hidden fees',
      },
      golgappa: {
        name: 'Golgappa.inc',
        tagline: 'Food Service Optimization Platform',
        overview:
          'Mobile food service management system powered by MyxoFlow Dashboards. Optimize DC-powered workstations, manage mobile operations, and prepare for autonomous delivery systems.',
        features: [
          'DC power system optimization (36V/48V ebike batteries)',
          'Mobile workstation configuration and monitoring',
          'Route optimization and location analytics',
          'Inventory management for mobile operations',
          'Weather-resistant operation planning',
          'Integration with autonomous delivery systems',
        ],
        useCases: [
          'Food truck and mobile vendor operations',
          'Pop-up restaurant and event catering',
          'Street food vendor management',
          'Disaster relief and emergency food service',
        ],
        pricing: 'Hardware + software bundle pricing with ongoing platform fees',
      },
      craft: {
        name: 'MyxoCraft',
        tagline: 'Design-to-Manufacturing Platform',
        overview:
          'Open-source design hub combined with manufacturing management, powered by MyxoFlow Dashboards. Download vectors, customize designs, and trigger optimized production workflows through our unified interface.',
        features: [
          'Open-source SVG library with community contributions',
          'Integrated design editor with layering capabilities',
          'Direct manufacturing pipeline integration',
          'Cost optimization through intelligent sourcing',
          'Quality control and fulfillment tracking',
          'Legal compliance and IP protection systems',
        ],
        useCases: [
          'Custom merchandise and branded materials',
          'Print-on-demand service coordination',
          'Prototype development and small-batch production',
          'Corporate branding and marketing material creation',
        ],
        pricing: 'Per-item production costs with design platform access included',
      },
    },

    // HOW IT WORKS / PROCESS - Updated to show the unified platform approach
    howItWorks: {
      title: 'How MyxoFlow Platform Transforms Any Market',
      subtitle: 'From Core Technology to Market-Specific Solutions',
      platformProcess: {
        heading: 'Unified Platform Deployment',
        description: 'How we adapt our core dashboard technology to any market:',
        steps: [
          {
            step: '01',
            title: 'Market Analysis & Customization',
            description:
              'Analyze target market workflows and customize our dashboard platform with industry-specific business logic and user interface adaptations.',
          },
          {
            step: '02',
            title: 'Rapid Deployment & Integration',
            description:
              'Deploy the customized solution using our proven infrastructure, integrating with existing market tools and establishing data connections.',
          },
          {
            step: '03',
            title: 'User Onboarding & Training',
            description:
              'Onboard market participants using our unified user management system, providing consistent training across all platform solutions.',
          },
          {
            step: '04',
            title: 'Optimization & Scaling',
            description:
              'Monitor performance across all market solutions, sharing optimizations and improvements between different industry implementations.',
          },
          {
            step: '05',
            title: 'Cross-Market Innovation',
            description:
              'Leverage insights from one market to improve solutions in others, creating a network effect that benefits all platform users.',
          },
        ],
        results:
          'Result: Rapid market entry with proven technology, consistent user experience, and shared optimizations across all industry solutions.',
      },
      stichflowProcess: {
        heading: 'StichFlow: Clothing SCM Example',
        description: 'How our dashboard platform powers clothing manufacturing:',
        steps: [
          {
            step: '01',
            title: 'Workshop & Retailer Onboarding',
            description:
              'Easy registration and profile setup for clothing manufacturers and retailers using our unified user management system.',
          },
          {
            step: '02',
            title: 'Order Processing & Matching',
            description:
              'Bulk clothing orders processed through our dashboard with intelligent matching between retailers and appropriate workshops.',
          },
          {
            step: '03',
            title: 'Production Tracking & Quality Control',
            description:
              'Real-time monitoring of manufacturing progress with quality checkpoints and milestone tracking via our platform.',
          },
          {
            step: '04',
            title: 'Payment & Shipment Coordination',
            description:
              'Automated payment processing and shipment tracking through integrated logistics partners and payment systems.',
          },
          {
            step: '05',
            title: 'Performance Analytics & Optimization',
            description:
              'Continuous improvement through data analytics, optimizing costs, quality, and delivery times across the network.',
          },
        ],
      },
    },

    // CASE STUDIES - Updated to show cross-market success
    caseStudies: {
      title: 'Platform Success Across Markets',
      subtitle: 'Real Results from MyxoFlow Dashboard Implementations',
      studies: [
        {
          id: 'stichflow-implementation',
          client: 'StichFlow Clothing Platform',
          challenge:
            'Launch a B2B clothing supply chain platform connecting workshops with retailers while managing complex order fulfillment.',
          solution:
            'Deployed MyxoFlow Dashboards with clothing-specific business logic, integrated workshop management, and order tracking systems.',
          results: [
            'Platform launched in 3 months using existing dashboard framework',
            '50+ workshops onboarded in first quarter',
            '90% order fulfillment accuracy through integrated tracking',
            'Multi-language support for European market expansion',
          ],
          quote:
            "MyxoFlow's unified platform let us focus on clothing industry specifics instead of building dashboard infrastructure from scratch.",
        },
        {
          id: 'cross-market-optimization',
          client: 'Multi-Market Deployment',
          challenge:
            'Deploy solutions across freelancer management and food service markets while maintaining consistency and shared optimizations.',
          solution:
            'Used MyxoFlow platform architecture to rapidly deploy MyxoFill and Golgappa.inc solutions with shared user management and analytics.',
          results: [
            '70% faster deployment compared to building separate platforms',
            'Shared optimization algorithms improved performance across markets',
            'Unified user experience reduced training costs by 60%',
            'Cross-platform data insights enhanced all market solutions',
          ],
          quote:
            'The platform approach meant improvements in one market automatically benefited our other solutions. True synergy.',
        },
        {
          id: 'dashboard-efficiency',
          client: 'Manufacturing Process Optimization',
          challenge:
            'Complex manufacturing workflows needed streamlined management while maintaining flexibility for different product types.',
          solution:
            'Implemented MyxoCraft design-to-manufacturing solution using core dashboard platform with customized production workflows.',
          results: [
            '80% reduction in design-to-production time',
            'Unified interface for design, production, and fulfillment',
            'Cross-market manufacturing optimization sharing',
            'Open-source design library with 1000+ community contributions',
          ],
          quote:
            'Having design tools and manufacturing management in one dashboard revolutionized our workflow efficiency.',
        },
      ],
    },

    // FAQ - Updated to address platform and multi-market questions
    faq: {
      title: 'Frequently Asked Questions',
      categories: {
        platform: {
          title: 'Platform Questions',
          questions: [
            {
              question: 'How does one platform serve multiple markets?',
              answer:
                "Our MyxoFlow Dashboard platform provides unified technology infrastructure while allowing custom business logic for each market. The core user interface, data management, and optimization systems remain consistent, but industry-specific workflows are tailored to each market's needs.",
            },
            {
              question: 'Can I use the platform for my specific industry?',
              answer:
                "Yes! Our dashboard platform is designed for adaptability. We've successfully deployed solutions for clothing manufacturing, freelancer management, food service, and design-to-manufacturing. We can customize the platform for your industry requirements.",
            },
            {
              question: "What's the relationship between MyxoFlow and StichFlow?",
              answer:
                "StichFlow is our clothing supply chain management solution built on MyxoFlow Dashboards. It's one of several market-specific implementations of our unified platform technology, specifically focused on B2B apparel manufacturing and retail coordination.",
            },
          ],
        },
        technical: {
          title: 'Technical Questions',
          questions: [
            {
              question: 'How do you maintain consistency across different market solutions?',
              answer:
                'Our unified dashboard framework ensures consistent user experience, data structures, and optimization algorithms across all market implementations. Market-specific customizations are built as modules on top of the core platform.',
            },
            {
              question: 'Can improvements in one market benefit others?',
              answer:
                'Absolutely! Optimizations made to the core platform automatically benefit all market solutions. Additionally, insights from one market often inform improvements that can be applied to others, creating a network effect.',
            },
            {
              question: 'How quickly can you deploy to a new market?',
              answer:
                'Because we use proven dashboard infrastructure, new market deployments typically take weeks rather than months. The core platform handles user management, data processing, and interface consistency while we focus on market-specific business logic.',
            },
          ],
        },
        business: {
          title: 'Business Questions',
          questions: [
            {
              question: 'How do you price across different market solutions?',
              answer:
                'Pricing varies by market and implementation complexity. StichFlow uses subscription models, MyxoFill uses commission-based pricing, MyxoDate has premium membership fees, and MyxoCraft uses per-item production costs. Each market solution is priced appropriately for its industry.',
            },
            {
              question: 'Do you require long-term commitments?',
              answer:
                'No. Our lean two-developer team approach means we earn your business through results, not contracts. Most clients stay because our platform solutions deliver measurable value and continuous improvement.',
            },
            {
              question: 'How do you support multiple market solutions with just two developers?',
              answer:
                'Our unified platform architecture allows us to maintain multiple market solutions efficiently. Shared infrastructure, common optimization algorithms, and consistent user experience patterns mean improvements benefit all solutions simultaneously.',
            },
          ],
        },
      },
    },

    // CONTACT - Updated to reflect platform approach
    contact: {
      title: 'Launch Your Market Solution with MyxoFlow',
      subtitle: 'Ready to deploy proven dashboard technology in your industry?',
      methods: [
        {
          type: 'consultation',
          title: 'Platform Demo & Consultation',
          description:
            'See MyxoFlow Dashboards in action across multiple markets and discuss how we can adapt our platform for your specific industry needs.',
          cta: 'Schedule Platform Demo',
        },
        {
          type: 'market-analysis',
          title: 'Market-Specific Analysis',
          description:
            'Get a detailed analysis of how our dashboard platform can be customized for your industry, including timeline and implementation approach.',
          cta: 'Request Market Analysis',
        },
        {
          type: 'email',
          title: 'Direct Developer Contact',
          description:
            'Email our development team directly for technical questions or custom implementation discussions.',
          cta: 'Email Development Team',
          email: 'hello@myxoflow.com',
        },
      ],
      form: {
        fields: [
          { name: 'name', label: 'Full Name', type: 'text', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
          { name: 'company', label: 'Company Name', type: 'text', required: false },
          {
            name: 'market',
            label: 'Target Market/Industry',
            type: 'select',
            required: false,
            options: [
              'Manufacturing & Supply Chain',
              'Freelancer & Gig Economy',
              'Food Service & Mobile Operations',
              'Design & Creative Services',
              'Dating & Social Platforms',
              'Other - Please Specify',
            ],
          },
          {
            name: 'message',
            label: 'Tell us about your market and dashboard needs',
            type: 'textarea',
            required: true,
          },
        ],
        submitText: 'Request Platform Information',
      },
    },
  }),
  // src/stores/contentStore.ts (corrected getters and actions)

  getters: {
    getProductByKey: (state) => {
      return (key: string): Product | undefined => {
        return state.products.list.find((product) => product.key === key)
      }
    },

    getProductDetailByKey: (state) => {
      return (key: string): ProductDetail | undefined => {
        // Type guard to check if key exists in productDetails
        if (key in state.productDetails) {
          return state.productDetails[key as keyof ProductDetailsContent]
        }
        return undefined
      }
    },

    getCaseStudyById: (state) => {
      return (id: string): CaseStudy | undefined => {
        return state.caseStudies.studies.find((study) => study.id === id)
      }
    },

    // Helper getter to get all available product keys
    getAvailableProductKeys: (state): string[] => {
      return Object.keys(state.productDetails)
    },
  },

  actions: {
    updateHeroContent(newHero: Partial<HeroContent>): void {
      this.hero = { ...this.hero, ...newHero }
    },

    addFAQQuestion(category: keyof FAQContent['categories'], question: FAQQuestion): void {
      this.faq.categories[category].questions.push(question)
    },

    updateContactEmail(newEmail: string): void {
      const emailMethod = this.contact.methods.find((method) => method.type === 'email')
      if (emailMethod) {
        emailMethod.email = newEmail
      }
    },
  },
})
