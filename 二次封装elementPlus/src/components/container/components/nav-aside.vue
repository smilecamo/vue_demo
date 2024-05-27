<template>
  <!-- <el-menu
    class="el-menu-vertical-demo"
    default-active="2"
    :collapse="collapse"
  >
    <el-menu-item index="2">
      <el-icon-menu />
      <template #title>主页</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon-menu />
      <template #title>图标</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon-setting />
      <template #title>菜单3</template>
    </el-menu-item>
  </el-menu> -->
  ]<m-menu :data="data" router></m-menu>
</template>

<script setup lang="ts">
defineProps<{
  collapse: boolean;
}>();
const data = [
  {
    name: "主页",
    index: "/",
    icon: "Menu",
  },
  {
    name: "图标",
    index: "/chooseIcon",
    icon: "List",
  },
  {
    name: "地址选择器",
    index: "/chooseArea",
    icon: "Location",
  },
  {
    name: "消息通知",
    index: "/notification",
    icon: "Bell",
  },
  {
    name: "趋势",
    index: "/trend",
    icon: "DataLine",
  },
  {
    name: "进度条",
    index: "/progress",
    icon: "DataLine",
  },
  {
    name: "时间选择器",
    index: "/chooseTime",
    icon: "DataLine",
  },
  {
    name: "日期选择器",
    index: "/chooseDate",
    icon: "DataLine",
  },
  {
    name: "城市选择器",
    index: "/chooseCity",
    icon: "DataLine",
  },
  {
    name: "form",
    index: "/form",
    icon: "DataLine",
  },
];
</script>

<style lang="scss" scoped>
body,
#app,
.el-container,
.el-aside,
.el-menu {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
