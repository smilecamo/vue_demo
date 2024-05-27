<template>
  <m-choose-icon :title="'选择图标'" v-model:visible="visible"></m-choose-icon>
</template>

<script setup lang="ts">
import { ref } from "vue";
let visible = ref(false);
</script>

<style lang="scss" scoped></style>
