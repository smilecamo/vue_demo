<template>
  <n-config-provider inline-theme-disabled>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider } from "naive-ui";

useHead({
  titleTemplate: "%s - 固定标题",
  bodyAttrs: {
    class: "test",
  },
});
</script>

<style></style>
