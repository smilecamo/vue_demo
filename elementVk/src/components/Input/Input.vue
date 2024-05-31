<template>
  <!-- $slots 
        $slots.header 就是具名的插槽
        有时你需要根据插槽是否存在来渲染某些内容。
        suffix 后缀 prefix 前缀
    -->
  <div
    class="vk-input"
    :class="{
      [`vk-input--${type}`]: type,
      [`vk-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus
    }"
  >
    <!-- input 区域-->
    <template v-if="type !== 'textarea'">
      <!-- 前置区域 -->
      <div v-if="$slots.prepend" class="vk-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <!-- input区域 -->
      <div class="vk-input__wrapper">
        <!-- 前缀区域 -->
        <span v-if="$slots.prefix" class="vk-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <!-- 真实输入框位置 -->
        <input
          class="vk-input__inner"
          :type="showPassword ? (!passwordVisible ? 'password' : 'text') : type"
          ref="inputRef"
          :disabled="disabled"
          :placeholder="placeholder"
          :autofocus="autofocus"
          v-model="innerValue"
          @change="handleChange"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <!-- 后置区域 -->
        <span v-if="$slots.suffix" class="vk-input__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
      <!-- 后置区域 -->
      <div v-if="$slots.append" class="vk-input__append">
        <slot name="append"> </slot>
      </div>
    </template>
    <!-- textarea 区域 -->
    <template v-else></template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { IInputProps, IInputExpose, IInputEmits } from './types'
const props = withDefaults(defineProps<IInputProps>(), {})
const emits = defineEmits<IInputEmits>()
const inputRef = ref<HTMLInputElement | null>(null)
const innerValue = ref(props.modelValue)
const passwordVisible = computed(() => props.showPassword)

const handleChange = () => {
  emits('change', innerValue.value)
}
// 输入框输入事件
const handleInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
}
// 焦点
const isFocus = ref(false)
// 鼠标获取焦点
const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}
// 鼠标失去焦点
const handleBlur = (event: FocusEvent) => {
  isFocus.value = false
  emits('blur', event)
}
</script>

<style scoped></style>
