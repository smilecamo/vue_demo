<template>
  <div
    class="vk-switch"
    :class="{
      [`vk-switch-${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked
    }"
    @click="handleClick"
  >
    <input class="vk-switch-input" type="checkbox" @keydown.enter="handleClick" ref="inputRef" />
    <div class="vk-switch__core">
      <div class="vk-switch__core-inner" v-if="activeText || inactiveText">
        <span class="vk-switch__core-inner-text">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="vk-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import type { ISwitchEmits, ISwitchProps } from './types'
defineOptions({
  name: 'VkSwitch',
  inheritAttrs: false
})
const props = withDefaults(defineProps<ISwitchProps>(), {
  activeValue: true,
  inactiveValue: false
})

const emits = defineEmits<ISwitchEmits>()
// 初始值
const initValue = ref(props.modelValue)
// 是否选中 根据传递得的选中值和现有值对比
const checked = computed(() => initValue.value === props.activeValue)
const handleClick = () => {
  if (props.disabled) return

  const newValue = !checked.value ? props.activeValue : props.inactiveValue
  initValue.value = newValue
  emits('change', newValue)
  emits('update:modelValue', newValue)
}
// 原生的 input Checkbox
const inputRef = ref<HTMLInputElement>()
// 初始化的时候和switch一致
onMounted(() => {
  inputRef.value!.checked = checked.value
})
watch(checked, (value) => {
  inputRef.value!.checked = value
})
watch(
  () => props.modelValue,
  (NewValue) => {
    initValue.value = NewValue
  }
)
</script>
