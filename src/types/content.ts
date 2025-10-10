// src/types/content.ts
export interface HeroContent {
  headline: string
  subheadline: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface IntroContent {
  title: string
  body: string
}

export interface WhatWeDoItem {
  key: string
  heading: string
  description: string
}

export interface WhatWeDoContent {
  title: string
  items: WhatWeDoItem[]
}

export interface Product {
  key: string
  name: string
  description: string
}

export interface ProductsContent {
  title: string
  list: Product[]
}

export interface WhyPoint {
  key: string
  heading: string
  description: string
}

export interface WhyContent {
  title: string
  points: WhyPoint[]
}

export interface CTAFooterContent {
  heading: string
  primaryButton: string
  secondaryButton: string
}

export interface AboutValueItem {
  key: string
  title: string
  description: string
}

export interface AboutContent {
  title: string
  subtitle: string
  mission: {
    heading: string
    text: string
  }
  team: {
    heading: string
    text: string
  }
  philosophy: {
    heading: string
    points: string[]
  }
  values: {
    heading: string
    items: AboutValueItem[]
  }
}

export interface ProductDetail {
  name: string
  tagline: string
  overview: string
  features: string[]
  useCases: string[]
  pricing: string
}

export interface ProductDetailsContent {
  dashboards: ProductDetail
  stichflow: ProductDetail
  fill: ProductDetail
  date: ProductDetail
  golgappa: ProductDetail
  craft: ProductDetail
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface ProcessFlow {
  heading: string
  description: string
  steps: ProcessStep[]
  results?: string
}

export interface HowItWorksContent {
  title: string
  subtitle?: string
  platformProcess: {
    heading: string
    description: string
    steps: {
      step: string
      title: string
      description: string
    }[]
    results: string
  }
  stichflowProcess?: {
    heading: string
    description: string
    steps: {
      step: string
      title: string
      description: string
    }[]
  }
}

export interface CaseStudy {
  id: string
  client: string
  challenge: string
  solution: string
  results: string[]
  quote: string
}

export interface CaseStudiesContent {
  title: string
  subtitle: string
  studies: CaseStudy[]
}

export interface FAQQuestion {
  question: string
  answer: string
}

export interface FAQCategory {
  title: string
  questions: FAQQuestion[]
}

export interface FAQContent {
  title: string
  categories: {
    platform: FAQCategory
    business: FAQCategory
    technical: FAQCategory
  }
}

export interface ContactMethod {
  type: string
  title: string
  description: string
  cta: string
  email?: string
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'select' | 'textarea'
  required: boolean
  options?: string[]
}

export interface ContactForm {
  fields: FormField[]
  submitText: string
}

export interface ContactContent {
  title: string
  subtitle: string
  methods: ContactMethod[]
  form: ContactForm
}

export interface ContentState {
  hero: HeroContent
  intro: IntroContent
  whatWeDo: WhatWeDoContent
  products: ProductsContent
  why: WhyContent
  ctaFooter: CTAFooterContent
  about: AboutContent
  productDetails: ProductDetailsContent
  howItWorks: HowItWorksContent
  caseStudies: CaseStudiesContent
  faq: FAQContent
  contact: ContactContent
}
export interface Theme {
  name: 'light' | 'dark' | 'energy' | 'sunrise' | 'midnight' | 'forest'
  icon: string
}
