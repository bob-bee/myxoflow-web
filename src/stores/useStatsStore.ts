import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  CompanyStat,
  HeroStat,
  Achievement,
  Testimonial,
  CaseStudy,
  PerformanceMetrics,
  Metric,
  IndustryBenchmarks,
} from '@/types/stats'
import { isCompanyStat, isHeroStat, isCaseStudy } from '@/types/stats'

// Import data
import statsData from '@/data/stats.json'
import rawData from '@/data/testimonials.json'
import caseStudiesData from '@/data/caseStudies.json'
import performanceData from '@/data/performance.json'

/**
 * Statistics Store
 *
 * Manages company statistics, testimonials, case studies,
 * and performance metrics with optimized lookups and filtering.
 */
export const useStatsStore = defineStore('stats', () => {
  // ✅ Load and validate data
  const companyStats = ref<CompanyStat[]>(
    statsData.companyStats
      .map((stat) => ({
        ...stat,
        trend: stat.trend as 'up' | 'stable' | 'down' | undefined,
      }))
      .filter(isCompanyStat),
  )

  const heroStats = ref<HeroStat[]>(statsData.heroStats.filter(isHeroStat))

  const achievements = ref<Achievement[]>(statsData.achievements as Achievement[])
  const testimonialsData = rawData as unknown as { testimonials: Testimonial[] }

  const testimonials = ref<Testimonial[]>(testimonialsData.testimonials)

  const caseStudies = ref<CaseStudy[]>(caseStudiesData.caseStudies.filter(isCaseStudy))

  const performanceMetrics = ref<PerformanceMetrics>(
    performanceData.performanceMetrics as PerformanceMetrics,
  )

  const industryBenchmarks = ref<IndustryBenchmarks>(
    performanceData.industryBenchmarks as IndustryBenchmarks,
  )

  // ✅ Create optimized lookup maps
  const testimonialsByIndustry = computed(() => {
    const map = new Map<string, Testimonial[]>()
    testimonials.value.forEach((testimonial) => {
      const industry = testimonial.industry
      if (!map.has(industry)) {
        map.set(industry, [])
      }
      map.get(industry)!.push(testimonial)
    })
    return map
  })

  const caseStudiesByIndustry = computed(() => {
    const map = new Map<string, CaseStudy[]>()
    caseStudies.value.forEach((caseStudy) => {
      const industry = caseStudy.industryKey
      if (!map.has(industry)) {
        map.set(industry, [])
      }
      map.get(industry)!.push(caseStudy)
    })
    return map
  })

  const testimonialsByRating = computed(() => {
    const map = new Map<number, Testimonial[]>()
    testimonials.value.forEach((testimonial) => {
      const rating = testimonial.rating
      if (!map.has(rating)) {
        map.set(rating, [])
      }
      map.get(rating)!.push(testimonial)
    })
    return map
  })

  // ✅ Enhanced computed properties
  const totalActiveUsers = computed(() => {
    const latest = performanceMetrics.value.users[performanceMetrics.value.users.length - 1]
    return latest ? latest.value.toLocaleString() : '0'
  })

  const featuredTestimonials = computed(() => testimonials.value.filter((t) => t.featured))

  const featuredCaseStudies = computed(() => caseStudies.value.filter((cs) => cs.featured))

  const averageRating = computed(() => {
    if (testimonials.value.length === 0) return '0.0'
    const avg = testimonials.value.reduce((sum, t) => sum + t.rating, 0) / testimonials.value.length
    return avg.toFixed(1)
  })

  const totalCaseStudies = computed(() => caseStudies.value.length)

  const totalCostSavings = computed(() => '$2.4M+')

  const clientSuccessRate = computed(() => '98.5%')

  // ✅ Utility functions with JSDoc

  /**
   * Compute growth percentage between periods
   * @param metrics - Array of metric data points
   * @returns Growth percentage string
   */
  function computeGrowth(metrics: Metric[]): string {
    if (!metrics || metrics.length < 2) return '0%'

    const current = metrics[metrics.length - 1]!.value
    const previous = metrics[metrics.length - 2]!.value
    if (previous === 0) return '0%'

    const growth = ((current - previous) / previous) * 100
    return growth > 0 ? `+${growth.toFixed(1)}%` : `${growth.toFixed(1)}%`
  }

  const monthlyUserGrowth = computed(() => computeGrowth(performanceMetrics.value.users))

  const monthlyRevenueGrowth = computed(() => computeGrowth(performanceMetrics.value.revenue))

  const monthlySatisfactionGrowth = computed(() =>
    computeGrowth(performanceMetrics.value.satisfaction),
  )

  // ✅ Enhanced methods with JSDoc

  /**
   * Get statistics by category
   * @param category - Category type
   * @returns Array of statistics
   */
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

  /**
   * Get case study by industry key
   * @param industry - Industry key to lookup
   * @returns Case study or null
   */

  /**
   * Get testimonials filtered by minimum rating
   * @param minRating - Minimum rating (default: 4)
   * @returns Filtered testimonials
   */
  const getTestimonialsByRating = (minRating: number = 4): Testimonial[] => {
    return testimonials.value.filter((t) => t.rating >= minRating)
  }

  /**
   * Get random testimonials for display
   * @param count - Number of testimonials to return
   * @returns Random testimonials array
   */
  const getRandomTestimonials = (count: number = 3): Testimonial[] => {
    const shuffled = [...testimonials.value].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  /**
   * Get testimonials by industry
   * @param industry - Industry key
   * @returns Array of testimonials for industry
   */
  const getTestimonialsByIndustry = (industry: string): Testimonial[] => {
    return testimonialsByIndustry.value.get(industry) ?? []
  }

  /**
   * Get case studies by industry
   * @param industry - Industry key
   * @returns Array of case studies for industry
   */
  const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
    return caseStudiesByIndustry.value.get(industry) ?? []
  }

  /**
   * Get benchmark data for industry
   * @param industry - Industry key
   * @returns Benchmark data or null
   */
  const getBenchmarkData = (industry: string) => {
    return industryBenchmarks.value[industry] || null
  }

  /**
   * Get metric trend data by type
   * @param metricName - Metric type ('users', 'revenue', 'satisfaction')
   * @returns Array of metric data points
   */
  const getMetricTrend = (metricName: string): Metric[] => {
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

  /**
   * Search case studies by query
   * @param query - Search term
   * @returns Filtered case studies
   */
  const searchCaseStudies = (query: string): CaseStudy[] => {
    if (!query.trim()) return caseStudies.value

    const lowercaseQuery = query.toLowerCase()
    return caseStudies.value.filter(
      (cs) =>
        cs.client.toLowerCase().includes(lowercaseQuery) ||
        cs.industry.toLowerCase().includes(lowercaseQuery) ||
        cs.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
        cs.challenge.toLowerCase().includes(lowercaseQuery) ||
        cs.solution.toLowerCase().includes(lowercaseQuery),
    )
  }

  /**
   * Search testimonials by query
   * @param query - Search term
   * @returns Filtered testimonials
   */
  const searchTestimonials = (query: string): Testimonial[] => {
    if (!query.trim()) return testimonials.value

    const lowercaseQuery = query.toLowerCase()
    return testimonials.value.filter(
      (t) =>
        t.name.toLowerCase().includes(lowercaseQuery) ||
        t.company.toLowerCase().includes(lowercaseQuery) ||
        t.industry.toLowerCase().includes(lowercaseQuery) ||
        t.content.toLowerCase().includes(lowercaseQuery),
    )
  }

  return {
    // ✅ Reactive data (readonly)
    companyStats: companyStats,
    heroStats: heroStats,
    testimonials: testimonials,
    caseStudies: caseStudies,
    performanceMetrics: performanceMetrics,
    industryBenchmarks: industryBenchmarks,
    achievements: achievements,

    // ✅ Computed lookups
    testimonialsByIndustry,
    caseStudiesByIndustry,
    testimonialsByRating,

    // ✅ Computed properties
    totalActiveUsers,
    featuredTestimonials,
    featuredCaseStudies,
    monthlyUserGrowth,
    monthlyRevenueGrowth,
    monthlySatisfactionGrowth,
    averageRating,
    totalCaseStudies,
    totalCostSavings,
    clientSuccessRate,

    // ✅ Methods
    getStatsByCategory,
    getTestimonialsByRating,
    getRandomTestimonials,
    getTestimonialsByIndustry,
    getCaseStudiesByIndustry,
    getBenchmarkData,
    getMetricTrend,
    searchCaseStudies,
    searchTestimonials,
  }
})

/**
 * Export types for component use
 */
export type {
  CompanyStat,
  Achievement,
  Testimonial,
  CaseStudy,
  PerformanceMetrics,
  Metric,
  IndustryBenchmarks,
  CaseStudyMetric,
  TestimonialMetrics,
} from '@/types/stats'
