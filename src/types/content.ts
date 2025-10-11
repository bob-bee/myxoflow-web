// Generic section with optional subtitle/body
export interface SectionContent {
  title: string
  subtitle?: string
  body?: string
}

// Arbitrary keyed map
export type ItemMap<T> = Record<string, T>

// FAQ category
export interface FAQCategory {
  title: string
  questions: { question: string; answer: string }[]
}

// Core product detail
export interface ProductDetail {
  name: string
  tagline: string
  overview: string
  features: string[]
  useCases: string[]
  pricing: string
}

// Main content state
export interface ContentState {
  hero: { headline: string; subheadline: string; ctaPrimary: string; ctaSecondary: string }
  intro: SectionContent
  whatWeDo: { items: { key: string; heading: string; description: string }[] }
  products: { list: ItemMap<ProductDetail> }
  why: { points: { key: string; heading: string; description: string }[] }
  ctaFooter: { heading: string; primaryButton: string; secondaryButton: string }
  about: SectionContent & {
    mission: SectionContent
    team: SectionContent
    philosophy: { points: string[] }
    values: { items: { key: string; title: string; description: string }[] }
  }
  processFlow: {
    heading: string
    description: string
    steps: { step: string; title: string; description: string }[]
    results?: string
  }
  howItWorks: {
    platform: { steps: { step: string; title: string; description: string }[]; results: string }
    stichflow?: { steps: { step: string; title: string; description: string }[] }
  }
  caseStudies: {
    studies: {
      client: string
      challenge: string
      solution: string
      results: string[]
      quote: string
    }[]
  }
  faq: FAQCategory[]
  contact: {
    methods: { type: string; title: string; description: string; cta: string; email?: string }[]
    form: {
      fields: {
        name: string
        label: string
        type: 'text' | 'email' | 'select' | 'textarea'
        required: boolean
        options?: string[]
      }[]
      submitText: string
    }
  }
}
