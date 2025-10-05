<!-- src/components/layout/AppFooter.vue -->
<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  products: [
    { name: 'Myxo-Dashboards', path: '/products/dashboards' },
    { name: 'MyxoFill', path: '/products/fill' },
    { name: 'MyxoDate', path: '/products/date' },
    { name: 'Golgappa.inc', path: '/products/golgappa' },
    { name: 'MyxoCraft', path: '/products/craft' },
  ],
  company: [
    { name: 'About', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'FAQ', path: '/faq' },
  ],
  support: [
    { name: 'Contact', path: '/contact' },
    { name: 'Documentation', path: '#' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ],
}
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="footer-brand">
          <img src="@/assets/myxoflow.svg" alt="MyxoFlow Logo" width="32" height="32" />
          <span class="brand-name">MyxoFlow</span>
        </div>
        <p class="brand-description">
          Process optimization without the premium price tag. Streamline your operations with our
          lean, efficient solutions.
        </p>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h4>Products</h4>
          <ul>
            <li v-for="link in footerLinks.products" :key="link.name">
              <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="link-group">
          <h4>Company</h4>
          <ul>
            <li v-for="link in footerLinks.company" :key="link.name">
              <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="link-group">
          <h4>Support</h4>
          <ul>
            <li v-for="link in footerLinks.support" :key="link.name">
              <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} MyxoFlow. All rights reserved.</p>
      <p>Built with efficiency in mind.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1f2937;
  color: #d1d5db;
  padding: 3rem 0 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 3rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 0.5rem;
  color: white;
}

.brand-description {
  line-height: 1.6;
  max-width: 300px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group h4 {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
}

.link-group ul {
  list-style: none;
}

.link-group li {
  margin-bottom: 0.5rem;
}

.link-group a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s;
}

.link-group a:hover {
  color: #3b82f6;
}

.footer-bottom {
  border-top: 1px solid #374151;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.footer-bottom p {
  margin-bottom: 0.5rem;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
