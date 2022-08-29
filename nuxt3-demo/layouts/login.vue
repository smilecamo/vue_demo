<template>
  <div
    class="min-w-screen min-h-screen bg-gray-100 flex justify-center items-center"
  >
    <div class="bg-white rounded shadow p-4">
      <h4 class="text-lg font-bold pb-4">{{ $route.meta.title || "登录" }}</h4>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
