import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CompanyStat {
  value: string
  label: string
  icon?: string
  change?: string
  trend?: 'up' | 'down' | 'stable'
}

interface Achievement {
  title: string
  description: string
  value: string
  icon: string
}

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

interface CaseStudy {
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  quote: string
  metrics: Array<{
    label: string
    before: string
    after: string
    improvement: string
  }>
}

export const useStatsStore = defineStore('stats', () => {
  // Company statistics
  const companyStats = ref<CompanyStat[]>([
    {
      value: '500+',
      label: 'Active Companies',
      icon: 'users',
      change: '+12%',
      trend: 'up',
    },
    {
      value: '99.9%',
      label: 'Uptime',
      icon: 'trending-up',
      change: '+0.1%',
      trend: 'up',
    },
    {
      value: '24/7',
      label: 'Support',
      icon: 'clock',
      trend: 'stable',
    },
    {
      value: '< 48hrs',
      label: 'Setup Time',
      icon: 'zap',
      change: '-20%',
      trend: 'up',
    },
  ])

  // Hero section stats
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

  // Platform achievements
  const achievements = ref<Achievement[]>([
    {
      title: 'Multi-Market Leader',
      description: 'Successfully deployed across 6+ different industry verticals',
      value: '6+',
      icon: 'award',
    },
    {
      title: 'Developer-First Approach',
      description: 'Direct technical communication with 95% satisfaction rate',
      value: '95%',
      icon: 'code',
    },
    {
      title: 'Rapid Deployment',
      description: 'Average setup time under 48 hours with full onboarding',
      value: '< 48h',
      icon: 'rocket',
    },
    {
      title: 'Enterprise Grade',
      description: 'Bank-level security with 99.9% uptime guarantee',
      value: '99.9%',
      icon: 'shield',
    },
  ])

  // Customer testimonials
  const testimonials = ref<Testimonial[]>([
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TextileCorp',
      content:
        'MyxoFlow transformed our manufacturing efficiency. The direct developer support made all the difference in rapid implementation.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Operations Manager',
      company: 'CraftMasters',
      content:
        'The unified dashboard approach saved us months of development time. We saw immediate improvements across all our market verticals.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Founder',
      company: 'ModernDating',
      content:
        'MyxoDate increased our match success rate by 60%. The AI-driven insights are incredibly powerful.',
      rating: 5,
    },
  ])

  // Case studies
  const caseStudies = ref<CaseStudy[]>([
    {
      client: 'TextileCorp Manufacturing',
      industry: 'Textile Manufacturing',
      challenge:
        'Manual production tracking led to 30% waste and inconsistent quality control across multiple facilities.',
      solution:
        'Implemented StichFlow with real-time monitoring, automated quality control, and predictive maintenance across all production lines.',
      results: [
        '40% increase in production efficiency',
        '25% reduction in material waste',
        '60% improvement in quality consistency',
        '50% reduction in downtime',
      ],
      quote:
        'StichFlow revolutionized our operations. We achieved ROI within 3 months and continue to see improvements.',
      metrics: [
        {
          label: 'Production Efficiency',
          before: '65%',
          after: '91%',
          improvement: '+40%',
        },
        {
          label: 'Material Waste',
          before: '30%',
          after: '7%',
          improvement: '-77%',
        },
        {
          label: 'Quality Score',
          before: '72%',
          after: '95%',
          improvement: '+32%',
        },
      ],
    },
    {
      client: 'ModernDating Platform',
      industry: 'Dating & Social',
      challenge:
        'Low match success rate (25%) and declining user engagement leading to high churn rates.',
      solution:
        'Deployed MyxoDate with advanced matching algorithms, user behavior analytics, and engagement optimization.',
      results: [
        '60% improvement in match success rate',
        '45% increase in user retention',
        '80% boost in daily active users',
        '35% increase in premium conversions',
      ],
      quote:
        'MyxoDate transformed our platform. Users are happier, engagement is up, and our revenue has doubled.',
      metrics: [
        {
          label: 'Match Success Rate',
          before: '25%',
          after: '73%',
          improvement: '+192%',
        },
        {
          label: 'User Retention',
          before: '35%',
          after: '68%',
          improvement: '+94%',
        },
        {
          label: 'Premium Conversion',
          before: '8%',
          after: '18%',
          improvement: '+125%',
        },
      ],
    },
    {
      client: 'CraftMasters Marketplace',
      industry: 'Crafts & Handmade',
      challenge:
        'Fragmented vendor management and inefficient order fulfillment processes causing customer dissatisfaction.',
      solution:
        'Implemented MyxoCraft with unified vendor dashboard, automated order routing, and quality assurance workflows.',
      results: [
        '50% faster order fulfillment',
        '35% increase in vendor satisfaction',
        '25% improvement in customer ratings',
        '40% reduction in support tickets',
      ],
      quote:
        'The unified platform approach made managing our marketplace so much easier. Both vendors and customers love it.',
      metrics: [
        {
          label: 'Order Fulfillment Time',
          before: '5.2 days',
          after: '2.4 days',
          improvement: '-54%',
        },
        {
          label: 'Customer Satisfaction',
          before: '3.2/5',
          after: '4.6/5',
          improvement: '+44%',
        },
        {
          label: 'Vendor Retention',
          before: '68%',
          after: '89%',
          improvement: '+31%',
        },
      ],
    },
  ])

  // Performance metrics over time
  const performanceMetrics = ref({
    users: [
      { month: 'Jan', value: 1200 },
      { month: 'Feb', value: 1450 },
      { month: 'Mar', value: 1650 },
      { month: 'Apr', value: 1900 },
      { month: 'May', value: 2200 },
      { month: 'Jun', value: 2500 },
    ],
    revenue: [
      { month: 'Jan', value: 85000 },
      { month: 'Feb', value: 92000 },
      { month: 'Mar', value: 108000 },
      { month: 'Apr', value: 125000 },
      { month: 'May', value: 142000 },
      { month: 'Jun', value: 165000 },
    ],
    satisfaction: [
      { month: 'Jan', value: 4.2 },
      { month: 'Feb', value: 4.3 },
      { month: 'Mar', value: 4.5 },
      { month: 'Apr', value: 4.6 },
      { month: 'May', value: 4.7 },
      { month: 'Jun', value: 4.8 },
    ],
  })

  // Industry benchmarks
  const industryBenchmarks = ref({
    textile: {
      averageEfficiency: '70%',
      averageWaste: '25%',
      averageUptime: '85%',
    },
    dating: {
      averageMatchRate: '30%',
      averageRetention: '40%',
      averageEngagement: '35%',
    },
    manufacturing: {
      averageEfficiency: '68%',
      averageDowntime: '15%',
      averageCostReduction: '12%',
    },
  })

  // Computed
  const totalActiveUsers = computed(() => {
    const latest = performanceMetrics.value.users[performanceMetrics.value.users.length - 1]
    return latest ? latest.value.toLocaleString() : '0'
  })

  const monthlyGrowthRate = computed(() => {
    const users = performanceMetrics.value?.users
    if (!users || users.length < 2) return '0%'

    const currentUser = users[users.length - 1]
    const previousUser = users[users.length - 2]
    if (!currentUser || !previousUser) return '0%'
    const current = currentUser.value
    const previous = previousUser.value
    const growth = (((current - previous) / previous) * 100).toFixed(1)
    return `+${growth}%`
  })

  const averageRating = computed(() => {
    const avg = testimonials.value.reduce((sum, t) => sum + t.rating, 0) / testimonials.value.length
    return avg.toFixed(1)
  })

  const totalCaseStudies = computed(() => caseStudies.value.length)

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

  const getBenchmarkData = (industry: string) => {
    return industryBenchmarks.value[industry as keyof typeof industryBenchmarks.value] || null
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
    monthlyGrowthRate,
    averageRating,
    totalCaseStudies,

    // Methods
    getStatsByCategory,
    getCaseStudyByIndustry,
    getTestimonialsByRating,
    getBenchmarkData,
  }
})
