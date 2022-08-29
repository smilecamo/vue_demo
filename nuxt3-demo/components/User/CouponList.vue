<template>
  <div class="mt-2 ">
    <n-card class=" text-white " :class="(used == '立即使用')?' bg-orange-500':'bg-gray-300'">
    <div class="text-2xl font-bold  ">{{item.price}}</div>
    <div>
    适用课程：{{item.title}}
    </div>
    <div>有效期：{{item.start_time}} ~ {{item.end_time}}</div>
    <div class="flex">
    <n-button :disabled="used !== '立即使用'" color="#f0a020" class="mt-2 ml-auto">{{used}}</n-button>
    </div>
  </n-card>
  </div>
</template>

<script setup>
import {NCard,NButton} from 'naive-ui'
const props = defineProps({
  item:Object
})
const used = computed(()=>{
  const v = props.item
  v.expired = ((new Date()).getTime()) - (new Date(v.end_time).getTime()) > 0
  return v.used ? '已使用' : (v.expired?'已过期':'立即使用')
})
</script>

<style lang="scss" scoped>

</style>