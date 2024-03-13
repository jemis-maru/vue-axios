<template>
  <div>Hello world</div>
</template>

<script setup>
import { onMounted, inject } from "vue";

// Inject axios plugin
const $axios = inject("axios");

// Mounted
onMounted(() => {
  $axios.get("/posts").then((response) => {
    console.log(response.data)
  });
});
</script>

<style scoped>
</style>
