<template>
  <div class="bg-white px-3 pb-3 rounded">
    <div class="py-3 pl-3 border-b">精品推荐</div>
  <template v-for="item of data" :key="item.id" class="mt-2 ">
    <hot-course-item :item="item"></hot-course-item>
  </template>
  </div>
</template>

<script setup>
const props = defineProps({
  data:{
    type:Array
  }
})
</script>

<style lang="scss" scoped>

</style>