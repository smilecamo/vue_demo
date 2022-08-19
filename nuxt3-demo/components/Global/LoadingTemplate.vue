<template>
  <div>
    <n-card v-for="i of 4" :key="i" class="mb-2">
        <n-skeleton text :repeat="4" /> 
        <n-skeleton text style="width: 60%" />
      </n-card>
  </div>
</template>

<script setup>
import {NCard,NSkeleton} from 'naive-ui'
</script>

<style  scoped>

</style>