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
      headline: 'Optimizing Workflows, One Task at a Time',
      subheadline:
        'Streamline manufacturing and freelance operations with cost-effective, open-source tools.',
      ctaPrimary: 'See How It Works',
      ctaSecondary: 'Get Started Today',
    },

    // Company Introduction
    intro: {
      title: 'Process Optimization Without the Premium Price Tag',
      body:
        'MyxoFlow transforms complex manufacturing and service workflows into clear, efficient pipelines. ' +
        'We leverage proven, freely available tools and horizontal scaling—never costly cloud services—' +
        'all maintained by our lean, two-developer team for fast response and direct collaboration.',
    },

    // "What We Do" Section
    whatWeDo: {
      title: 'How MyxoFlow Transforms Your Operations',
      items: [
        {
          key: 'manufacturing',
          heading: 'Manufacturing Pipeline Optimization',
          description:
            'Break down production into discrete tasks—stitching, printing, labeling, cataloging, shipping—and ' +
            'let our platform match you with 500+ verified task-makers. Bidding and optimization deliver the ' +
            'best cost and time sequence for each job.',
        },
        {
          key: 'freelancer',
          heading: 'Freelancer Network Management',
          description:
            'Host regional competitions to fill specialized roles. Collect bids, then optimize for experience, ' +
            'language proficiency, and cost to ensure top-quality service on every task.',
        },
        {
          key: 'resourceAllocation',
          heading: 'Smart Resource Allocation',
          description:
            'Our optimization algorithms assign the right task to the right provider at the right time—' +
            'maximizing throughput while minimizing cost through intelligent bidding and scaling.',
        },
      ],
    },

    // Products Overview
    products: {
      title: 'Our Products at a Glance',
      list: [
        {
          key: 'dashboards',
          name: 'Myxo-Dashboards',
          description:
            'A mobile-first job management app for manufacturers. Track current, past, and future jobs with ' +
            'real-time bidding and dynamic task optimization.',
        },
        {
          key: 'fill',
          name: 'MyxoFill',
          description:
            'An integrated freelancer marketplace. Run regional bid contests, manage invoicing, and optimize ' +
            'gig assignments seamlessly.',
        },
        {
          key: 'date',
          name: 'MyxoDate',
          description:
            'A premium dating platform. $100/month entry ensures serious, committed participants—no nonsense, ' +
            'only real connections.',
        },
        {
          key: 'golgappa',
          name: 'Golgappa.inc',
          description:
            'DC-powered mobile workstations engineered for food service. Compact, rugged, and ready for ' +
            'autonomous delivery and off-grid operation.',
        },
        {
          key: 'craft',
          name: 'MyxoCraft',
          description:
            'An open-source SVG hub and design-to-manufacture platform. Download vectors, customize in-app, ' +
            'and trigger our optimized supply chain—producing quality goods at minimal cost.',
        },
      ],
    },

    // Why Choose MyxoFlow
    why: {
      title: 'Why Choose MyxoFlow',
      points: [
        {
          key: 'cost',
          heading: 'Cost-Effective Solutions',
          description:
            'No expensive cloud services or licenses—just smarter pipelines built on free tools.',
        },
        {
          key: 'scaling',
          heading: 'Horizontal Scaling That Works',
          description:
            'Scale by refining data and adding compute nodes, not by inflating your infrastructure bill.',
        },
        {
          key: 'results',
          heading: 'Real-World Results',
          description:
            "We've cut manufacturing costs from €30 to €3 per unit without sacrificing quality or reliability.",
        },
        {
          key: 'partnership',
          heading: 'Direct Partnership',
          description:
            'Work directly with our two-person dev team—no account managers, no red tape, just rapid iteration.',
        },
      ],
    },

    // Call to Action Footer
    ctaFooter: {
      heading: 'Ready to Optimize Your Processes?',
      primaryButton: 'Schedule a Free Consultation',
      secondaryButton: 'Explore Our Products',
    },

    // ABOUT PAGE
    about: {
      title: 'About MyxoFlow',
      subtitle: 'Lean. Efficient. Results-Driven.',
      mission: {
        heading: 'Our Mission',
        text: 'To democratize process optimization by making enterprise-level workflow efficiency accessible to businesses of all sizes—without the enterprise price tag.',
      },
      team: {
        heading: 'Our Team',
        text: 'MyxoFlow is powered by a dedicated two-developer team that maintains our entire technology stack. This lean structure allows us to respond rapidly to client needs, iterate quickly, and keep costs low while delivering maximum value.',
      },
      philosophy: {
        heading: 'Our Philosophy',
        points: [
          'Use proven, free tools over expensive proprietary solutions',
          'Scale horizontally through optimization, not costly cloud services',
          'Maintain direct client relationships without corporate overhead',
          'Focus on real-world results, not flashy features',
          'Build sustainable, long-term partnerships',
        ],
      },
      values: {
        heading: 'What Drives Us',
        items: [
          {
            key: 'efficiency',
            title: 'Efficiency First',
            description: 'Every solution we build eliminates waste and maximizes output',
          },
          {
            key: 'accessibility',
            title: 'Accessible Innovation',
            description:
              'Advanced optimization should be available to all businesses, not just Fortune 500 companies',
          },
          {
            key: 'transparency',
            title: 'Complete Transparency',
            description: 'No hidden fees, no vendor lock-in, no corporate bureaucracy',
          },
          {
            key: 'sustainability',
            title: 'Sustainable Growth',
            description: 'Solutions that scale with your business without breaking your budget',
          },
        ],
      },
    },

    // DETAILED PRODUCTS
    productDetails: {
      dashboards: {
        name: 'Myxo-Dashboards',
        tagline: 'Manufacturing Job Management Made Simple',
        overview:
          'A mobile-first application designed for manufacturers to manage production workflows. Track jobs, optimize task assignments, and coordinate with 500+ verified task-makers through intelligent bidding systems.',
        features: [
          'Real-time job tracking and status updates',
          'Automated task breakdown and assignment',
          'Bidding system for cost optimization',
          'Mobile-first design for on-the-go management',
          'Integration with existing manufacturing systems',
          'Performance analytics and reporting',
        ],
        useCases: [
          'Custom apparel production (shirts, hoodies, accessories)',
          'Small to medium batch manufacturing',
          'Multi-step production processes',
          'Quality control and fulfillment tracking',
        ],
        pricing: 'Contact for custom pricing based on volume and features needed',
      },
      fill: {
        name: 'MyxoFill',
        tagline: 'Smart Freelancer Management Platform',
        overview:
          'Connect with skilled freelancers through regional competitions and optimized matching. Manage tasks from assignment to payment with built-in quality controls and performance tracking.',
        features: [
          'Regional talent competitions for quality assurance',
          'Experience and language proficiency optimization',
          'Automated bid collection and analysis',
          'Integrated invoicing and payment systems',
          'Performance tracking and ratings',
          'Multi-language support for global operations',
        ],
        useCases: [
          'Content creation and copywriting',
          'Design and creative services',
          'Technical support and development',
          'Virtual assistance and administrative tasks',
        ],
        pricing: 'Commission-based model - you only pay when projects complete successfully',
      },
      date: {
        name: 'MyxoDate',
        tagline: 'Premium Dating for Serious Relationships',
        overview:
          'A curated dating platform with a $100/month membership fee that ensures all participants are serious about finding meaningful connections. No games, no time-wasters, just real people looking for real relationships.',
        features: [
          '$100/month membership ensures commitment',
          'Verified profiles and income screening',
          'Advanced compatibility matching',
          'Quality-focused user experience',
          'Direct messaging without artificial limitations',
          'Event planning and meetup coordination',
        ],
        useCases: [
          'Professionals seeking serious relationships',
          'Quality-conscious individuals tired of casual dating apps',
          'People who value their time and want efficient matching',
        ],
        pricing: '$100/month membership with no hidden fees',
      },
      golgappa: {
        name: 'Golgappa.inc',
        tagline: 'Mobile DC-Powered Food Workstations',
        overview:
          'Compact, portable cooking stations designed for the future of food service. Operates entirely on DC power (36V/48V ebike batteries) and fits in a wheeled steel cart for maximum mobility and efficiency.',
        features: [
          'DC-powered operation (36V/48V compatible)',
          'Compact design fits in standard steel cart',
          'Compatible with DC appliances (kettles, air fryers, etc.)',
          'Weather-resistant construction',
          'Quick setup and breakdown',
          'Designed for autonomous delivery era',
        ],
        useCases: [
          'Mobile food vendors and street food',
          'Pop-up restaurants and food trucks',
          'Catering services and event food',
          'Emergency food service and disaster relief',
        ],
        pricing: 'Custom quotes based on configuration and accessories',
      },
      craft: {
        name: 'MyxoCraft',
        tagline: 'Open-Source Design to Manufacturing Platform',
        overview:
          'Revolutionary platform combining an open-source SVG hub with manufacturing-as-a-service. Download vectors, customize designs, and trigger our optimized supply chain to produce quality goods at minimal cost.',
        features: [
          'Open-source SVG vector library',
          'Layered design editor (similar to GIMP/Photoshop)',
          'Direct integration with manufacturing pipeline',
          'Legal compliance and IP protection',
          'Cost optimization through smart sourcing',
          'Quality control and fulfillment tracking',
        ],
        useCases: [
          'Custom apparel and merchandise',
          'Branded corporate materials',
          'Prototype and small-batch production',
          'Print-on-demand services',
        ],
        pricing:
          'Per-item pricing based on complexity and quantity - significantly below traditional retail',
      },
    },

    // HOW IT WORKS / PROCESS
    howItWorks: {
      title: 'How MyxoFlow Transforms Your Operations',
      subtitle: 'From Chaos to Optimization in Simple Steps',
      manufacturingProcess: {
        heading: 'Manufacturing Pipeline Example',
        description: "Here's how we transformed a typical shirt production order:",
        steps: [
          {
            step: '01',
            title: 'Job Breakdown',
            description:
              'Receive order for 100 custom shirts. Break down into: design, cutting, stitching, printing, labeling, quality control, packaging, shipping.',
          },
          {
            step: '02',
            title: 'Task Distribution',
            description:
              'Push tasks to our network of 500+ verified manufacturers. Each specialist receives tasks matching their capabilities and capacity.',
          },
          {
            step: '03',
            title: 'Bidding & Optimization',
            description:
              'Collect bids from available task-makers. Our algorithm optimizes for cost, time, and quality to create the most efficient sequence.',
          },
          {
            step: '04',
            title: 'Execution & Tracking',
            description:
              'Selected providers receive jobs with clear specifications. Real-time tracking ensures quality and timeline adherence.',
          },
          {
            step: '05',
            title: 'Quality & Delivery',
            description:
              'Final quality checks, packaging, and delivery to client. Payment distributed to providers upon successful completion.',
          },
        ],
        results:
          'Result: 90% cost reduction (€30 to €3 per shirt) while maintaining quality and reducing delivery time.',
      },
      freelancerProcess: {
        heading: 'Freelancer Management Flow',
        description: 'How we optimize service-based task assignments:',
        steps: [
          {
            step: '01',
            title: 'Regional Competition',
            description:
              'Create regional contests to identify top talent. Assess experience, language skills, and specialization.',
          },
          {
            step: '02',
            title: 'Task Matching',
            description:
              'When service tasks arise, we match requirements with qualified freelancers based on optimization criteria.',
          },
          {
            step: '03',
            title: 'Bid Analysis',
            description:
              'Collect and analyze bids considering cost, timeline, and freelancer performance history.',
          },
          {
            step: '04',
            title: 'Assignment & Management',
            description:
              'Assign tasks with clear deliverables. Provide ongoing support and track progress throughout completion.',
          },
          {
            step: '05',
            title: 'Payment & Feedback',
            description:
              'Process payment upon task completion. Update freelancer ratings and performance metrics for future optimization.',
          },
        ],
      },
    },

    // CASE STUDIES
    caseStudies: {
      title: 'Success Stories',
      subtitle: 'Real Results from Real Clients',
      studies: [
        {
          id: 'apparel-manufacturing',
          client: 'Custom Apparel Brand',
          challenge:
            'High production costs and long lead times were limiting growth and profitability.',
          solution:
            'Implemented Myxo-Dashboards to optimize their supply chain and reduce production costs through strategic task distribution.',
          results: [
            '90% reduction in per-unit cost (€30 to €3)',
            '50% faster production times',
            '200% increase in order capacity',
            'Maintained quality standards throughout scaling',
          ],
          quote:
            'MyxoFlow transformed our entire operation. We can now compete with major brands while maintaining our boutique quality.',
        },
        {
          id: 'freelancer-marketplace',
          client: 'Digital Marketing Agency',
          challenge:
            'Difficulty finding reliable freelancers and managing multiple projects simultaneously.',
          solution:
            'Adopted MyxoFill platform to streamline freelancer discovery and project management across multiple regions.',
          results: [
            '70% reduction in time-to-hire',
            '40% improvement in project completion rates',
            '60% cost savings through optimized bidding',
            'Expanded service offerings to new markets',
          ],
          quote:
            'The regional competition feature ensures we always work with top-tier talent. Our client satisfaction has never been higher.',
        },
        {
          id: 'mobile-food-service',
          client: 'Food Truck Entrepreneur',
          challenge:
            'High fuel costs and limited mobility were restricting profitable locations and operating hours.',
          solution:
            'Deployed Golgappa.inc mobile workstation to reduce dependency on vehicle power and increase operational flexibility.',
          results: [
            '80% reduction in fuel costs',
            'Extended operating hours by 4 hours daily',
            'Ability to operate in locations without power access',
            '150% increase in daily revenue',
          ],
          quote:
            'The DC-powered setup changed everything. I can now operate anywhere and my margins have tripled.',
        },
      ],
    },

    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      categories: {
        general: {
          title: 'General Questions',
          questions: [
            {
              question: 'What makes MyxoFlow different from other optimization platforms?',
              answer:
                'We focus on cost-effective solutions using free, proven tools rather than expensive cloud services. Our lean two-developer team ensures rapid response and direct communication without corporate overhead.',
            },
            {
              question: 'How do you maintain quality while keeping costs so low?',
              answer:
                'Through intelligent optimization algorithms and a verified network of 500+ task-makers. We optimize for cost, time, and quality simultaneously, ensuring the best providers are matched to each job.',
            },
            {
              question: 'What industries do you serve?',
              answer:
                'Primarily manufacturing (especially apparel), service-based businesses needing freelancer management, and mobile food service. Our optimization principles apply to any industry with multi-step processes.',
            },
          ],
        },
        technical: {
          title: 'Technical Questions',
          questions: [
            {
              question: 'Do you use expensive cloud infrastructure?',
              answer:
                'No. We deliberately avoid costly cloud services and instead use horizontal scaling through database optimization and additional computing nodes as needed. This keeps your costs predictable and low.',
            },
            {
              question: 'How do you handle data security and privacy?',
              answer:
                'We implement industry-standard security practices using open-source tools. Your data remains secure while avoiding the vendor lock-in and premium pricing of proprietary solutions.',
            },
            {
              question: 'Can your platform integrate with existing systems?',
              answer:
                'Yes. Our platforms are designed to integrate with existing workflows and systems. We can adapt our solutions to work with your current tools and processes.',
            },
          ],
        },
        pricing: {
          title: 'Pricing & Business',
          questions: [
            {
              question: 'How do you price your services?',
              answer:
                'Pricing varies by product and usage. Myxo-Dashboards uses volume-based pricing, MyxoFill operates on commission, MyxoDate has a flat monthly fee, and MyxoCraft charges per item produced.',
            },
            {
              question: 'Do you require long-term contracts?',
              answer:
                'No. We believe in earning your business through results, not contract lock-ins. Most clients stay because our solutions deliver measurable value.',
            },
            {
              question: 'What kind of support do you provide?',
              answer:
                'Direct support from our development team. No account managers or support tiers—you work directly with the people who built the platform.',
            },
          ],
        },
      },
    },

    // CONTACT
    contact: {
      title: 'Get Started with MyxoFlow',
      subtitle: "Ready to optimize your processes? Let's talk.",
      methods: [
        {
          type: 'consultation',
          title: 'Schedule a Free Consultation',
          description:
            'Book a call with our team to discuss your specific needs and see how MyxoFlow can help optimize your operations.',
          cta: 'Book Consultation',
        },
        {
          type: 'demo',
          title: 'Request a Product Demo',
          description:
            'See our platforms in action with a personalized demo tailored to your industry and use case.',
          cta: 'Request Demo',
        },
        {
          type: 'email',
          title: 'Email Us Directly',
          description: "Prefer email? Send us your questions and we'll respond within 24 hours.",
          cta: 'Send Email',
          email: 'hello@myxoflow.com',
        },
      ],
      form: {
        fields: [
          { name: 'name', label: 'Full Name', type: 'text', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
          { name: 'company', label: 'Company Name', type: 'text', required: false },
          {
            name: 'industry',
            label: 'Industry',
            type: 'select',
            required: false,
            options: ['Manufacturing', 'Services', 'Food & Beverage', 'E-commerce', 'Other'],
          },
          {
            name: 'message',
            label: 'Tell us about your optimization needs',
            type: 'textarea',
            required: true,
          },
        ],
        submitText: 'Send Message',
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
