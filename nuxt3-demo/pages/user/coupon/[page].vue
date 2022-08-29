<template>
  <div class="p-2">
      <GlobalLoading :pending="pending" :error="error" :empty="pageData.length==0">
    <!-- 内容区域 -->
    <n-grid :x-gap="12" :cols="2">
      <n-grid-item v-for="(item,index) of pageData" :key="item.id" >
        <UserCouponList :item="item"></UserCouponList>
      </n-grid-item>
    </n-grid>
    
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
import {  NPagination,NGrid,NGridItem } from "naive-ui";
// 设置头部
useHead({
  title: '优惠卷记录',
});
const { pageData, itemCount, pending, error, refresh, page,updatePage } =
  await usePage(({ page }) =>
  useUserCouponList(page)
  );
</script>

<style lang="scss" scoped></style>
