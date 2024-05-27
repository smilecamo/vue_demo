<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: 'VkCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
// 选中的项
const activeNames = ref<NameType[]>(props.modelValue)
// 如果父组件的model变化触发
watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  }
)
if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one acitve item')
}
const handleItemClick = (item: NameType) => {
  let _activaName = [...activeNames.value]
  // 如果是手风琴效果
  if (props.accordion) {
    _activaName = [activeNames.value[0] === item ? '' : item]
    activeNames.value = _activaName
  } else {
    const index = _activaName.indexOf(item)
    if (index > -1) {
      _activaName.splice(index, 1)
    } else {
      _activaName.push(item)
    }
    activeNames.value = _activaName
  }
  emits('update:modelValue', _activaName)
  emits('change', _activaName)
}
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped></style>
