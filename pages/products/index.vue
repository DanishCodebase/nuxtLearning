<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <div v-for="p in products">
      <ProductCard :product="p" />
    </div>
  </div>
</template>

<script setup>
const message = "Product Page";
definePageMeta({
  layout: "product",
});

useHead({
  title: "Nuxt Dojo | Product",
  meta: [{ name: "description", content: "Nuxt Dojo Product list" }],
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
