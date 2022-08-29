<template>
  <div class="px-2 py-3 cursor-pointer hover:(text-blue-400)" :class="{'tab-item-active':active}">
  <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  active:{
    type:Boolean,
    default:false
  }
})
</script>

<style lang="scss" scoped>
.tab-item-active{
  border-bottom:2px solid;
  @apply border-blue-400
}
</style>