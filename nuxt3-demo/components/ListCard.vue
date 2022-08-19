<template>
  <div>
    <div class="container   flex justify-between">
      <span class="text-dark-900 text-2xl">{{title}}</span>
      <n-button quaternary>查看更多</n-button>
    </div>
    <list-card-item class="mt-4" :data="data" :type="type"></list-card-item>
  </div>
</template>

<script setup>
import {NButton} from 'naive-ui'
const props = defineProps({
  data:{
    type:Array
  },
  title:{
    type:String
  },
  type:{
    type:String,
    default:'course'
  }
})
</script>

<style  scoped>

</style>