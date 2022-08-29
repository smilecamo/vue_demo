<template>
<UiCard v-for="item of data" :key="item.id">
<UiCardHeader>
    <div class="text-gray-600 text-sm pb-2  px-2">学习进度</div>
     <n-progress
     class="px-2 pb-2"
        type="line"
        :show-indicator="false"
        :percentage="item.progress"
      />
</UiCardHeader>
<UiCardBody>
      <div class="flex">
        <n-tag size="small" class="bg-gray-100" v-if="item.type">{{type[item.type]}}</n-tag>
        <span class="ml-3">{{item.title}}</span>
        <n-button size="tiny" type="primary" class="ml-auto">继续观看</n-button>
      </div>
</UiCardBody>
</UiCard>
  <!-- <div >

      <div class="flex mt-2 items-center bg-white py-3  px-2">
        <n-tag size="small" class="bg-gray-100" v-if="item.type">{{type[item.type]}}</n-tag>
        <span class="ml-3">{{item.title}}</span>
        <n-button size="tiny" type="primary" class="ml-auto">继续观看</n-button>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script setup>
import {NProgress, NTag,NButton} from 'naive-ui'
const props = defineProps({
  data:{
    type:Array
  }
})
const type = {
  audio:'音频',
  video:'视频',
  media:'视频',
  column:'专栏',
  book:'电子书',
}
</script>

<style lang="scss" scoped>

</style>