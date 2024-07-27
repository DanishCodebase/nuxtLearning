<template>
  <div class="shadow-lg text-center rounded-md h-full p-5">
    <img :src="product.image" class="max-h-36 mx-auto" alt="product thumb" />
    <p class="m-4 trancate">{{ product.title }}</p>
    <nuxt-link :to="`/products/${product.id}`">
      <p class="bg-green-600 hover:bg-green-500 text-white py-2 rounded-md">View Details</p>
    </nuxt-link>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.trancate {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
