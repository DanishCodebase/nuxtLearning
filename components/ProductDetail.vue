<template>
  <div class="shadow-md rounded-md h-full p-5">
    <div class="grid grid-cols-2">
      <div class="p-y">
        <img
          :src="product.image"
          alt="product img"
          class="mx-auto mt-7 max-w-[400px]"
        />
      </div>
      <div class="p-7 mx-5">
        <h2 class="text-4xl mb-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-2 pb-4">Product Description:</h3>
        <p>{{ product.description }}</p>
        <button class="my-7 flex items-center px-5 py-3 bg-green-600 text-white rounded-md hover:bg-green-500">
          <span class="material-symbols-outlined mr-3"> add_shopping_cart </span>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
