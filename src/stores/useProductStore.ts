import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface Product {
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
        { value: '40%', label: 'Production Increase' },
        { value: '25%', label: 'Waste Reduction' },
        { value: '60%', label: 'Quality Improvement' },
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
        { value: '35%', label: 'Efficiency Gain' },
        { value: '50%', label: 'Downtime Reduction' },
        { value: '30%', label: 'Cost Savings' },
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
        { value: '60%', label: 'Match Success Rate' },
        { value: '45%', label: 'User Retention' },
        { value: '80%', label: 'Engagement Increase' },
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
  ])

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
  ])

  // Computed
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

  // Methods
  const getProductIcon = (key: string): string => {
    const iconMap: Record<string, string> = {
      stichflow: '🧵',
      fill: '💧',
      date: '💝',
      golgappa: '🥟',
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

  const getProductCardClass = (key: string): string => {
    const classMap: Record<string, string> = {
      stichflow: 'card-blue',
      fill: 'card-green',
      date: 'card-orange',
      golgappa: 'card-purple',
      craft: 'card-pink',
      dashboards: 'card-indigo',
    }
    return classMap[key] || 'card-default'
  }

  return {
    // Data
    products,
    marketData,

    // Computed
    getProduct,
    featuredProducts,
    totalUsers,

    // Methods
    getProductIcon,
    getProductBadge,
    getKeyFeatures,
    getProductCardClass,
  }
})
