<script setup lang="ts">
import getImg from "./utils/imgUtils";
console.log(getImg("1童年.png"));
</script>

<template>
  <img :src="getImg('2小王子.png')" alt="" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
