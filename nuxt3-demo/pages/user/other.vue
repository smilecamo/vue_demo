<template>
  <div class="p-5">
    <span class="text-sm text-gray-600">其他设置</span>
    <div class="flex justify-between border-b pb-4 pt-6">
    <span >手机号: &emsp;{{user.phone}}</span>
    <NuxtLink to="/bindPhone?form='user/other'" class="text-green-700">修改</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const user = useUser()

</script>

<style lang="scss" scoped>

</style>