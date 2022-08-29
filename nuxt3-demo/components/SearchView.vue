<template>
  <div>
    <n-drawer v-model:show="active"  placement="top">
      <div class="w-screen h-full flex items-center justify-center">
      <n-input-group class="flex items-center justify-center">
      <n-input :value="keywords" :style="{ width: '500px' }" placeholder="请输入搜索内容" :on-input="onInput" @keydown="keydown"/>
      <n-button type="primary" ghost :disabled="keywords === ''" @click="search">
        搜索
      </n-button>
    </n-input-group>
      </div>
    </n-drawer>
  </div>
</template>

<script setup>
import {NDrawer,NInput,NInputGroup,NButton} from 'naive-ui'
// 搜索框的展示状态
const active = ref(false)
const open = () => {
  active.value = true
}
const close = () => {
  active.value = false
}
// 搜索词
const keywords = ref('')
// 输入框的值
const onInput = e =>{
  keywords.value = e
}
const search = () => {
  if(keywords.value !== ''){
    setTimeout(() => {
      close()
    }, 100);
    return navigateTo({
      name:'search-type-page',
      params:{
        type:'course',
        page:1
      },
      query:{
        keywords:keywords.value
      }
    })
  }
}
const keydown = (e) => {
  if(e.key === 'Enter'){
    search()
  }
}
defineExpose({
  open,
  close
})
</script>

<style lang="scss" scoped>

</style>