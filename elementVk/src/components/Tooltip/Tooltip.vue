<template>
  <div class="vk-tooltip" v-on="outEvents" ref="toolTipContainer">
    <!-- 触发区域 -->
    <div class="vk-tooltip__trigger" v-on="events" ref="triggerNode">
      <slot />
    </div>
    <!-- 内容区域 -->
    <Transition :name="transition">
      <div class="vk-tooltip__popper" v-if="isOpen" ref="popperNode">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, computed } from 'vue'
import { debounce } from 'lodash-es'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types.ts'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import useClickOutside from '@/hooks/useClickOutside.js'
defineOptions({
  name: 'VkToolTip'
})
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'click',
  transition: 'fade',
  openDelay: 1000,
  closeDelay: 1000
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref<boolean>(false)

// 触发事件
let events: Record<string, any> = reactive({})
let outEvents: Record<string, any> = reactive({})
const openNumber = ref(0)
const open = () => {
  openNumber.value++
  console.log('openNumber:', openNumber.value)
  isOpen.value = true
  emits('visible-change', true)
}
const closeNumber = ref(0)
const close = () => {
  closeNumber.value++
  console.log('closeNumber:', closeNumber.value)
  isOpen.value = false
  emits('visible-change', false)
}
const openDebounce = debounce(open, props.openDelay) // 延迟触发 并且经过 debounce
const closeDebounce = debounce(close, props.closeDelay)
const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}
const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}
const changeOpen = () => {
  if (isOpen.value) {
    closeFinal()
  } else {
    openFinal()
  }
}
// 根据传值绑定事件
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal
    outEvents['mouseleave'] = closeFinal
  } else if (props.trigger === 'click') {
    events['click'] = changeOpen
  }
}
// 如果没有手动触发事件
if (!props.manual) {
  attachEvents() // 那就绑定事件
}
// 监听外部的手动事件,并且暴露出能控制组件显示隐藏的事件
watch(
  () => props.manual,
  (newManual) => {
    // 如果是绑定了后续的手动事件，需要清空所有的事件
    if (newManual) {
      events = {}
      outEvents = {}
    } else {
      attachEvents() // 那就绑定事件
    }
  }
)
// 监听外部事件的变化
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {}
      outEvents = {}
      attachEvents()
    }
  }
)

const popperNode = ref<HTMLElement>() // 弹出区域
const triggerNode = ref<HTMLElement>()
const toolTipContainer = ref<HTMLElement>() // 整个tooltip区域
useClickOutside(toolTipContainer, () => {
  // 如果为点击触发，并且是开启状态，以及外部没有绑定手动事件
  if (props.trigger == 'click' && isOpen.value && !props.manual) {
    closeFinal()
  }
})
let popperInstance: null | Instance = null

const popperOptions = computed(() => {
  return {
    placements: props.placement, // 方向
    ...props.popperOptions
  }
})

watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (popperNode.value && triggerNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
      } else {
        popperInstance?.destroy()
      }
    }
  },
  {
    flush: 'post'
  }
)
// 暴漏给外部使用 通过ref可以调用
defineExpose<TooltipInstance>({
  show: openFinal,
  hide: closeFinal
})
</script>

<style scoped></style>
