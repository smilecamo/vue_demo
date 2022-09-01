<template>
  <GlobalLoading :pending="pending" :error="error">
  <template #loading>
    <GlobalCourseLoading></GlobalCourseLoading>
  </template>
  <div>
    <n-breadcrumb>
    <n-breadcrumb-item>
    <NuxtLink to='/'>首页</NuxtLink></n-breadcrumb-item>
    <n-breadcrumb-item>{{$route.meta.title}}</n-breadcrumb-item>
  </n-breadcrumb>
  </div>
    <!-- 内容区域 -->
    <n-grid x-gap="12" :cols="4" class="mt-3">
      <n-gi v-for="item of pageData" :key="item.id" class="mb-4 cursor-pointer">
        <n-card footer-style="padding:0" @click="go(item.id)">
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
import { NGrid, NGi, NCard, NPagination,NBreadcrumb,NBreadcrumbItem } from "naive-ui";
const { pageData, itemCount, pending, error, refresh, updatePage, page } =
  await usePage(({ page }) =>useCourseList(page)
  );
definePageMeta({
  middleware: ["list"]
})
const go = (id) => {
  navigateTo(`/detail/course/${id}`)
}
</script>

<style lang="scss" scoped></style>
