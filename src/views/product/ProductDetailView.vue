<!-- src/views/product/ProductDetailView.vue -->
<template>
  <div class="product-detail-page">
    <ProductNav :name="detail?.name ?? ''" @scroll-to="scrollToSection" />

    <ProductHero v-if="detail" :detail="detail" />
    <ProductOverview v-if="detail" :detail="detail" />
    <ProductCTA v-if="detail" :detail="detail" />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/useProductStore'
import ProductNav from '@/components/sections/product/ProductNav.vue'
import ProductHero from '@/components/sections/product/ProductHero.vue'
import ProductOverview from '@/components/sections/product/ProductOverview.vue'
import ProductCTA from '@/components/sections/product/ProductCTA.vue'

const route = useRoute()
const router = useRouter()
const store = useProductStore()
const key = route.params.productKey as string

const detail = computed(() => store.getProductDetailByKey(key))

onMounted(() => {
  if (!detail.value) router.push('/products')
})

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* Add your styles here */
</style>
