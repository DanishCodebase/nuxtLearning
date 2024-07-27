<template>
  <header>
    <nav
      class="shadow container sm:px-20 flex justify-between h-14 items-center"
    >
      <nuxt-link class="text-2xl" to="/">Nuxt Dojo</nuxt-link>
      <ul class="flex items-center gap-5">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/products">Product</nuxt-link></li>
        <li><nuxt-link to="/products/ab">Product ab</nuxt-link></li>
      </ul>
    </nav>
  </header>
  <div class="px-20 pt-5">
    <slot />
  </div>
</template>

<script setup>
const message = "Product Page";
</script>

<style scoped>
.router-link-active {
  color: green;
}
</style>
