<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
    ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 汉堡按钮  -->
      <li
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white shadow-l-white"
        @click="handlePopup"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!-- 滑块 -->
      <li
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
        :style="style"
      ></li>
      <!-- items -->
      <li
        :ref="liRefFun"
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{'text-white' : index === currentLi}"
        @click="handleCLickLi(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="showPopup">
      <menu-content :data="data" @handleCLickLi="handleCLickLi"></menu-content>
    </m-popup>
  </div>
</template>

<script setup>
  import {ref,onBeforeUpdate} from 'vue'
  import {useScroll} from '@vueuse/core'
  import MenuContent from '../../menu/index.vue'
defineProps({
  data: {
    type: Array,
    required: true
  }
})

/**
 * 滑块跟随li的实现
 * 1. 设置滑块的滚动X距离和宽度
 * 2. 获取到ul的滚动距离x
 *  获取到点击的哪一个li
 *  获取到当前li的宽度（滑块的宽度）和left值（滚动的距离）
 *  设置滑块的宽度（li的宽度） 滚动距离（ul的滚动距离+ li的left+ul的padding-left）
 */

// 设置滑块的滚动距离和宽度
let style = ref({
  transform: 'translateX(0)',
  width:'52px'
})
// 获取到ul的滚动距离
let ulTarget = ref(null)
// 响应数据
const { x:ulTargetLeft } = useScroll(ulTarget)
let liRefArr = []
// 动态获取ref :ref="fun"
const liRefFun = (el)=>{
  if(el){
    liRefArr.push(el)
  }
}
// 点击项的索引
const currentLi = ref(0)
// 获取到li的点击index
const handleCLickLi = (val) => {
  showPopup.value = false
  currentLi.value = val
  // getBoundingClientRect 其提供了元素的大小及其相对于视口的位置。
  let rect = liRefArr[val].getBoundingClientRect();
  const {left,width} = rect
  console.log(ulTargetLeft.value);
  style.value = {
    width:width+'px',
    transform:`translateX(calc(${ulTargetLeft.value + left -10}px))`
  }

}
// 为了避免多次重复添加，数组 liRefArr 进行清空操作,onBeforeUpdate 数据发生变化后，dom变化前
onBeforeUpdate(() => {
  liRefArr = []
})

// showPopup
const showPopup = ref(false)
const handlePopup = () => {
  showPopup.value = true
}
</script>

<style lang="scss" scoped></style>
