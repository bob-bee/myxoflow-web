/**
 * Statistics and analytics type definitions
 */

// Company and business statistics
export interface CompanyStat {
  value: string
  label: string
  icon?: string
  change?: string
  trend?: 'up' | 'down' | 'stable'
  description?: string
}

export type CompanyStats = CompanyStat[]

// Hero section statistics
export interface HeroStat {
  value: string
  label: string
  icon?: string
}

export type HeroStats = HeroStat[]

// Achievement interfaces
export interface Achievement {
  title: string
  description: string
  value: string
  icon: string
  date?: string
}

// Testimonial interfaces
export interface TestimonialMetrics {
  [key: string]: string
}

export interface Testimonial {
  id?: string
  name: string
  role: string
  company: string
  industry?: string
  content: string
  rating: number
  avatar?: string
  date?: string
  featured?: boolean
  metrics?: TestimonialMetrics
}

export type Testimonials = Testimonial[]

// Case study interfaces
export interface CaseStudyMetric {
  label: string
  before: string
  after: string
  improvement: string
  unit?: string
}

export interface CaseStudy {
  id?: string
  client: string
  industry: string
  industryKey?: string
  challenge: string
  solution: string
  results: string[]
  quote: string
  metrics: CaseStudyMetric[]
  image?: string
  duration?: string
  featured?: boolean
  tags?: string[]
  publishedDate?: string
}

// Performance metrics
export interface Metric {
  month: string
  value: number
}

export interface PerformanceMetrics {
  users: Metric[]
  revenue: Metric[]
  satisfaction: Metric[]
}

// Industry benchmarks
export interface IndustryBenchmarks {
  [industry: string]: {
    [metric: string]: string
  }
}

/**
 * Type guards for stats validation
 */
export const isCompanyStat = (obj: CompanyStat): obj is CompanyStat => {
  return typeof obj === 'object' && typeof obj.value === 'string' && typeof obj.label === 'string'
}

export const isHeroStat = (obj: HeroStat): obj is HeroStat => {
  return typeof obj === 'object' && typeof obj.value === 'string' && typeof obj.label === 'string'
}

export const isTestimonial = (obj: Testimonial): obj is Testimonial => {
  return (
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.company === 'string' &&
    typeof obj.rating === 'number' &&
    obj.rating >= 1 &&
    obj.rating <= 5
  )
}

export const isCaseStudy = (obj: CaseStudy): obj is CaseStudy => {
  return (
    typeof obj === 'object' &&
    typeof obj.client === 'string' &&
    typeof obj.industry === 'string' &&
    Array.isArray(obj.results) &&
    Array.isArray(obj.metrics)
  )
}

export const isMetric = (obj: Metric): obj is Metric => {
  return typeof obj === 'object' && typeof obj.month === 'string' && typeof obj.value === 'number'
}

export const isAchievement = (obj: Achievement): obj is Achievement => {
  return (
    typeof obj === 'object' &&
    typeof obj.title === 'string' &&
    typeof obj.value === 'string' &&
    typeof obj.icon === 'string'
  )
}
