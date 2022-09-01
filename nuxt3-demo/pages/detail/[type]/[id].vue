<template>
  <div>
    <GlobalLoading :pending="pending" :error="error">
      <div class="flex bg-white rounded p-3">
      <div class=" bg-gray-50" style="width: 350px;height:196px">
        <UiImage :src="data.cover" class="w-full rounded"></UiImage>
      </div>
        <div class="flex flex-col ml-6">
          <div class="text-xl flex items-center">
            {{ title }}
            <FavaBtn class="ml-2"  :fava="data.isfava" :id="data.id" type="course"></FavaBtn>
          </div>
          <div class="text-sm text-zinc-400 py-2">{{subTitle}}</div>
          <div class="flex items-center" v-if="!data.isbuy">
            <UiPrice :value="data.price"></UiPrice>
            <UiPrice :value="data.t_price" through class="ml-1"></UiPrice>
          </div>
          <div class="mt-3 mb-4" >
            <n-tag type="warning" size="small">领取优惠卷</n-tag>
          </div>
          <div v-if="!data.isbuy">
            <n-button type="primary" @click="learn">立即学习</n-button>
          </div>
        </div>
      </div>
      <n-grid class="mt-4 " x-gap="20" >
       <n-gi :span="18" class="bg-white px-4 rounded">
        <div v-html="(data.type==='media' && data.isbuy)?data.content: data.try"></div>
        </n-gi>
       <n-gi :span="6">
        <HotCourseList :data="hotData"></HotCourseList>
       </n-gi>
      </n-grid>

    </GlobalLoading>
  </div>
</template>

<script setup>
import { NTag, NButton,NGi,NGrid } from "naive-ui";
const route = useRoute();
const { type, id } = route.params;
// 详情数据
const { data, pending, error,refresh} = await useCourseRead({ id });
const title = computed(() => {
  return !pending.value ? data.value.title : "请求中。。。";
});
const subTitleType = {
  media:"图文",
  video:'视频',
  audio:'音频'
}
const subTitle = computed(() => {
  const t = subTitleType[data.value.type]
  return type == 'course' ? `【${t}】 ${data.value.sub_count}人学过` :`${data.value.sub_count}人学过`
});
useHead({ title });
// 推荐数据
const {data:hotData,error:hotError} =  await useHotList()

// 立即学习
// useOrderLearn 
const learn = async () => {
  useHasAuth(async () => {
    const learnBodyData = {type,goods_id:id}
      if(+data.value.price === 0){
        const {data:learnData,error:learnError} = await useOrderLearn(learnBodyData)
        if(learnError.value) return
        refresh()
      }
  })

}
</script>

<style lang="scss" scoped></style>
