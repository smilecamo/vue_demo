<template>
  <n-empty :description="desc" class="pt-20 pb-20"  size="large">
  </n-empty>
</template>

<script setup>
import {NEmpty} from 'naive-ui'
const props = defineProps({
  desc:{
    type:String,
    default:'暂无数据'
  }
})
</script>