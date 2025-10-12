/**
 * Content-specific type definitions
 */

// Navigation and structure interfaces
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
  platform?: string
  handle?: string
}

export interface ContactMethod {
  type: 'email' | 'phone' | 'consultation' | 'chat'
  title: string
  description: string
  contact?: string
  cta?: string
  availability?: string
  label?: string
  value?: string
  icon?: string
}

export interface FooterLink {
  label: string
  path: string
  external?: boolean
}

export interface FooterNavigation {
  products: FooterLink[]
  company: FooterLink[]
  resources: FooterLink[]
  legal: FooterLink[]
}

// Action and button interfaces
export interface ActionButton {
  text: string
  link: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  icon?: string
}

// Content interfaces
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

export interface CTAContent {
  title: string
  description: string
  features: string[]
  primaryAction: ActionButton
  secondaryAction: ActionButton
  note: string
  variant?: 'default' | 'gradient' | 'minimal'
}

export interface ContentBlock {
  heading: string
  text: string
  image?: string
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
  story?: string
}

// FAQ interfaces
export interface FAQQuestion {
  question: string
  answer: string
  tags?: string[]
}

export interface FAQCategory {
  title: string
  questions: FAQQuestion[]
}

// Page and metadata interfaces
export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  image?: string
}

export interface BreadcrumbItem {
  label: string
  path?: string
  icon?: string
  isActive?: boolean
}

// Section content interfaces
export interface WhyPoint {
  key: string
  title: string
  description: string
  icon: string
}

export interface WhatWeDoItem {
  key: string
  heading: string
  description: string
}

/**
 * Type guards for content validation
 */
export const isNavigationItem = (obj: NavigationItem): obj is NavigationItem => {
  return typeof obj === 'object' && typeof obj.label === 'string' && typeof obj.path === 'string'
}

export const isFAQCategory = (obj: FAQCategory): obj is FAQCategory => {
  return typeof obj === 'object' && typeof obj.title === 'string' && Array.isArray(obj.questions)
}

export const isBreadcrumbItem = (obj: BreadcrumbItem): obj is BreadcrumbItem => {
  return typeof obj === 'object' && typeof obj.label === 'string'
}
