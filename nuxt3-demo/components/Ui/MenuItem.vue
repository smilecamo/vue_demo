<template>
 <span  class="nav-item" :class="{'nav-item-active':active}">
          <slot></slot>
    </span>
</template>

<script setup>
defineProps({
  active:{
    type:Boolean,
    default:false
  }
})
</script>

<style  scoped>
.nav-item{
  @apply px-3 py-1 mx-[2px] bg-white cursor-pointer rounded  hover:(bg-blue-50 text-blue-600) active:(bg-blue-100 text-blue-700)
}
.nav-item-active{
  @apply bg-blue-50 text-blue-600
}
</style>