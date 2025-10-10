import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product, MarketData, ProductBadge } from '@/types/interfaces'

export const useProductStore = defineStore('product', () => {
  // Product Catalog
  const products = ref<Product[]>([
    {
      key: 'stichflow',
      name: 'StichFlow',
      tagline: 'Textile Manufacturing Optimization',
      description:
        'Streamline your textile manufacturing process with real-time production tracking, quality control, and supply chain optimization.',
      overview:
        'StichFlow revolutionizes textile manufacturing by providing end-to-end visibility and control over your production pipeline. From raw material tracking to finished goods delivery, our platform optimizes every step while maintaining quality standards.',
      features: [
        'Real-time production monitoring and alerts',
        'Automated quality control and defect detection',
        'Supply chain optimization and vendor management',
        'Intelligent inventory management and forecasting',
        'Performance analytics and reporting dashboards',
        'Compliance tracking and audit trails',
        'Mobile access for floor managers',
        'Integration with existing ERP systems',
      ],
      useCases: [
        'Large-scale textile manufacturing facilities',
        'Custom garment production and tailoring',
        'Supply chain coordination across multiple vendors',
        'Quality assurance and compliance processes',
        'Production planning and scheduling optimization',
        'Waste reduction and sustainability tracking',
      ],
      pricing: 'Starting at $299/month per facility',
      badge: {
        text: 'Most Popular',
        type: 'primary',
      },
      stats: [
        { value: '40%', label: 'Production Increase', trend: 'up', change: '+5%' },
        { value: '25%', label: 'Waste Reduction', trend: 'up', change: '+3%' },
        { value: '60%', label: 'Quality Improvement', trend: 'up', change: '+10%' },
        { value: '500+', label: 'Active Facilities', trend: 'up', change: '+50' },
      ],
      targetAudience:
        'Textile manufacturers, garment producers, and supply chain managers looking to optimize production efficiency and quality control.',
      differentiators: [
        'Industry-specific workflow optimization',
        'Seamless integration with existing manufacturing systems',
        'Real-time quality control automation',
        'Comprehensive supply chain visibility',
        'Mobile-first design for factory floors',
        'AI-powered predictive maintenance',
      ],
      processSteps: [
        {
          title: 'Production Setup',
          description:
            'Configure your manufacturing processes, quality parameters, and workflow rules within the StichFlow dashboard.',
          duration: '1-2 days',
        },
        {
          title: 'Real-time Monitoring',
          description:
            'Track production metrics, quality indicators, and supply chain status in real-time with automated alerts.',
          duration: 'Ongoing',
        },
        {
          title: 'Optimization Analytics',
          description:
            'Receive AI-powered recommendations for improving efficiency, reducing waste, and maintaining quality.',
          duration: 'Daily reports',
        },
        {
          title: 'Continuous Improvement',
          description:
            'Implement optimizations and track performance improvements with detailed analytics.',
          duration: 'Monthly reviews',
        },
      ],
      pricingModel: {
        title: 'Enterprise Manufacturing Solution',
        benefits: [
          'Unlimited production tracking across all facilities',
          'Advanced analytics and custom reporting',
          'Quality control automation and alerts',
          '24/7 technical support and monitoring',
          'Custom integrations with existing systems',
          'Comprehensive training and onboarding',
          'Mobile apps for managers and operators',
          'Regular feature updates and improvements',
        ],
      },
      screenshots: [
        '/images/stichflow-dashboard.png',
        '/images/stichflow-quality.png',
        '/images/stichflow-mobile.png',
      ],
      testimonials: [
        {
          name: 'Sarah Chen',
          role: 'Production Manager',
          company: 'TextileCorp',
          content:
            'StichFlow transformed our production efficiency. We reduced waste by 25% in the first quarter alone.',
          rating: 5,
        },
      ],
    },
    {
      key: 'fill',
      name: 'MyxoFill',
      tagline: 'Manufacturing Optimization Platform',
      description:
        'Optimize your manufacturing operations with intelligent resource allocation, predictive maintenance, and efficiency tracking.',
      overview:
        'MyxoFill provides comprehensive manufacturing optimization through intelligent automation and data-driven insights. Perfect for businesses looking to maximize output while minimizing costs and downtime.',
      features: [
        'Intelligent resource allocation and scheduling',
        'Predictive maintenance alerts and recommendations',
        'Real-time efficiency tracking and reporting',
        'Equipment performance monitoring and analytics',
        'Cost analysis and optimization suggestions',
        'Advanced production scheduling algorithms',
        'Energy consumption monitoring',
        'Workforce productivity tracking',
      ],
      useCases: [
        'Manufacturing plant optimization',
        'Equipment maintenance planning',
        'Resource utilization tracking',
        'Cost reduction initiatives',
        'Production efficiency improvement',
        'Energy management and sustainability',
      ],
      pricing: 'Starting at $199/month per facility',
      badge: {
        text: 'Growing Fast',
        type: 'success',
      },
      stats: [
        { value: '35%', label: 'Efficiency Gain', trend: 'up', change: '+2%' },
        { value: '50%', label: 'Downtime Reduction', trend: 'up', change: '+5%' },
        { value: '30%', label: 'Cost Savings', trend: 'up', change: '+4%' },
        { value: '200+', label: 'Facilities', trend: 'up', change: '+25' },
      ],
      targetAudience:
        'Manufacturing companies and plant managers focused on operational efficiency and cost optimization.',
      differentiators: [
        'Advanced predictive maintenance capabilities',
        'Real-time resource optimization algorithms',
        'Comprehensive cost analysis and reporting',
        'Easy integration with existing manufacturing systems',
        'Energy efficiency tracking and optimization',
        'Scalable from small shops to large facilities',
      ],
      processSteps: [
        {
          title: 'System Integration',
          description:
            'Connect MyxoFill with your existing manufacturing systems and equipment sensors.',
          duration: '2-3 days',
        },
        {
          title: 'Data Collection',
          description:
            'Begin collecting real-time data from your manufacturing processes and equipment.',
          duration: '1 week baseline',
        },
        {
          title: 'Analysis and Insights',
          description:
            'Review AI-generated insights and optimization recommendations based on your data.',
          duration: 'Weekly reports',
        },
        {
          title: 'Implementation',
          description:
            'Apply optimizations and track performance improvements with continuous monitoring.',
          duration: 'Ongoing optimization',
        },
      ],
      pricingModel: {
        title: 'Complete Manufacturing Suite',
        benefits: [
          'Unlimited equipment monitoring and alerts',
          'Predictive maintenance recommendations',
          'Advanced analytics and custom dashboards',
          'Priority technical support and consultation',
          'Custom reporting tools and APIs',
          'Implementation assistance and training',
          'Mobile access and notifications',
          'Integration with popular ERP systems',
        ],
      },
    },
    {
      key: 'date',
      name: 'MyxoDate',
      tagline: 'Dating Platform Optimization',
      description:
        'Enhance your dating platform with intelligent matching algorithms, user engagement tracking, and conversion optimization.',
      overview:
        'MyxoDate transforms dating platforms through advanced matching algorithms and user behavior analytics. Increase user engagement, improve match success rates, and boost premium conversions with data-driven insights.',
      features: [
        'AI-powered intelligent matching algorithms',
        'User engagement analytics and insights',
        'Conversion rate optimization tools',
        'Advanced safety and moderation features',
        'Premium feature analytics and A/B testing',
        'User retention tracking and campaigns',
        'Social graph analysis and recommendations',
        'Revenue optimization and pricing tools',
      ],
      useCases: [
        'Dating app optimization and growth',
        'User matching algorithm improvement',
        'Engagement rate enhancement strategies',
        'Premium conversion tracking and optimization',
        'Safety feature implementation and monitoring',
        'User lifecycle management and retention',
      ],
      pricing: 'Starting at $399/month per platform',
      badge: {
        text: 'High ROI',
        type: 'warning',
      },
      stats: [
        { value: '73%', label: 'Match Success Rate', trend: 'up', change: '+8%' },
        { value: '68%', label: 'User Retention', trend: 'up', change: '+12%' },
        { value: '85%', label: 'Engagement Increase', trend: 'up', change: '+15%' },
        { value: '18%', label: 'Premium Conversion', trend: 'up', change: '+3%' },
      ],
      targetAudience:
        'Dating platform operators and social app developers looking to improve user engagement and matching success.',
      differentiators: [
        'Advanced machine learning matching algorithms',
        'Comprehensive user behavior analytics',
        'Built-in safety and moderation tools',
        'Premium conversion optimization features',
        'Real-time engagement tracking',
        'Social network analysis capabilities',
      ],
      processSteps: [
        {
          title: 'Platform Analysis',
          description:
            'Analyze your current platform performance, user behavior patterns, and matching effectiveness.',
          duration: '3-5 days',
        },
        {
          title: 'Algorithm Implementation',
          description:
            'Deploy intelligent matching algorithms and user tracking systems with gradual rollout.',
          duration: '1-2 weeks',
        },
        {
          title: 'Performance Monitoring',
          description:
            'Monitor user engagement, match success rates, and conversion metrics with real-time dashboards.',
          duration: 'Ongoing',
        },
        {
          title: 'Optimization',
          description:
            'Continuously optimize algorithms and features based on performance data and user feedback.',
          duration: 'Continuous improvement',
        },
      ],
      pricingModel: {
        title: 'Dating Platform Suite',
        benefits: [
          'Advanced matching algorithms and ML models',
          'User behavior analytics and segmentation',
          'Safety and moderation tools',
          'Premium feature optimization',
          'A/B testing and experiment framework',
          'Dedicated account manager',
          'Custom feature development',
          'Priority support and consultation',
        ],
      },
    },
    {
      key: 'golgappa',
      name: 'Golgappa.inc',
      tagline: 'Food Service Optimization',
      description:
        'Optimize your food service operations with inventory management, delivery tracking, and customer experience enhancement.',
      overview:
        'Golgappa.inc revolutionizes food service operations through intelligent inventory management, delivery optimization, and customer experience analytics.',
      features: [
        'Smart inventory management and forecasting',
        'Delivery route optimization',
        'Customer experience analytics',
        'Kitchen workflow optimization',
        'Supplier management and procurement',
        'Food safety and compliance tracking',
      ],
      useCases: [
        'Restaurant chain optimization',
        'Food delivery service enhancement',
        'Kitchen efficiency improvement',
        'Inventory cost reduction',
        'Customer satisfaction tracking',
      ],
      pricing: 'Starting at $249/month per location',
      stats: [
        { value: '35%', label: 'Cost Reduction', trend: 'up' },
        { value: '50%', label: 'Delivery Efficiency', trend: 'up' },
        { value: '25%', label: 'Waste Reduction', trend: 'up' },
      ],
      targetAudience: 'Restaurant owners, food service managers, and delivery platform operators.',
      differentiators: [
        'Industry-specific food service optimization',
        'Real-time inventory and supply chain tracking',
        'Customer experience analytics',
        'Compliance and safety monitoring',
      ],
      processSteps: [
        {
          title: 'Operations Analysis',
          description:
            'Analyze current food service operations and identify optimization opportunities.',
        },
        {
          title: 'System Integration',
          description: 'Integrate with POS systems, inventory management, and delivery platforms.',
        },
        {
          title: 'Optimization Implementation',
          description: 'Deploy optimization algorithms and monitoring systems.',
        },
        {
          title: 'Performance Tracking',
          description: 'Monitor improvements and continuously optimize operations.',
        },
      ],
      pricingModel: {
        title: 'Food Service Suite',
        benefits: [
          'Complete inventory management',
          'Delivery optimization tools',
          'Customer analytics dashboard',
          'Compliance monitoring',
          'Integration support',
          'Training and support',
        ],
      },
    },
    {
      key: 'craft',
      name: 'MyxoCraft',
      tagline: 'Craft & Handmade Marketplace',
      description:
        'Empower your craft marketplace with vendor management, quality assurance, and customer experience optimization.',
      overview:
        'MyxoCraft transforms craft marketplaces through intelligent vendor management, automated quality assurance, and enhanced customer experience tools.',
      features: [
        'Vendor management and onboarding',
        'Quality assurance workflows',
        'Customer experience optimization',
        'Inventory and listing management',
        'Payment processing optimization',
        'Marketing and promotion tools',
      ],
      useCases: [
        'Craft marketplace optimization',
        'Vendor relationship management',
        'Quality control processes',
        'Customer satisfaction improvement',
        'Revenue optimization',
      ],
      pricing: 'Starting at $149/month plus transaction fees',
      stats: [
        { value: '45%', label: 'Vendor Satisfaction', trend: 'up' },
        { value: '30%', label: 'Sales Increase', trend: 'up' },
        { value: '40%', label: 'Customer Retention', trend: 'up' },
      ],
      targetAudience:
        'Craft marketplace operators, handmade goods platforms, and artisan communities.',
      differentiators: [
        'Craft-specific marketplace features',
        'Automated quality assurance',
        'Vendor success tools',
        'Customer experience optimization',
      ],
      processSteps: [
        {
          title: 'Marketplace Analysis',
          description: 'Analyze current marketplace performance and vendor relationships.',
        },
        {
          title: 'Platform Integration',
          description: 'Integrate with existing e-commerce platforms and payment systems.',
        },
        {
          title: 'Vendor Onboarding',
          description: 'Streamline vendor onboarding and quality assurance processes.',
        },
        {
          title: 'Growth Optimization',
          description: 'Implement growth strategies and performance monitoring.',
        },
      ],
      pricingModel: {
        title: 'Craft Marketplace Suite',
        benefits: [
          'Vendor management tools',
          'Quality assurance workflows',
          'Customer analytics',
          'Payment processing',
          'Marketing automation',
          'Support and training',
        ],
      },
    },
  ])

  // Market Data for Dashboard Previews
  const marketData = ref<MarketData[]>([
    {
      name: 'StichFlow',
      status: 'Active',
      users: '2.4k',
      growth: '+12%',
      color: '#3b82f6',
      icon: '🧵',
      description: 'Textile manufacturing optimization',
    },
    {
      name: 'MyxoFill',
      status: 'Growing',
      users: '1.8k',
      growth: '+24%',
      color: '#10b981',
      icon: '💧',
      description: 'Manufacturing resource optimization',
    },
    {
      name: 'MyxoDate',
      status: 'Expanding',
      users: '3.2k',
      growth: '+18%',
      color: '#f59e0b',
      icon: '💝',
      description: 'Dating platform enhancement',
    },
    {
      name: 'MyxoCraft',
      status: 'Active',
      users: '1.5k',
      growth: '+32%',
      color: '#8b5cf6',
      icon: '🎨',
      description: 'Craft marketplace optimization',
    },
    {
      name: 'Golgappa.inc',
      status: 'New',
      users: '0.9k',
      growth: '+45%',
      color: '#ef4444',
      icon: '🍛',
      description: 'Food service optimization',
    },
  ])

  // Product Categories
  const categories = ref([
    {
      key: 'manufacturing',
      name: 'Manufacturing',
      description: 'Optimization solutions for manufacturing operations',
      products: ['stichflow', 'fill'],
    },
    {
      key: 'marketplace',
      name: 'Marketplace',
      description: 'Platform solutions for online marketplaces',
      products: ['craft', 'date'],
    },
    {
      key: 'service',
      name: 'Service Industry',
      description: 'Solutions for service-based businesses',
      products: ['golgappa'],
    },
  ])

  // Computed Properties
  const getProduct = computed(() => {
    return (key: string) => products.value.find((p) => p.key === key)
  })

  const featuredProducts = computed(() => {
    return products.value.filter(
      (p) => p.badge && (p.badge.type === 'primary' || p.badge.type === 'success'),
    )
  })

  const productsByCategory = computed(() => {
    return (categoryKey: string) => {
      const category = categories.value.find((c) => c.key === categoryKey)
      return category ? products.value.filter((p) => category.products.includes(p.key)) : []
    }
  })

  const totalUsers = computed(() => {
    return marketData.value.reduce((sum, market) => {
      const userCount = parseFloat(market.users.replace('k', '')) * 1000
      return sum + userCount
    }, 0)
  })

  const avgGrowthRate = computed(() => {
    const totalGrowth = marketData.value.reduce((sum, market) => {
      return sum + parseFloat(market.growth.replace('+', '').replace('%', ''))
    }, 0)
    return `+${(totalGrowth / marketData.value.length).toFixed(1)}%`
  })

  // Methods
  const getProductIcon = (key: string): string => {
    const iconMap: Record<string, string> = {
      stichflow: '🧵',
      fill: '💧',
      date: '💝',
      golgappa: '🍛',
      craft: '🎨',
      dashboards: '📊',
    }
    return iconMap[key] || '📱'
  }

  const getProductBadge = (key: string): ProductBadge | null => {
    const product = products.value.find((p) => p.key === key)
    return product?.badge || null
  }

  const getKeyFeatures = (key: string): string[] => {
    const product = products.value.find((p) => p.key === key)
    return product?.features.slice(0, 3) || []
  }

  const getProductCardClass = (key: string): string => {
    const classMap: Record<string, string> = {
      stichflow: 'card-blue',
      fill: 'card-green',
      date: 'card-orange',
      golgappa: 'card-red',
      craft: 'card-purple',
      dashboards: 'card-indigo',
    }
    return classMap[key] || 'card-default'
  }

  const getProductColor = (key: string): string => {
    const colorMap: Record<string, string> = {
      stichflow: '#3b82f6',
      fill: '#10b981',
      date: '#f59e0b',
      golgappa: '#ef4444',
      craft: '#8b5cf6',
      dashboards: '#6366f1',
    }
    return colorMap[key] || '#6b7280'
  }

  const searchProducts = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    return products.value.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.tagline.toLowerCase().includes(lowercaseQuery) ||
        product.features.some((feature) => feature.toLowerCase().includes(lowercaseQuery)),
    )
  }

  return {
    // Data
    products,
    marketData,
    categories,

    // Computed
    getProduct,
    featuredProducts,
    productsByCategory,
    totalUsers,
    avgGrowthRate,

    // Methods
    getProductIcon,
    getProductBadge,
    getKeyFeatures,
    getProductCardClass,
    getProductColor,
    searchProducts,
  }
})
