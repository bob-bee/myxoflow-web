// Enhanced TypeScript Interfaces for MyxoFlow
export interface NavigationItem {
  label: string
  path: string
  external?: boolean
  children?: NavigationItem[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  color?: string
}

export interface ContactMethod {
  type: 'email' | 'phone' | 'consultation' | 'chat'
  title: string
  description: string
  contact?: string
  cta?: string
  availability?: string
}

export interface HeroContent {
  badge: {
    icon: string
    text: string
  }
  title: string
  highlight: string
  description: string
  primaryAction: ActionButton
  secondaryAction: ActionButton
  chips: Array<{ label: string; color?: string }>
}

export interface ActionButton {
  text: string
  link: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  icon?: string
}

export interface CTAContent {
  title: string
  description: string
  features: string[]
  primaryAction: ActionButton
  secondaryAction: ActionButton
  note: string
  variant?: 'default' | 'gradient' | 'minimal'
}

export interface AboutContent {
  title: string
  subtitle: string
  mission: ContentBlock
  team: ContentBlock
  philosophy: {
    heading: string
    points: string[]
  }
  values: {
    heading: string
    items: Array<{
      title: string
      description: string
      icon?: string
    }>
  }
}

export interface ContentBlock {
  heading: string
  text: string
  image?: string
}

export interface FAQCategory {
  title: string
  questions: FAQQuestion[]
}

export interface FAQQuestion {
  question: string
  answer: string
  tags?: string[]
}

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

export interface ProductBadge {
  text: string
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
}

export interface ProductStat {
  value: string
  label: string
  icon?: string
  trend?: 'up' | 'down' | 'stable'
  change?: string
}

export interface ProcessStep {
  title: string
  description: string
  icon?: string
  duration?: string
}

export interface PricingModel {
  title: string
  benefits: string[]
  features?: string[]
}

export interface ProductTestimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

export interface MarketData {
  name: string
  status: string
  users: string
  growth: string
  color: string
  icon: string
  description?: string
}

export interface CompanyStat {
  value: string
  label: string
  icon?: string
  change?: string
  trend?: 'up' | 'down' | 'stable'
  description?: string
}

export interface Achievement {
  title: string
  description: string
  value: string
  icon: string
  date?: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
  date?: string
}

export interface CaseStudy {
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  quote: string
  metrics: CaseStudyMetric[]
  image?: string
  duration?: string
}

export interface CaseStudyMetric {
  label: string
  before: string
  after: string
  improvement: string
  unit?: string
}

export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  image?: string
}
export interface HttpErrorMessage {
  title: string
  description: string
  action: string
}

export interface FormErrorMessage {
  required: string
  email: string
  phone: string
  minLength: string
  maxLength: string
  success: string
  error: string
  submitting: string
  validation: string
}

export interface ErrorMessages {
  404: HttpErrorMessage
  500: HttpErrorMessage
  403: HttpErrorMessage
  form: FormErrorMessage
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox'
  placeholder?: string
  required?: boolean
  options?: string[]
  validation?: {
    pattern?: string
    message?: string
  }
}

export interface NotificationState {
  show: boolean
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration: number
}

export interface LoadingState {
  global: boolean
  form: boolean
  navigation: boolean
  content: boolean
  [key: string]: boolean
}

export interface ModalState {
  contact: boolean
  consultation: boolean
  demo: boolean
  newsletter: boolean
  [key: string]: boolean
}

export interface FormState {
  isSubmitting: boolean
  errors: Record<string, string>
  isValid: boolean
  data?: Record<string, unknown>
}

export interface ScrollState {
  y: number
  direction: 'up' | 'down'
  isScrolled: boolean
}

export interface AnimationState {
  heroLoaded: boolean
  sectionsVisible: string[]
  enableAnimations: boolean
}

export interface BreadcrumbItem {
  label: string
  path?: string
  icon?: string
}

export interface ThemeConfig {
  name: string
  label: string
  colors: {
    primary: string
    secondary: string
    surface: string
    background: string
    [key: string]: string
  }
  logo?: string
}

export interface Metric {
  month: string
  value: number
}

export interface PerformanceMetrics {
  users: Metric[]
  revenue: Metric[]
  satisfaction: Metric[]
}
