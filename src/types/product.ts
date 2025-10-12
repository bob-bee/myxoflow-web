/**
 * Product-specific type definitions
 */

// Product badge and status interfaces
export interface ProductBadge {
  text: string
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
}

// Product statistics interfaces
export interface ProductStat {
  value: string
  label: string
  icon?: string
  trend?: 'up' | 'down' | 'stable' | string
  change?: string
}

// Process and workflow interfaces
export interface ProcessStep {
  title: string
  description: string
  icon?: string
  duration?: string
}

// Pricing interfaces
export interface PricingModel {
  title: string
  benefits: string[]
  features?: string[]
}

// Testimonial interfaces
export interface ProductTestimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

// Core product interface
export interface Product {
  key: string
  name: string
  tagline: string
  description: string
  overview: string
  features: string[]
  useCases: string[]
  pricing: string
  badge?: ProductBadge
  stats: ProductStat[]
  targetAudience: string
  differentiators: string[]
  processSteps: ProcessStep[]
  pricingModel: PricingModel
  screenshots?: string[]
  testimonials?: ProductTestimonial[]
}

// Market data interface
export interface MarketData {
  name: string
  status: string
  users: string
  growth: string
  color: string
  icon: string
  description?: string
}

/**
 * Type guards for runtime validation
 */
export const isProduct = (obj: unknown): obj is Product => {
  if (typeof obj !== 'object' || obj === null) return false
  const p = obj as Record<string, unknown>
  return (
    typeof p.key === 'string' &&
    typeof p.name === 'string' &&
    typeof p.tagline === 'string' &&
    Array.isArray(p.features) &&
    Array.isArray(p.useCases)
  )
}

export const isMarketData = (obj: unknown): obj is MarketData => {
  if (typeof obj !== 'object' || obj === null) return false
  const m = obj as Record<string, unknown>
  return typeof m.name === 'string' && typeof m.status === 'string' && typeof m.users === 'string'
}

export const isProductBadge = (obj: unknown): obj is ProductBadge => {
  if (typeof obj !== 'object' || obj === null) return false
  const badge = obj as Record<string, unknown>
  return typeof badge.text === 'string' && typeof badge.type === 'string'
}

export const isProductStat = (obj: unknown): obj is ProductStat => {
  if (typeof obj !== 'object' || obj === null) return false
  const stat = obj as Record<string, unknown>
  return typeof stat.value === 'string' && typeof stat.label === 'string'
}
