<template>
  <div class="shadow-md mt-3 rounded">
  <UiImage :src="item.cover"></UiImage>
  <div class="px-4 py-3">
    <div class="text-base font-bold truncate">{{item.title}}</div>
    <div class="flex items-center mt-1">
    <UiPrice :value="item.price"></UiPrice>
    <UiPrice :value="item.t_price" through class="ml-2"></UiPrice>
    </div></div>
  </div>
</template>

<script setup>
const props = defineProps({
  item:{
    type:Object
  }
})
</script>

<style lang="scss" scoped>

</style>