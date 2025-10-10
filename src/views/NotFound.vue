<!-- src/views/NotFound.vue -->
<script setup lang="ts">
// 404 page for unmatched routes
</script>

<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <router-link to="/" class="btn btn-primary"> Go Home </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container {
  max-width: 600px;
  padding: 2rem;
}

h1 {
  font-size: 6rem;
  font-weight: bold;
  color: var(--md-sys-color-primary); /* was #3b82f6 */
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--md-sys-color-on-surface); /* was #1f2937 */
}

p {
  font-size: 1.125rem;
  color: var(--md-sys-color-on-surface-variant); /* was #6b7280 */
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: var(--md-sys-color-primary); /* was #3b82f6 */
  color: var(--md-sys-color-on-primary); /* was white */
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn:hover {
  background: var(--md-sys-color-primary-container); /* was #2563eb */
  transform: translateY(-1px);
}
</style>
