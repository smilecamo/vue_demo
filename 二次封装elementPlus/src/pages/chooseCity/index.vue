<template>
  <div>
    <m-choose-city v-model="name"></m-choose-city>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const name = ref<string>("");
watch(name, (value) => {
  console.log(value);
});
</script>

<style scoped></style>
