<template>
  <header>
    <nav
      class="shadow container px-5 sm:px-20 flex justify-between h-14 items-center"
    >
      <nuxt-link class="text-2xl" to="/products">Nuxt Dojo</nuxt-link>
    </nav>
  </header>

  <div class="px-5 sm:px-10 md:px-20 py-6">
    <slot />
  </div>

  <footer>
    <ul class="flex items-center gap-5 px-20 border-t-2 h-14">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/products">Product</nuxt-link></li>
    </ul>
  </footer>
</template>

<script setup>
const message = "Product Page";
</script>

<style scoped>
.router-link-active {
  color: green;
}
</style>
