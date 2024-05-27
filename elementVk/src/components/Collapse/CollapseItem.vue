<template>
  <div class="vk-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      class="vk-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle"></Icon>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="vk-collapse-item__wrapper" v-show="isActive">
        <div class="vk-collapse-item__content" :id="`item-header-${name}`"><slot /></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { CollapseItemProps } from './types'
import { collapseContextKey } from './types'
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}
// Record<K, T> 是一个实用类型，用于表示具有特定键和值类型的对象。
// 假设你有一个更复杂的 Record，其中键是字符串，值是一个包含多个属性的对象。
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  // 在元素被插入到 DOM 之前被调用
  // 用这个来设置元素的 "enter-from" 状态
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  // // 在元素被插入到 DOM 之后的下一帧被调用
  // 用这个来开始进入动画
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
  },
  // 在 leave 钩子之前调用
  // 大多数时候，你应该只会用到 leave 钩子
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  // 在离开过渡开始时调用
  // 用这个来开始离开动画
  leave(el) {
    el.style.height = '0px'
  },
  // 在离开过渡完成、
  // 且元素已从 DOM 中移除时调用
  afterLeave(el) {
    el.style.height = ''
  }
}
</script>

<style scoped></style>
