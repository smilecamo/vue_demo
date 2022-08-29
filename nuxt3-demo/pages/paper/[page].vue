<template>
  <div>
    paper {{$route.params.page}}
    <button @click="a">鉴权</button>
  </div>
</template>

<script setup>
const a = () => {
  useHasAuth()
}
</script>

<style  scoped>

</style>