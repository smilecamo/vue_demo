<template>
<div class="pt-[100px]">
  <n-result
    status="500"
    title="错误"
    :description="error.statusMessage"
  >
    <template #footer>
      <n-button @click="handleError">返回</n-button>
    </template>
  </n-result>
</div>

</template>

<script setup>
import  { NButton,NResult}from 'naive-ui'
// 全局错误处理
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>