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
  title:'社区',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<style></style>
