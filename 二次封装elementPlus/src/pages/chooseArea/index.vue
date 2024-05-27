<template>
  <m-choose-area @change="change"></m-choose-area>
</template>

<script setup lang="ts">
const change = (value: any) => {
  console.log(value);
};
</script>

<style scoped></style>
