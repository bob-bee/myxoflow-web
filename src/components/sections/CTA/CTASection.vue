<template>
  <section class="cta-section">
    <div class="cta-background">
      <div class="cta-gradient"></div>
      <div class="cta-pattern"></div>
    </div>
    <div class="container">
      <div class="cta-content">
        <CTAText :CTA="cta" />
        <CTAActions
          :primary="cta.primaryAction"
          :secondary="cta.secondaryAction"
          :note="cta.note"
        />
        <CTAStats :stats="stats" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import CTAText from '@/components/sections/CTA/CTAText.vue'
import CTAActions from '@/components/sections/CTA/CTAActions.vue'
import CTAStats from '@/components/sections/CTA/CTAStats.vue'

const contentStore = useContentStore()
type Stat = {
  icon: 'up' | 'down'
  value: string | number
  label: string
  change?: string
  trend?: 'up' | 'down'
}

const cta = computed(() => contentStore.cta)
const { stats } = defineProps<{ stats: Stat[] }>()
</script>

<style scoped>
.cta-section {
  /* existing styles */
}
</style>
