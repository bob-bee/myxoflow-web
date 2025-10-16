<!-- Simple test component to verify router is working -->
<template>
  <div class="test-page">
    <h1>🧪 Router Test Page</h1>
    <p>If you can see this, the router is working!</p>
    <p><strong>Current route:</strong> {{ $route.path }}</p>
    <p><strong>Current params:</strong> {{ JSON.stringify($route.params) }}</p>

    <div class="nav-test">
      <h2>Navigation Test:</h2>
      <router-link to="/" class="btn">Home</router-link>
      <router-link to="/products" class="btn">Products List</router-link>
      <router-link to="/products/stichflow" class="btn">StichFlow Detail</router-link>
      <router-link to="/about" class="btn">About</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('🧪 Test page mounted successfully')
})
</script>

<style scoped>
.test-page {
  padding: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
}

.nav-test {
  margin-top: 30px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
