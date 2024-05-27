<template>
  <el-container>
    <el-aside width="auto">
      <nav-aside :collapse="collapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="collapse" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavAside from "../components/nav-aside.vue";
import NavHeader from "../components/nav-header.vue";
let collapse = ref(false);
</script>

<style scoped lang="scss">
.el-header {
  padding: 0;
}
</style>
