import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  NavigationItem,
  FooterNavigation,
  HeroContent,
  CTAContent,
  AboutContent,
  WhatWeDoItem,
  WhyPoint,
  FAQCategory,
} from '@/types/content'
import { isNavigationItem, isFAQCategory } from '@/types/content'

// Import data
import navigationData from '@/data/navigation.json'
import contentData from '@/data/content.json'
import faqData from '@/data/faq.json'

/**
 * Content Store
 *
 * Manages site content, navigation, and page data.
 * Optimized with lookup maps and validation.
 */
export const useContentStore = defineStore('content', () => {
  // ✅ Load and validate navigation data
  const navigation = ref<NavigationItem[]>(navigationData.navigation.filter(isNavigationItem))

  const footerNavigation = ref<FooterNavigation>(navigationData.footer as FooterNavigation)

  // ✅ Load content sections
  const company = ref(contentData.company)
  const hero = ref<HeroContent>(contentData.hero as HeroContent)
  const whatWeDo = ref<{ title: string; items: WhatWeDoItem[] }>({
    title: contentData.whatWeDo.title,
    items: contentData.whatWeDo.items as WhatWeDoItem[],
  })
  const whyChoose = ref<{ title: string; points: WhyPoint[] }>({
    title: contentData.whyChoose.title,
    points: contentData.whyChoose.points as WhyPoint[],
  })
  const cta = ref<CTAContent>(contentData.cta as CTAContent)
  const about = ref<AboutContent>(contentData.about as AboutContent)
  const contact = ref(contentData.contact)

  // ✅ Load FAQ data
  const faq = ref<FAQCategory[]>(faqData.categories.filter(isFAQCategory))

  // ✅ Create navigation lookup map
  const navigationByPath = computed(() => {
    const map = new Map<string, NavigationItem>()

    const addToMap = (items: NavigationItem[]) => {
      items.forEach((item) => {
        map.set(item.path, item)
        if (item.children) {
          addToMap(item.children)
        }
      })
    }

    addToMap(navigation.value)
    return map
  })

  // ✅ FAQ lookup methods
  const faqByCategory = computed(() => {
    const map = new Map<string, FAQCategory>()
    faq.value.forEach((category) => {
      map.set(category.title.toLowerCase().replace(/\s+/g, '-'), category)
    })
    return map
  })

  // ✅ Utility methods with JSDoc

  /**
   * Get navigation item by path
   * @param path - Route path to lookup
   * @returns Navigation item or null
   */
  const getNavigationItem = (path: string): NavigationItem | null => {
    return navigationByPath.value.get(path) ?? null
  }

  /**
   * Get FAQ category by key
   * @param categoryKey - Category key (slugified title)
   * @returns FAQ category or null
   */
  const getFAQCategory = (categoryKey: string): FAQCategory | null => {
    return faqByCategory.value.get(categoryKey) ?? null
  }

  /**
   * Search FAQ questions by query
   * @param query - Search term
   * @returns Array of matching questions with category context
   */
  const searchFAQ = (query: string) => {
    if (!query.trim()) return []

    const results: Array<{ question: object; category: string }> = []
    const lowercaseQuery = query.toLowerCase()

    faq.value.forEach((category) => {
      category.questions.forEach((question) => {
        if (
          question.question.toLowerCase().includes(lowercaseQuery) ||
          question.answer.toLowerCase().includes(lowercaseQuery) ||
          question.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
        ) {
          results.push({ question, category: category.title })
        }
      })
    })

    return results
  }

  /**
   * Get breadcrumb trail for a given path
   * @param currentPath - Current route path
   * @returns Array of breadcrumb items
   */
  const getBreadcrumbs = (currentPath: string) => {
    const breadcrumbs = [{ label: 'Home', path: '/' }]

    const currentNav = getNavigationItem(currentPath)
    if (currentNav) {
      breadcrumbs.push({ label: currentNav.label, path: currentNav.path })
    }

    return breadcrumbs
  }

  /**
   * Check if a path is external
   * @param path - Path to check
   * @returns True if external link
   */
  const isExternalLink = (path: string): boolean => {
    return path.startsWith('http://') || path.startsWith('https://')
  }

  return {
    // ✅ Reactive data (readonly)
    navigation: navigation,
    footerNavigation: footerNavigation,
    company: company,
    hero: hero,
    whatWeDo: whatWeDo,
    whyChoose: whyChoose,
    cta: cta,
    about: about,
    contact: contact,
    faq: faq,

    // ✅ Computed lookups
    navigationByPath,
    faqByCategory,

    // ✅ Methods
    getNavigationItem,
    getFAQCategory,
    searchFAQ,
    getBreadcrumbs,
    isExternalLink,
  }
})

/**
 * Export types for component use
 */
export type {
  NavigationItem,
  FooterNavigation,
  HeroContent,
  CTAContent,
  AboutContent,
  WhatWeDoItem,
  WhyPoint,
  FAQCategory,
  FAQQuestion,
} from '@/types/content'
