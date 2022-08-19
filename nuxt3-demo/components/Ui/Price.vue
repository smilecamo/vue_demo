<template>
  <div :class="through?'line-through text-red-600':' text-xl'">
    {{+value === 0 ?'免费' : value}}
  </div>
</template>

<script setup>
defineProps({
  value:{
    type:[Number,String]
  },
  through:{
    type:Boolean,
    default:false
  }
})
</script>
