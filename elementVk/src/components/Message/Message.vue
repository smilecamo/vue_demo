<template>
  <Transition :name="transitionName" @after-leave="destroyComponent" @enter="updateHeight">
    <div
      class="vk-message"
      :class="{ [`vk-message-${type}`]: type, 'is-close': showClose }"
      v-show="visible"
      ref="messageRef"
      :style="cssStyle"
    >
      <div class="vk-message__content">
        <slot>
          <renderVnode :vnode="message" v-if="message"></renderVnode>
        </slot>
      </div>
      <div class="vk-message__close" v-if="showClose">
        <Icon icon="xmark" @click.stop="closeMessage"></Icon>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { IMessageProps } from './types'
import renderVnode from '../../Common/renterVnode'
import Icon from '../Icon/Icon.vue'
import { getLastBottomOffset } from './method'
import useEventListener from '../../hooks/useEventListener'
import { onMounted, onUnmounted, ref, watch, computed, nextTick } from 'vue'
const props = withDefaults(defineProps<IMessageProps>(), {
  type: 'success',
  duration: 3000,
  offset: 20,
  transitionName: 'fade'
})
const visible = ref(false)
let timer: any
const startTime = () => {
  if (!props.duration) return
  timer = setTimeout(() => {
    visible.value = false
    props.onDestory()
  }, props.duration)
}
const closeMessage = () => {
  visible.value = false
}
// watch(visible, (newValue) => {
//   if (!newValue) props.onDestory()
// })
// ------- 计算偏移量
const messageRef = ref<HTMLDivElement | null>(null) // message 的元素
const height = ref(0) // 这个message元素的高
const lastOffset = computed(() => getLastBottomOffset(props.id))
const topOffset = computed(() => props.offset + lastOffset.value) // 当前元素的偏移
const bottomOffset = computed(() => height.value + topOffset.value) // 当前元素的偏移量+本身的高度 也就是下一个元素的偏移量
const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex
}))

// 键盘事件监听
function keyDown(e: Event) {
  const event = e as KeyboardEvent
  if (event.code === 'Escape') {
    visible.value = false
  }
}

useEventListener(document, 'keydown', keyDown)
onMounted(async () => {
  visible.value = true
  startTime()
  await nextTick()
  //   获取到元素的尺寸信息 getBoundingClientRect
  // height.value = messageRef.value!.getBoundingClientRect().height
})
// 动画移除的时候
function destroyComponent() {
  props.onDestory()
}
// transition 执行完毕
function updateHeight() {
  //   获取到元素的尺寸信息 getBoundingClientRect
  height.value = messageRef.value!.getBoundingClientRect().height
}
onUnmounted(() => {
  clearTimeout(timer)
})
defineExpose({
  bottomOffset,
  visible
})
</script>

<style scoped></style>
