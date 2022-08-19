<template>
  <NuxtLayout name="headers">
    <NuxtLink to="/">主页</NuxtLink>
    <NuxtLink to="/about/us">关于我们</NuxtLink>
    <NuxtLink to="/about/me">关于我</NuxtLink>
  </NuxtLayout>
  <div class="m-2">
     <NuxtLink to="/user/users-12" class="px-6">user-id</NuxtLink>
     <NuxtLink to="/user/users-admin/13?name=name">user-group/id</NuxtLink>
  </div>
  <div>
    <NuxtPagevol></NuxtPagevol>
  </div>
</template>

<script setup>

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
