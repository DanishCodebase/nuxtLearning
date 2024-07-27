<template>
  <div>
    <h1 class="text-3xl mb-7">About Page</h1>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/ninja?name=mario", {
//   method: "post",
//   body: { age: 30 },
// });

// const { data } = await useFetch("/api/ninja");
const { data } = await useFetch("/api/currency/INR");
</script>

<style scoped></style>
