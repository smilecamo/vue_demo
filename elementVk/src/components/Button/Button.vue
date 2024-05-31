<template>
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`'vk-button--${type}'`]: type,
      [`'vk-button--${size}'`]: size,
      'is-plan': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    
  >
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon v-if="icon" :icon="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types.ts'
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'VKButtons'
})
// withDefaults 用来给使用类型声明时的默认 props 值 defineProps<{}>
// PropType 用于在用运行时 props 声明时给一个 prop 标注更复杂的类型定义。
// import type { PropType } from 'vue'
// defineProps({
//     type: Array as PropType<>
// })
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>

<style scoped></style>
