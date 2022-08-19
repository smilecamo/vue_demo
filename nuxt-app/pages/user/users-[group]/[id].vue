<template>
  <div>
  user-[group]-[id]{{$route.params}}
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.query);
console.log(route.params);
</script>

<style lang="scss" scoped>

</style>