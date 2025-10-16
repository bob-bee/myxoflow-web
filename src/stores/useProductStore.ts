// stores/ProductStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import productsData from '../data/products.json'

export interface PricingTier {
  name: string
  description: string
  price: string
  billingPeriod: string
  features: string[]
  cta: string
  popular?: boolean
}

export interface Product {
  key: string
  name: string
  tagline: string
  description: string
  overview: string
  features: string[]
  useCases: string[]
  pricing: {
    model: string
    tiers: PricingTier[]
  }
  tags: string[]
  featured: boolean
  geography?: string
}

export const useProductStore = defineStore('product', () => {
  // State
  const products :Ref<Product[]> = ref<Product[]>(productsData.products)
  const currentProduct :Ref<Product | null> = ref(null)
  const isLoading: Ref<boolean> = ref(false)
  const error = ref<string | null>(null)

  // Computed
  const allProducts = computed(() => products.value)
  
  const featuredProducts = computed(() => 
    products.value.filter(p => p.featured)
  )

  // Actions
  const getProductByKey = (key: string): Product | undefined => {
    const product = products.value.find(p => p.key === key)
    if (product) {
      currentProduct.value = product
    }
    return product
  }

  const getRelatedProducts = (currentKey: string, limit = 3): Product[] => {
    const current = products.value.find(p => p.key === currentKey)
    if (!current) return []

    

    // Find products with overlapping tags
    return products.value
      .filter(p => p.key !== currentKey)
      .map(p => ({
        product: p,
        score: p.tags.filter(tag => current.tags.includes(tag)).length
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.product)
  }

  const setCurrentProduct = (product: Product | null): void => {
    currentProduct.value = product
  }

  const getProductsByTag = (tag: string): Product[] => {
    return products.value.filter(p => p.tags.includes(tag))
  }

  const clearCurrentProduct = () => {
    currentProduct.value = null
  }

  return {
    // State
    products,
    currentProduct,
    isLoading,
    error,
    
    // Computed
    allProducts,
    featuredProducts,
    
    // Actions
    getProductByKey,
    getRelatedProducts,
    setCurrentProduct,
    getProductsByTag,
    clearCurrentProduct,
  }
})
