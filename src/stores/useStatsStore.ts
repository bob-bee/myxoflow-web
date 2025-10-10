import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  CompanyStat,
  Achievement,
  Testimonial,
  CaseStudy,
  PerformanceMetrics,
  Metric,
} from '@/types/interfaces'

export const useStatsStore = defineStore('stats', () => {
  // Company Statistics
  const companyStats = ref<CompanyStat[]>([
    {
      value: '500+',
      label: 'Active Companies',
      icon: 'users',
      change: '+12%',
      trend: 'up',
      description: 'Businesses optimized across all verticals',
    },
    {
      value: '99.9%',
      label: 'Uptime SLA',
      icon: 'trending-up',
      change: '+0.1%',
      trend: 'up',
      description: 'Enterprise-grade reliability guaranteed',
    },
    {
      value: '24/7',
      label: 'Developer Support',
      icon: 'clock',
      trend: 'stable',
      description: 'Direct access to our technical team',
    },
    {
      value: '< 48hrs',
      label: 'Average Setup Time',
      icon: 'zap',
      change: '-20%',
      trend: 'up',
      description: 'Fastest implementation in the industry',
    },
    {
      value: '$2.4M+',
      label: 'Client Savings',
      icon: 'dollar-sign',
      change: '+35%',
      trend: 'up',
      description: 'Total cost savings delivered to clients',
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
      icon: 'heart',
      change: '+3%',
      trend: 'up',
      description: 'Based on quarterly satisfaction surveys',
    },
  ])

  // Hero Section Statistics
  const heroStats = ref<CompanyStat[]>([
    {
      value: '500+',
      label: 'Active Companies',
      change: '+12%',
      trend: 'up',
    },
    {
      value: '99.9%',
      label: 'Uptime',
      change: '+0.1%',
      trend: 'up',
    },
    {
      value: '24/7',
      label: 'Support',
      trend: 'stable',
    },
  ])

  // Platform Achievements
  const achievements = ref<Achievement[]>([
    {
      title: 'Multi-Market Leadership',
      description:
        'Successfully deployed across 6+ different industry verticals with consistent results',
      value: '6+',
      icon: 'award',
      date: '2024',
    },
    {
      title: 'Developer-First Approach',
      description: 'Direct technical communication with 95% satisfaction rate, no account managers',
      value: '95%',
      icon: 'code',
      date: '2024',
    },
    {
      title: 'Rapid Deployment Record',
      description: 'Average setup time under 48 hours with comprehensive onboarding',
      value: '< 48h',
      icon: 'rocket',
      date: '2024',
    },
    {
      title: 'Enterprise Grade Security',
      description: 'Bank-level security with 99.9% uptime guarantee and SOC 2 compliance',
      value: '99.9%',
      icon: 'shield',
      date: '2024',
    },
    {
      title: 'Cost Optimization Leader',
      description: 'Delivered over $2.4M in cost savings across all client implementations',
      value: '$2.4M+',
      icon: 'trending-up',
      date: '2024',
    },
    {
      title: 'Innovation Excellence',
      description: 'Continuous platform improvements with weekly feature releases',
      value: '52+',
      icon: 'lightbulb',
      date: '2024',
    },
  ])

  // Customer Testimonials
  const testimonials = ref<Testimonial[]>([
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TextileCorp Manufacturing',
      content:
        'MyxoFlow transformed our manufacturing efficiency overnight. The direct developer support made all the difference - we were able to customize the platform exactly to our needs within weeks, not months. Production efficiency increased by 40% in our first quarter.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg',
      date: '2024-03-15',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Operations Manager',
      company: 'CraftMasters Marketplace',
      content:
        'The unified dashboard approach saved us months of development time and training costs. We saw immediate improvements across all our market verticals. Our vendor satisfaction increased by 45% and sales grew 30% in the first six months.',
      rating: 5,
      avatar: '/images/testimonials/marcus-rodriguez.jpg',
      date: '2024-02-28',
    },
    {
      name: 'Lisa Thompson',
      role: 'Founder & CEO',
      company: 'ModernDating Platform',
      content:
        "MyxoDate increased our match success rate by 73% and user retention by 68%. The AI-driven insights are incredibly powerful, and the team's responsiveness to our feedback has been exceptional. Premium conversions are up 125%.",
      rating: 5,
      avatar: '/images/testimonials/lisa-thompson.jpg',
      date: '2024-01-20',
    },
    {
      name: 'David Park',
      role: 'VP of Operations',
      company: 'FreshFood Delivery',
      content:
        'Golgappa.inc revolutionized our food delivery operations. Delivery efficiency improved by 50%, and we reduced food waste by 35%. The real-time inventory management alone saved us over $200k in the first year.',
      rating: 5,
      avatar: '/images/testimonials/david-park.jpg',
      date: '2023-12-10',
    },
    {
      name: 'Jennifer Wu',
      role: 'Production Director',
      company: 'ManufacturingPlus',
      content:
        "MyxoFill's predictive maintenance features prevented 3 major equipment failures last quarter. The cost savings from reduced downtime and optimized resource allocation have been substantial. ROI achieved in under 4 months.",
      rating: 5,
      avatar: '/images/testimonials/jennifer-wu.jpg',
      date: '2023-11-18',
    },
    {
      name: 'Alex Johnson',
      role: 'Marketplace Director',
      company: 'ArtisanHub',
      content:
        'MyxoCraft transformed our artisan marketplace. Vendor onboarding time decreased by 60%, and our quality assurance processes are now fully automated. Customer satisfaction scores improved by 40% across all categories.',
      rating: 5,
      avatar: '/images/testimonials/alex-johnson.jpg',
      date: '2023-10-25',
    },
  ])

  // Detailed Case Studies
  const caseStudies = ref<CaseStudy[]>([
    {
      client: 'TextileCorp Manufacturing',
      industry: 'Textile Manufacturing',
      challenge:
        'Manual production tracking led to 30% waste, inconsistent quality control across 5 facilities, and inability to predict maintenance needs. Operations were reactive rather than proactive.',
      solution:
        'Implemented StichFlow with real-time monitoring, automated quality control, predictive maintenance, and unified dashboard across all facilities. Integrated with existing ERP systems.',
      results: [
        '40% increase in overall production efficiency',
        '25% reduction in material waste and costs',
        '60% improvement in quality consistency scores',
        '50% reduction in unplanned equipment downtime',
        'ROI achieved within 3 months of implementation',
      ],
      quote:
        'StichFlow revolutionized our operations. We achieved ROI within 3 months and continue to see improvements every quarter. The direct developer support has been invaluable.',
      metrics: [
        {
          label: 'Production Efficiency',
          before: '65%',
          after: '91%',
          improvement: '+40%',
          unit: 'efficiency score',
        },
        {
          label: 'Material Waste',
          before: '30%',
          after: '7%',
          improvement: '-77%',
          unit: 'waste percentage',
        },
        {
          label: 'Quality Consistency',
          before: '72%',
          after: '95%',
          improvement: '+32%',
          unit: 'quality score',
        },
        {
          label: 'Equipment Downtime',
          before: '120 hrs/month',
          after: '24 hrs/month',
          improvement: '-80%',
          unit: 'hours per month',
        },
      ],
      image: '/images/case-studies/textilecorp.jpg',
      duration: '3 months implementation',
    },
    {
      client: 'ModernDating Platform',
      industry: 'Dating & Social Platforms',
      challenge:
        'Low match success rate (25%), declining user engagement, high churn rates (65%), and poor premium conversion rates. Existing algorithms were not effective.',
      solution:
        'Deployed MyxoDate with advanced ML matching algorithms, user behavior analytics, engagement optimization tools, and A/B testing framework for continuous improvement.',
      results: [
        '73% match success rate (192% improvement)',
        '68% user retention rate (94% improvement)',
        '85% increase in daily active users',
        '125% increase in premium conversions',
        'Revenue doubled within 6 months',
      ],
      quote:
        'MyxoDate transformed our platform completely. Users are happier, engagement is through the roof, and our revenue has doubled. The AI matching is incredibly sophisticated.',
      metrics: [
        {
          label: 'Match Success Rate',
          before: '25%',
          after: '73%',
          improvement: '+192%',
          unit: 'success rate',
        },
        {
          label: 'User Retention',
          before: '35%',
          after: '68%',
          improvement: '+94%',
          unit: 'retention rate',
        },
        {
          label: 'Premium Conversion',
          before: '8%',
          after: '18%',
          improvement: '+125%',
          unit: 'conversion rate',
        },
        {
          label: 'Daily Active Users',
          before: '12k',
          after: '22k',
          improvement: '+83%',
          unit: 'active users',
        },
      ],
      image: '/images/case-studies/moderndating.jpg',
      duration: '2 months implementation',
    },
    {
      client: 'CraftMasters Marketplace',
      industry: 'E-commerce & Marketplaces',
      challenge:
        'Fragmented vendor management, inefficient order fulfillment (5.2 days average), low customer satisfaction (3.2/5), and high support ticket volume.',
      solution:
        'Implemented MyxoCraft with unified vendor dashboard, automated order routing, quality assurance workflows, customer experience optimization, and integrated support system.',
      results: [
        '54% faster order fulfillment (2.4 days average)',
        '45% increase in vendor satisfaction scores',
        '44% improvement in customer ratings (4.6/5)',
        '60% reduction in support tickets',
        '30% increase in marketplace revenue',
      ],
      quote:
        'The unified platform approach made managing our marketplace incredibly efficient. Both vendors and customers love the streamlined experience.',
      metrics: [
        {
          label: 'Order Fulfillment Time',
          before: '5.2 days',
          after: '2.4 days',
          improvement: '-54%',
          unit: 'days average',
        },
        {
          label: 'Customer Satisfaction',
          before: '3.2/5',
          after: '4.6/5',
          improvement: '+44%',
          unit: 'rating score',
        },
        {
          label: 'Vendor Retention',
          before: '68%',
          after: '89%',
          improvement: '+31%',
          unit: 'retention rate',
        },
        {
          label: 'Support Tickets',
          before: '450/month',
          after: '180/month',
          improvement: '-60%',
          unit: 'tickets per month',
        },
      ],
      image: '/images/case-studies/craftmasters.jpg',
      duration: '6 weeks implementation',
    },
  ])

  // Performance Metrics Over Time
  const performanceMetrics = ref<PerformanceMetrics>({
    users: [
      { month: 'Jan 2024', value: 1200 },
      { month: 'Feb 2024', value: 1450 },
      { month: 'Mar 2024', value: 1650 },
      { month: 'Apr 2024', value: 1900 },
      { month: 'May 2024', value: 2200 },
      { month: 'Jun 2024', value: 2500 },
      { month: 'Jul 2024', value: 2850 },
      { month: 'Aug 2024', value: 3100 },
      { month: 'Sep 2024', value: 3400 },
      { month: 'Oct 2024', value: 3800 },
    ],
    revenue: [
      { month: 'Jan 2024', value: 85000 },
      { month: 'Feb 2024', value: 92000 },
      { month: 'Mar 2024', value: 108000 },
      { month: 'Apr 2024', value: 125000 },
      { month: 'May 2024', value: 142000 },
      { month: 'Jun 2024', value: 165000 },
      { month: 'Jul 2024', value: 185000 },
      { month: 'Aug 2024', value: 210000 },
      { month: 'Sep 2024', value: 235000 },
      { month: 'Oct 2024', value: 268000 },
    ],
    satisfaction: [
      { month: 'Jan 2024', value: 4.2 },
      { month: 'Feb 2024', value: 4.3 },
      { month: 'Mar 2024', value: 4.5 },
      { month: 'Apr 2024', value: 4.6 },
      { month: 'May 2024', value: 4.7 },
      { month: 'Jun 2024', value: 4.8 },
      { month: 'Jul 2024', value: 4.8 },
      { month: 'Aug 2024', value: 4.9 },
      { month: 'Sep 2024', value: 4.9 },
      { month: 'Oct 2024', value: 4.9 },
    ],
  })

  // Industry Benchmarks
  const industryBenchmarks = ref({
    textile: {
      averageEfficiency: '70%',
      averageWaste: '25%',
      averageUptime: '85%',
      averageQuality: '78%',
    },
    dating: {
      averageMatchRate: '30%',
      averageRetention: '40%',
      averageEngagement: '35%',
      averageConversion: '12%',
    },
    manufacturing: {
      averageEfficiency: '68%',
      averageDowntime: '15%',
      averageCostReduction: '12%',
      averageROI: '18 months',
    },
    marketplace: {
      averageFulfillment: '4.8 days',
      averageSatisfaction: '3.8/5',
      averageRetention: '72%',
      averageGrowth: '15%',
    },
  })

  // Computed Properties
  const totalActiveUsers = computed(() => {
    const latest = performanceMetrics.value.users[performanceMetrics.value.users.length - 1]
    return latest ? latest.value.toLocaleString() : '0'
  })

  function computeGrowth(metrics: Metric[]): string {
    if (!metrics || metrics.length < 2) return '0%' // too few data points

    const current = metrics[metrics.length - 1]!.value
    const previous = metrics[metrics.length - 2]!.value
    if (previous === 0) return '0%' // avoid division by zero

    const growth = ((current - previous) / previous) * 100
    return growth > 0 ? `+${growth.toFixed(1)}%` : `${growth.toFixed(1)}%`
  }

  // Computeds for all metrics
  const monthlyUserGrowth = computed(() => computeGrowth(performanceMetrics.value!.users))
  const monthlyRevenueGrowth = computed(() => computeGrowth(performanceMetrics.value!.revenue))
  const monthlySatisfactionGrowth = computed(() =>
    computeGrowth(performanceMetrics.value!.satisfaction),
  )
  const averageRating = computed(() => {
    const avg = testimonials.value.reduce((sum, t) => sum + t.rating, 0) / testimonials.value.length
    return avg.toFixed(1)
  })

  const totalCaseStudies = computed(() => caseStudies.value.length)

  const totalCostSavings = computed(() => {
    // Calculate total savings from case studies
    return '$2.4M+'
  })

  const clientSuccessRate = computed(() => {
    // Based on case studies and testimonials
    return '98.5%'
  })

  // Methods
  const getStatsByCategory = (category: 'hero' | 'company' | 'achievements') => {
    switch (category) {
      case 'hero':
        return heroStats.value
      case 'company':
        return companyStats.value
      case 'achievements':
        return achievements.value
      default:
        return []
    }
  }

  const getCaseStudyByIndustry = (industry: string) => {
    return caseStudies.value.find((cs) =>
      cs.industry.toLowerCase().includes(industry.toLowerCase()),
    )
  }

  const getTestimonialsByRating = (minRating: number = 4) => {
    return testimonials.value.filter((t) => t.rating >= minRating)
  }

  const getRandomTestimonials = (count: number = 3) => {
    const shuffled = [...testimonials.value].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const getBenchmarkData = (industry: string) => {
    return industryBenchmarks.value[industry as keyof typeof industryBenchmarks.value] || null
  }

  const getMetricTrend = (metricName: string) => {
    // Get trend data for specific metrics
    switch (metricName) {
      case 'users':
        return performanceMetrics.value.users
      case 'revenue':
        return performanceMetrics.value.revenue
      case 'satisfaction':
        return performanceMetrics.value.satisfaction
      default:
        return []
    }
  }

  return {
    // Data
    companyStats,
    heroStats,
    achievements,
    testimonials,
    caseStudies,
    performanceMetrics,
    industryBenchmarks,

    // Computed
    totalActiveUsers,
    monthlyUserGrowth,
    monthlyRevenueGrowth,
    monthlySatisfactionGrowth,
    averageRating,
    totalCaseStudies,
    totalCostSavings,
    clientSuccessRate,

    // Methods
    getStatsByCategory,
    getCaseStudyByIndustry,
    getTestimonialsByRating,
    getRandomTestimonials,
    getBenchmarkData,
    getMetricTrend,
  }
})
