<template>
  <div class="p-2">
      <GlobalLoading :pending="pending" :error="error" :empty="pageData.length==0">
    <!-- 内容区域 -->
    <UserFavaList v-for="(item,index) of pageData" :key="item.id" :item="item" @handleUnFava="handleUnFava"></UserFavaList>
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
  title: '我的收藏',
});
const { pageData, itemCount, pending, error, refresh, page,updatePage } =
  await usePage(({ page }) =>
  useUserFavaList(page)
  );

  // 取消收藏
const handleUnFava = async ({id,type,success,fail}) =>{
  const {error} = await useUserUnCollect({goods_id:id,type})
  if(error.value){
    fail()
  }else{
    success()
    refresh()
    
  }
}
</script>

<style lang="scss" scoped></style>
