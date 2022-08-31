<template>
  <div>
    <teleport to="body">
      <!-- 蒙版 -->
      <Transition name="popup">
        <div
          v-if="modelValue"
          class="w-screen h-screen bg-zinc-900/80 fixed top-0 left-0 z-40"
          @click="emits('update:modelValue', false)"
        ></div>
      </Transition>
      <!-- 内容 -->
      <Transition name="popup-content">
        <div
          v-if="modelValue"
          v-bind="$attrs"
          class="!bg-white w-screen max-h-[80%] fixed bottom-0 z-50 rounded-t overflow-y-scroll"
        >
          <slot></slot>
        </div>
      </Transition>
    </teleport>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'
import { useScrollLock } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Boolean,
    require: true
  }
})
const emits = defineEmits(['update:modelValue'])
// 锁定背景
const isLocked = useScrollLock(document.body)
watchEffect(() => (isLocked.value = props.modelValue))
</script>

<style lang="scss" scoped>
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
.popup-content-enter-active,
.popup-content-leave-active {
  transition: all 0.3s;
}
.popup-content-enter-form,
.popup-content-leave-to {
  transform: translateY(100%);
}
</style>
