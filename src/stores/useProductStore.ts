import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product, MarketData, ProductBadge, ProductStat } from '@/types/product'
import { isProduct, isMarketData } from '@/types/product'
import productDataRaw from '@/data/products.json'

const allowedBadgeTypes = ['primary', 'secondary', 'success', 'warning', 'info'] as const
function parseBadgeType(type: string) {
  return allowedBadgeTypes.includes(
    type as 'primary' | 'secondary' | 'success' | 'warning' | 'info',
  )
    ? (type as (typeof allowedBadgeTypes)[number])
    : 'primary'
}

export const useProductStore = defineStore('product', () => {
  const products: Product[] = productDataRaw.products.filter(isProduct).map((p) => ({
    key: p.key,
    name: p.name,
    tagline: p.tagline,
    description: p.description,
    overview: p.overview,
    features: p.features,
    useCases: p.useCases,
    pricing: p.pricing,
    badge: p.badge ? { text: p.badge.text, type: parseBadgeType(p.badge.type) } : undefined,
    stats: p.stats.map((s) => ({
      value: s.value,
      label: s.label,
      trend: s.trend,
      change: s.change,
    })),
    targetAudience: p.targetAudience,
    differentiators: p.differentiators,
    processSteps: p.processSteps,
    pricingModel: p.pricingModel,
  }))

  const topStats = computed<ProductStat[]>(() => products.flatMap((p) => p.stats))

  const marketData = ref(productDataRaw.marketData.filter(isMarketData))

  const productByKey = computed(() => new Map(products.map((p) => [p.key, p] as [string, Product])))

  const marketByName = computed(() => {
    const map = new Map<string, MarketData>()
    marketData.value.forEach((m) => map.set(m.name, m))
    return map
  })

  const featuredProducts = computed(() =>
    products.filter((p) => p.badge?.type === 'primary' || p.badge?.type === 'success'),
  )

  const totalUsers = computed(() =>
    marketData.value.reduce((sum, m) => sum + parseFloat(m.users.replace('k', '')) * 1000, 0),
  )

  const avgGrowthRate = computed(() => {
    const totalGrowth = marketData.value.reduce(
      (sum, m) => sum + parseFloat(m.growth.replace('+', '').replace('%', '')),
      0,
    )
    return `+${(totalGrowth / marketData.value.length).toFixed(1)}%`
  })

  const getProductDetailByKey = (key: string): Product | null => productByKey.value.get(key) ?? null

  const getProductIcon = (key: string): string => {
    const icons: Record<string, string> = {
      stichflow: '🧵',
      fill: '💧',
      date: '💝',
      golgappa: '🍛',
      craft: '🎨',
      dashboards: '📊',
    }
    return icons[key] ?? '📱'
  }

  const getProductBadge = (key: string): ProductBadge | null =>
    productByKey.value.get(key)?.badge ?? null

  const getKeyFeatures = (key: string): string[] =>
    productByKey.value.get(key)?.features.slice(0, 3) ?? []

  const getProductCardClass = (key: string): string => {
    const classes: Record<string, string> = {
      stichflow: 'card-blue',
      fill: 'card-green',
      date: 'card-orange',
      golgappa: 'card-red',
      craft: 'card-purple',
      dashboards: 'card-indigo',
    }
    return classes[key] ?? 'card-default'
  }

  const getProductColor = (key: string): string => {
    const colors: Record<string, string> = {
      stichflow: '#3b82f6',
      fill: '#10b981',
      date: '#f59e0b',
      golgappa: '#ef4444',
      craft: '#8b5cf6',
      dashboards: '#6366f1',
    }
    return colors[key] ?? '#6b7280'
  }

  const searchProducts = (query: string): Product[] => {
    const q = query.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q)),
    )
  }

  return {
    products,
    marketData: marketData.value,
    productByKey,
    marketByName,
    featuredProducts,
    totalUsers,
    avgGrowthRate,
    getProductDetailByKey,
    getProductIcon,
    getProductBadge,
    getKeyFeatures,
    getProductCardClass,
    getProductColor,
    searchProducts,
    parseBadgeType,
    topStats,
  }
})

export type { Product, ProcessStep, MarketData, ProductBadge, ProductStat } from '@/types/product'
