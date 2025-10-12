/**
 * UI-specific type definitions
 */

// Loading state management
export interface LoadingState {
  global: boolean
  form: boolean
  navigation: boolean
  content: boolean
  products?: boolean
  contact?: boolean
  [key: string]: boolean | undefined
}

// Modal state management
export interface ModalState {
  contact: boolean
  consultation: boolean
  demo: boolean
  newsletter: boolean
  productPreview?: boolean
  videoPlayer?: boolean
  imageGallery?: boolean
  [key: string]: boolean | undefined
}

// Navigation state
export interface NavigationState {
  isMenuOpen?: boolean
  activeSection?: string
  showScrollTop?: boolean
  breadcrumbs?: BreadcrumbItem[]
}

export interface BreadcrumbItem {
  label: string
  path?: string
  icon?: string
  isActive?: boolean
}

// Notification system
export interface NotificationState {
  show: boolean
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration: number
}

// Form management
export interface FormState {
  isSubmitting: boolean
  errors: Record<string, string>
  isValid: boolean
  data?: Record<string, unknown>
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

// Scroll management
export interface ScrollState {
  y: number
  direction: 'up' | 'down'
  isScrolled: boolean
}

// Animation state
export interface AnimationState {
  heroLoaded: boolean
  sectionsVisible: string[]
  enableAnimations: boolean
}

// Search functionality
export interface SearchState {
  query?: string
  isOpen?: boolean
  results?: string[]
  isSearching?: boolean
}

// Theme management
export interface ThemeState {
  isDark?: boolean
  currentTheme?: string
  isTransitioning?: boolean
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

// Page state
export interface PageState {
  title?: string
  isLoading?: boolean
  hasError?: boolean
  errorMessage?: string
}

// Error message interfaces
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

/**
 * Type guards for UI state validation
 */
export const isValidNotificationType = (type: string): type is NotificationState['type'] => {
  return ['info', 'success', 'error', 'warning'].includes(type)
}

export const isValidScrollDirection = (
  direction: string,
): direction is ScrollState['direction'] => {
  return ['up', 'down'].includes(direction)
}

export const isBreadcrumbItem = (obj: BreadcrumbItem): obj is BreadcrumbItem => {
  return typeof obj === 'object' && typeof obj.label === 'string'
}

export const isFormField = (obj: unknown): obj is FormField => {
  if (typeof obj !== 'object' || obj === null) return false
  const field = obj as Record<string, unknown>
  return (
    typeof field.name === 'string' &&
    typeof field.label === 'string' &&
    typeof field.type === 'string'
  )
}

export const isValidFormFieldType = (type: string): type is FormField['type'] => {
  return ['text', 'email', 'tel', 'textarea', 'select', 'checkbox'].includes(type)
}
