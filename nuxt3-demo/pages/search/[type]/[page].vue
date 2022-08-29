<template>
  <GlobalLoading :pending="pending" :error="error">
  <template #loading>
    <GlobalCourseLoading></GlobalCourseLoading>
  </template>
    <p class="py-2 text-lg">"{{ title }}"的搜索结果</p>
    <!-- tab区域 -->
    <UiTab></UiTab>
    <!-- 内容区域 -->
    <n-grid x-gap="12" :cols="4" class="mt-3">
      <n-gi v-for="item of pageData" :key="item.id" class="mb-4 cursor-pointer">
        <n-card footer-style="padding:0">
          <template #cover>
            <UiImage :src="item.cover" class="h-[192px]"></UiImage>
          </template>
          <div class="mt-2 truncate">
            <span class="text-lg font-bold w-[100%]">{{ item.title }}</span>
            <div class="flex items-end">
              <UiPrice :value="item.price"></UiPrice>
              <UiPrice :value="item.t_price" through class="ml-2"></UiPrice>
            </div>
          </div>
        </n-card>
      </n-gi>
    </n-grid>
    <!-- 分页区域 -->
    <div class="w-full flex justify-center bg-white py-2 mb-2">
      <n-pagination
        v-model:page="page"
        :item-count="itemCount"
        :on-update:page="updatePage"
      />
    </div>
  </GlobalLoading>
</template>

<script setup>
import { NGrid, NGi, NCard, NPagination } from "naive-ui";
const route = useRoute();
const title = ref(route.query.keywords);
// 设置头部
useHead({
  title: title.value,
});
// middleware 中间件
definePageMeta({
  middleware: ["search"],
});
let { type } = route.params;
const { pageData, itemCount, pending, error, refresh, updatePage, page } =
  await usePage(({ page, limit }) =>
    getSearchList(() => {
      return {
        type,
        page,
        limit,
        keyword: title.value,
      };
    })
  );
// 监听搜索值得变化
const stop = watch(
  () => route.query.keywords,
  async (newValue) => {
    title.value = await newValue;
    await refresh();
  }
);
// 取消监听
onBeforeUnmount(() => {
  stop();
});
</script>

<style lang="scss" scoped></style>
