// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Views
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Products from '@/views/ProductsView.vue'
import HowItWorks from '@/views/HowItWorks.vue'
import CaseStudies from '@/views/CaseStudies.vue'
import FAQ from '@/views/FAQ.vue'
import Contact from '@/views/ContactView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'MyxoFlow - Process Optimization Without the Premium Price Tag',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About MyxoFlow - Lean, Efficient, Results-Driven',
    },
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    meta: {
      title: 'Our Products - MyxoFlow Solutions',
    },
  },

  {
    path: '/how-it-works',
    name: 'how-it-works',
    component: HowItWorks,
    meta: {
      title: 'How MyxoFlow Transforms Your Operations',
    },
  },
  {
    path: '/case-studies',
    name: 'case-studies',
    component: CaseStudies,
    meta: {
      title: 'Success Stories - MyxoFlow Case Studies',
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
    meta: {
      title: 'Frequently Asked Questions - MyxoFlow',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact MyxoFlow - Get Started Today',
    },
  },
  // Redirect old paths
  {
    path: '/process',
    redirect: '/how-it-works',
  },
  // 404 catch all
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// Global navigation guard for page titles
router.beforeEach((to, from, next) => {
  document.title = (to.meta?.title as string) || 'MyxoFlow'
  next()
})

export default router
