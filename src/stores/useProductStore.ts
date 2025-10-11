import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Product {
  key: string
  name: string
  tagline: string
  description: string
  overview: string
  features: string[]
  useCases: string[]
  pricing: string
  badge?: {
    text: string
    type: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
  }
  stats: Array<{
    value: string
    label: string
    trend?: 'up' | 'down' | 'stable'
    change?: string
  }>
  targetAudience: string
  differentiators: string[]
  processSteps: Array<{
    title: string
    description: string
  }>
  pricingModel: {
    title: string
    benefits: string[]
  }
}

interface MarketData {
  name: string
  status: string
  users: string
  growth: string
  color: string
  icon: string
}

export const useProductStore = defineStore('product', () => {
  // ✅ Fixed: Proper typing with Product[]
  const products = ref<Product[]>([
    {
      key: 'stichflow',
      name: 'StichFlow',
      tagline: 'Textile Manufacturing Optimization',
      description:
        'Streamline your textile manufacturing process with real-time production tracking, quality control, and supply chain optimization.',
      overview:
        'StichFlow revolutionizes textile manufacturing by providing end-to-end visibility and control over your production pipeline. From raw material tracking to finished goods delivery, our platform optimizes every step of the process.',
      features: [
        'Real-time production monitoring',
        'Quality control automation',
        'Supply chain optimization',
        'Inventory management',
        'Performance analytics',
        'Compliance tracking',
      ],
      useCases: [
        'Large-scale textile manufacturing',
        'Custom garment production',
        'Supply chain coordination',
        'Quality assurance processes',
        'Production planning and scheduling',
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
      ],
      targetAudience:
        'Textile manufacturers, garment producers, and supply chain managers looking to optimize production efficiency and quality control.',
      differentiators: [
        'Industry-specific workflow optimization',
        'Integration with existing manufacturing systems',
        'Real-time quality control automation',
        'Comprehensive supply chain visibility',
      ],
      processSteps: [
        {
          title: 'Production Setup',
          description:
            'Configure your manufacturing processes and quality parameters within the StichFlow dashboard.',
        },
        {
          title: 'Real-time Monitoring',
          description:
            'Track production metrics, quality indicators, and supply chain status in real-time.',
        },
        {
          title: 'Optimization Analytics',
          description:
            'Receive AI-powered recommendations for improving efficiency and reducing waste.',
        },
        {
          title: 'Continuous Improvement',
          description: 'Implement optimizations and track performance improvements over time.',
        },
      ],
      pricingModel: {
        title: 'Enterprise Manufacturing Solution',
        benefits: [
          'Unlimited production tracking',
          'Advanced analytics and reporting',
          'Quality control automation',
          '24/7 technical support',
          'Custom integrations',
          'Training and onboarding',
        ],
      },
    },
    {
      key: 'fill',
      name: 'MyxoFill',
      tagline: 'Manufacturing Optimization Platform',
      description:
        'Optimize your manufacturing operations with intelligent resource allocation, predictive maintenance, and efficiency tracking.',
      overview:
        'MyxoFill provides comprehensive manufacturing optimization through intelligent automation and data-driven insights. Perfect for businesses looking to maximize output while minimizing costs.',
      features: [
        'Resource allocation optimization',
        'Predictive maintenance alerts',
        'Efficiency tracking and reporting',
        'Equipment performance monitoring',
        'Cost analysis and optimization',
        'Production scheduling',
      ],
      useCases: [
        'Manufacturing plant optimization',
        'Equipment maintenance planning',
        'Resource utilization tracking',
        'Cost reduction initiatives',
        'Production efficiency improvement',
      ],
      pricing: 'Starting at $199/month per facility',
      stats: [
        { value: '35%', label: 'Efficiency Gain', trend: 'up', change: '+2%' },
        { value: '50%', label: 'Downtime Reduction', trend: 'up', change: '+5%' },
        { value: '30%', label: 'Cost Savings', trend: 'up', change: '+4%' },
      ],
      targetAudience:
        'Manufacturing companies and plant managers focused on operational efficiency and cost optimization.',
      differentiators: [
        'Predictive maintenance capabilities',
        'Real-time resource optimization',
        'Comprehensive cost analysis',
        'Easy integration with existing systems',
      ],
      processSteps: [
        {
          title: 'System Integration',
          description: 'Connect MyxoFill with your existing manufacturing systems and equipment.',
        },
        {
          title: 'Data Collection',
          description: 'Begin collecting real-time data from your manufacturing processes.',
        },
        {
          title: 'Analysis and Insights',
          description: 'Review AI-generated insights and optimization recommendations.',
        },
        {
          title: 'Implementation',
          description: 'Apply optimizations and track performance improvements.',
        },
      ],
      pricingModel: {
        title: 'Complete Manufacturing Suite',
        benefits: [
          'Unlimited equipment monitoring',
          'Predictive maintenance alerts',
          'Advanced analytics dashboard',
          'Priority technical support',
          'Custom reporting tools',
          'Implementation assistance',
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
        'MyxoDate transforms dating platforms through advanced matching algorithms and user behavior analytics. Increase user engagement and improve match success rates with data-driven insights.',
      features: [
        'Intelligent matching algorithms',
        'User engagement analytics',
        'Conversion rate optimization',
        'Safety and moderation tools',
        'Premium feature analytics',
        'Retention tracking',
      ],
      useCases: [
        'Dating app optimization',
        'User matching improvement',
        'Engagement rate enhancement',
        'Premium conversion tracking',
        'Safety feature implementation',
      ],
      pricing: 'Starting at $399/month per platform',
      badge: {
        text: 'High ROI',
        type: 'success',
      },
      stats: [
        { value: '73%', label: 'Match Success Rate', trend: 'up', change: '+8%' },
        { value: '68%', label: 'User Retention', trend: 'up', change: '+12%' },
        { value: '85%', label: 'Engagement Increase', trend: 'up', change: '+15%' },
      ],
      targetAudience:
        'Dating platform operators and social app developers looking to improve user engagement and matching success.',
      differentiators: [
        'Advanced matching algorithms',
        'Comprehensive user analytics',
        'Safety and moderation features',
        'Premium conversion optimization',
      ],
      processSteps: [
        {
          title: 'Platform Analysis',
          description: 'Analyze your current platform performance and user behavior patterns.',
        },
        {
          title: 'Algorithm Implementation',
          description: 'Deploy intelligent matching algorithms and tracking systems.',
        },
        {
          title: 'Performance Monitoring',
          description: 'Monitor user engagement, match success rates, and conversion metrics.',
        },
        {
          title: 'Optimization',
          description: 'Continuously optimize algorithms and features based on performance data.',
        },
      ],
      pricingModel: {
        title: 'Dating Platform Suite',
        benefits: [
          'Advanced matching algorithms',
          'User behavior analytics',
          'Safety and moderation tools',
          'Premium feature optimization',
          'Dedicated account manager',
          'Custom feature development',
        ],
      },
    },
    // Add more products
    {
      key: 'golgappa',
      name: 'Golgappa.inc',
      tagline: 'Food Service Optimization',
      description:
        'Optimize your food service operations with inventory management, delivery tracking, and customer experience enhancement.',
      overview:
        'Golgappa.inc revolutionizes food service operations through intelligent inventory management, delivery optimization, and customer experience analytics.',
      features: [
        'Smart inventory management',
        'Delivery route optimization',
        'Customer experience analytics',
        'Kitchen workflow optimization',
        'Supplier management',
        'Food safety compliance',
      ],
      useCases: [
        'Restaurant chain optimization',
        'Food delivery enhancement',
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
        'Real-time inventory tracking',
        'Customer experience analytics',
        'Compliance monitoring',
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
    {
      key: 'dashboards',
      name: 'MyxoFlow Platform',
      tagline: 'Unified Dashboard Technology',
      description:
        'The core platform powering all MyxoFlow solutions with unified dashboard technology and cross-market optimization.',
      overview:
        'MyxoFlow Platform is the foundation that enables rapid market expansion through unified dashboard technology, providing consistent interfaces and shared optimization benefits across all verticals.',
      features: [
        'Unified dashboard interface',
        'Cross-market optimization',
        'Real-time analytics and reporting',
        'Multi-vertical data integration',
        'Scalable architecture',
        'Developer-first API access',
      ],
      useCases: [
        'Multi-market business operations',
        'Rapid market expansion',
        'Cross-platform analytics',
        'Unified business intelligence',
        'Enterprise dashboard consolidation',
      ],
      pricing: 'Starting at $499/month for platform access',
      badge: {
        text: 'Core Platform',
        type: 'info',
      },
      stats: [
        { value: '6+', label: 'Market Verticals', trend: 'up' },
        { value: '500+', label: 'Active Companies', trend: 'up' },
        { value: '99.9%', label: 'Platform Uptime', trend: 'stable' },
      ],
      targetAudience:
        'Enterprises and growing businesses looking to expand across multiple market verticals with unified technology.',
      differentiators: [
        'Unified technology across all markets',
        'Shared optimization benefits',
        'Rapid market vertical expansion',
        'Enterprise-grade scalability',
      ],
      processSteps: [
        {
          title: 'Platform Assessment',
          description: 'Evaluate your current systems and identify integration opportunities.',
        },
        {
          title: 'Multi-Market Setup',
          description: 'Configure the platform for your target market verticals.',
        },
        {
          title: 'Integration Deployment',
          description: 'Connect existing systems and deploy unified dashboards.',
        },
        {
          title: 'Optimization & Scaling',
          description: 'Monitor performance across all verticals and optimize for growth.',
        },
      ],
      pricingModel: {
        title: 'Enterprise Platform Suite',
        benefits: [
          'Access to all market verticals',
          'Unified dashboard technology',
          'Cross-market optimization',
          'Enterprise-grade support',
          'Custom integrations',
          'Dedicated success team',
        ],
      },
    },
  ])

  // ✅ Fixed: Proper typing with MarketData[]
  const marketData = ref<MarketData[]>([
    {
      name: 'StichFlow',
      status: 'Active',
      users: '2.4k',
      growth: '+12%',
      color: '#3b82f6',
      icon: '🧵',
    },
    {
      name: 'MyxoFill',
      status: 'Growing',
      users: '1.8k',
      growth: '+24%',
      color: '#10b981',
      icon: '💧',
    },
    {
      name: 'MyxoDate',
      status: 'Expanding',
      users: '3.2k',
      growth: '+18%',
      color: '#f59e0b',
      icon: '💝',
    },
    {
      name: 'MyxoCraft',
      status: 'Active',
      users: '1.5k',
      growth: '+32%',
      color: '#8b5cf6',
      icon: '🎨',
    },
    {
      name: 'Golgappa.inc',
      status: 'New',
      users: '0.9k',
      growth: '+45%',
      color: '#ef4444',
      icon: '🍛',
    },
    {
      name: 'Platform',
      status: 'Core',
      users: '10.2k',
      growth: '+15%',
      color: '#6366f1',
      icon: '📊',
    },
  ])

  // Computed properties
  const getProduct = computed(() => {
    return (key: string) => products.value.find((p) => p.key === key)
  })

  const featuredProducts = computed(() => {
    return products.value.filter((p) => p.badge?.type === 'primary' || p.badge?.type === 'success')
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

  // Methods - ✅ Fixed: Proper typing with Record<string, string>
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

  const getProductBadge = (key: string) => {
    const product = products.value.find((p) => p.key === key)
    return product?.badge || null
  }

  const getKeyFeatures = (key: string): string[] => {
    const product = products.value.find((p) => p.key === key)
    return product?.features.slice(0, 3) || []
  }

  // ✅ Fixed: Proper typing with Record<string, string>
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
  const getProductDetailByKey = (key: string) => {
    return products.value.find((product) => product.key === key) ?? null
  }

  return {
    // Data
    products,
    marketData,
    // Computed
    getProduct,
    featuredProducts,
    totalUsers,
    avgGrowthRate,
    // Methods
    getProductIcon,
    getProductBadge,
    getProductDetailByKey,
    getKeyFeatures,
    getProductCardClass,
    getProductColor,
    searchProducts,
  }
})
