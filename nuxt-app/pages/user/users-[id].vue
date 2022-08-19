<template>
  <div>
    users-[id]
    {{$route.params}}
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params);
</script>

<style lang="scss" scoped>

</style>