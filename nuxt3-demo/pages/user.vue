<template>
  <div>
    <n-grid x-gap="20">
      <n-gi :span="5">
        <div class="center-route">
          <li
            v-for="item in menu"
            :key="item"
            :class="{ active: $route.name === item.name }"
            @click="menuItem(item)"
          >
            {{ item.title }}
          </li>
        </div>
      </n-gi>
      <n-gi :span="19">
        <div class="bg-white min-h-[75vh] rounded">
          <NuxtPage :page-key="pageKey" />
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
import { NGrid, NGi } from "naive-ui";
const route = useRoute();
const pageKey = computed(() => route.fullPath);
const menu = [
  {
    title: "学习记录",
    name: "user-history-page",
  },
  {
    title: "购买记录",
    name: "user-pay-page",
  },
  {
    title: "我的考试",
    name: "user-test-page",
  },
  {
    title: "我的贴子",
    name: "user-post-page",
  },
  {
    title: "优惠卷记录",
    name: "user-coupon-page",
  },
  {
    title: "我的收藏",
    name: "",
  },
  {
    title: "修改资料",
    name: "",
  },
  {
    title: "修改密码",
    name: "",
  },
  {
    title: "其他设置",
    name: "",
  },
];
const menuItem = (item) => {
  navigateTo({name:item.name})
};
definePageMeta({
  middleware: ["auth"],
});
</script>

<style>
.center-route {
  @apply rounded bg-white;
}
.center-route li {
  @apply list-none px-4 py-3 cursor-pointer hover:(bg-blue-50);
}
.active {
  @apply text-blue-600 font-bold bg-gray-200;
}
</style>
