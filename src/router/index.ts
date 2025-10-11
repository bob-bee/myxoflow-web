// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Views
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import ProductListView from '@/views/product/ProductListView.vue'
import ProductDetailView from '@/views/product/ProductDetailView.vue'
import HowItWorks from '@/views/HowItWorks.vue'
import CaseStudies from '@/views/CaseStudies.vue'
import FAQ from '@/views/FAQ.vue'
import Contact from '@/views/ContactView.vue'

const validProducts = ['dashboards', 'stichflow', 'fill', 'date', 'golgappa', 'craft']

const productNames: Record<string, string> = {
  dashboards: 'MyxoFlow Dashboards - Core Platform',
  stichflow: 'StichFlow - Clothing Supply Chain Management',
  fill: 'MyxoFill - Freelancer Marketplace Management',
  date: 'MyxoDate - Premium Dating Platform',
  golgappa: 'Golgappa.inc - Mobile Food Service Platform',
  craft: 'MyxoCraft - Design-to-Manufacturing Platform',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'MyxoFlow - One Platform, Multiple Markets' },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'About MyxoFlow - Unified Dashboard Platform' },
  },
  {
    path: '/products',
    name: 'products',
    component: ProductListView,
    meta: { title: 'Market Solutions - MyxoFlow Platform' },
  },
  {
    path: '/products/:productKey',
    name: 'product-detail',
    component: ProductDetailView,
    props: true,
    beforeEnter: (to, from, next) => {
      const key = to.params.productKey as string
      if (validProducts.includes(key)) {
        next()
      } else {
        next('/products')
      }
    },
  },
  {
    path: '/how-it-works',
    name: 'how-it-works',
    component: HowItWorks,
    meta: { title: 'How MyxoFlow Transforms Your Operations' },
  },
  {
    path: '/case-studies',
    name: 'case-studies',
    component: CaseStudies,
    meta: { title: 'Success Stories - MyxoFlow Case Studies' },
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
    meta: { title: 'Frequently Asked Questions - MyxoFlow' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { title: 'Contact MyxoFlow - Get Started Today' },
  },
  {
    path: '/process',
    redirect: '/how-it-works',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: 'Page Not Found - MyxoFlow' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, from, next) => {
  if (to.name === 'product-detail') {
    const key = to.params.productKey as string
    document.title = productNames[key] || 'MyxoFlow Product Details'
  } else {
    document.title = (to.meta.title as string) || 'MyxoFlow'
  }
  next()
})

export default router
