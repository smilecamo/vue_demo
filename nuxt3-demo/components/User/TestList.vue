<template>
  <div>
    <UiCard>
    <UiCardHeader class="flex justify-between">
    <span>{{item?.testpaper?.title}}</span>
    <span :class="item.answer_status ==1 ? 'text-green-500':'text-red-600'">
    {{answer_status[item.answer_status]}}
    </span>
    </UiCardHeader>
    <UiCardBody>
    <span>题目总数：{{item.testpaper.question_count}}</span>
    <span class="px-2">总分数：{{item.testpaper.total_score}}</span>
    <span>及格分：{{item.testpaper.pass_score}}</span>
    </UiCardBody>
    <UiCardFooter class="flex">
      {{item.created_time}}
      <span class="ml-auto">
      最终得分：<span :class="item.read_status != 0 ? 'text-green-500':'text-red-600'">{{item.score === 0 ? '正在阅卷' : item.score}}</span>
      </span>
    </UiCardFooter>
    </UiCard>
  </div>
</template>

<script setup>
const props = defineProps({
  item:{
    type:Object
  }
})
const answer_status = {
  1:'考试完成',
  0:'考试中'
}
</script>

<style lang="scss" scoped>

</style>