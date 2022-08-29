<template>
  <n-grid>
    <n-gi v-for="i of 8" :key="i">
      <n-card class="mb-2">
        <n-skeleton height="40px" width="100%" />
        <n-skeleton height="40px" width="60%" />
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup>
import { NCard, NSkeleton, NGrid, NGi } from "naive-ui";
</script>

<style scoped></style>
