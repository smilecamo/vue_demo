<template>
  <button @click="changeTheme">button</button>
  <div>当前主题为：{{ theme }}</div>
  <div class="area">
    <span class="text">text1</span>
    <span class="text">text2</span>
    <span class="text">text3</span>
  </div>
</template>

<script setup lang="ts">
import { changeTheme, theme } from '../../hooks/useTheme'
</script>

<style scoped>
.area {
  background: var(--bg-color);
  color: var(--text-color);
}
.text {
  display: block;
  padding: 10px;
}
</style>
