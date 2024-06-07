<template>
  <div class="vk-form-item">
    <label for="" class="vk-form-item__label">
      <!-- 作用域插槽 父元素可以使用子元素的值 -->
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="vk-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormItemProps } from './types'
const props = defineProps<FormItemProps>()
defineOptions({
    name:'VkFormItem'
})
</script>

<style scoped></style>
