<template>
  <div class="loading-spinner" role="status" aria-label="Loading">
    <div class="spinner-circle"></div>
  </div>
</template>

<script setup lang="ts">
// No props needed
</script>

<style scoped>
.loading-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.spinner-circle {
  width: 32px;
  height: 32px;
  border: 4px solid var(--md-sys-color-outline);
  border-top-color: var(--md-sys-color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
