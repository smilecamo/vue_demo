<template>
  <i class="vk-icon" :class="{ [`vk-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types.ts'
import { computed } from 'vue'
import { omit } from 'lodash-es'
defineOptions({
  name: 'VkIcon',
  inheritAttrs: false //最常见的需要禁用 attribute 继承的场景就是 attribute 需要应用在根节点以外的其他元素上。通过设置 inheritAttrs 选项为 false，你可以完全控制透传进来的 attribute 被如何使用。
})
const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<style scoped></style>
