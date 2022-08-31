<template>
  <div>
  <h2 class="text-lg font-bold px-2 py-2 sticky top-0 bg-white">全部分类</h2>
  <ul>
  <li v-for="(item,index) in data" class="text-base px-2 pt-2 last:mb-2" @click="$emit('handleCLickLi',index)">{{item.name}}</li>
  </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  data:{
    type:Object,
    required:true
  }
})
const emits = defineEmits(['handleCLickLi'])
</script>

<style lang="scss" scoped>

</style>