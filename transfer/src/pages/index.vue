<template>
  <div class="mt-2">
    <router-link
      v-for="item in linkList"
      :to="item.path"
      class="mx-2 border p-4 text-lg"
      >{{ item.path }}</router-link
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { routes } from "../router";
const linkList = ref(routes);
</script>

<style lang="scss" scoped></style>
