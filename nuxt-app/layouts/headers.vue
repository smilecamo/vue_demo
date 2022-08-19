<template>
  <div class="HEADER">
     <img src="~/assets/image/logo.png" alt="Discover Nuxt 3" class="image"/>
    <slot></slot>
    <span>登录</span>
  </div>
</template>

<script setup>

</script>

<style scoped>
.image{
  width: 36px;
  height: 36px;
}
.HEADER{
  display: flex;
  justify-content: space-between;
  background: skyblue;
  line-height: 40px;
}
</style>