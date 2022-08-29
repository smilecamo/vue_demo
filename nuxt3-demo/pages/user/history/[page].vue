<template>
  <div>
      <!-- tab区域 -->
      <UiTab></UiTab>
      <GlobalLoading :pending="pending" :error="error" :empty="pageData.length==0">
    <!-- 内容区域 -->
      <UserHistoryList :data="pageData"></UserHistoryList>
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
const route = useRoute();
// 设置头部
useHead({
  title: '学习记录',
});
let type = route.query.type || 'course';
const { pageData, itemCount, pending, error, refresh, page } =
  await usePage(({ page }) =>
    useUserHistory(() => {
      return {
        type,
        page,
      };
    })
  );
  const updatePage = (pageNumber) => {
  return navigateTo({
    name: "user-history-page",
    params: {
      ...route.params,
      page: pageNumber,
    },
    query: {
      type,
    },
  });
};
// 取消监听
onBeforeUnmount(() => {
  stop();
});
</script>

<style lang="scss" scoped></style>
