<template>
  <n-grid x-gap="12" :cols="4" class="mb-6">
      <n-gi v-for="item of data" :key="item.src" class="cursor-pointer">
        <n-card class="hover:(text-blue-400 shadow-lg)" @click="$openUrl(item)">
        <template #cover>
          <img :src="item.src" class="h-[140px] w-[100%]">
        </template>
        <div class="text-center mt-3" >
         {{item.name}}
        </div>
      </n-card>
      </n-gi>
    </n-grid>

</template>

<script setup>
import {NCard,NGrid,NGi} from 'naive-ui'
defineProps({
  data:Array
})
</script>

<style  scoped>

</style>