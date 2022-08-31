<template>
  <div class="w-screen bg-white border-b border-b-zinc-100">
    <div class="flex items-center">
      <img class="h-[40px] mr-1" src="https://file.ipadown.com/tophub/assets/images/logo.png">
      <SearchVue class="mr-1 w-full" ></SearchVue>
      <MyVue class="mr-1"></MyVue>
      <ThemeVue></ThemeVue>
    </div>
  </div>
</template>

<script setup>
import SearchVue from './search/index.vue'
import MyVue from './my.vue'
import ThemeVue from './theme.vue'
</script>

<style lang="scss" scoped>

</style>