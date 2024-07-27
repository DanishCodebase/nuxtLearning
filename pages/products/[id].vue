<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "product",
});

const url = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(url);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found.",
    fatal: true,
  });
}
</script>

<style scoped></style>
