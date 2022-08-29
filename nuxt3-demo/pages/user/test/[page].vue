<template>
  <div class="p-2">
      <GlobalLoading :pending="pending" :error="error" :empty="pageData.length==0">
    <!-- 内容区域 -->
    <UserTestList v-for="(item,index) of pageData" :key="item.id" :item="item"></UserTestList>
  </GlobalLoading>
      <!-- 分页区域 -->
      <div class="w-full flex justify-center bg-white py-2 mb-2">
      <n-pagination
        v-model:page="page"
        :item-count="itemCount"
        :on-update:page="updatePage"
      />
    </div>
  </div>

</template>

<script setup>
import {  NPagination } from "naive-ui";
// 设置头部
useHead({
  title: '我的考试',
});
const { pageData, itemCount, pending, error, refresh, page,updatePage } =
  await usePage(({ page }) =>
  useUserTestList(page)
  );
</script>

<style lang="scss" scoped></style>
