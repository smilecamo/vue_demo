import { onMounted, onUnmounted, isRef, watch, unref } from 'vue'
import type { Ref } from 'vue'
/**
 *
 * @param target 目标元素 可以是vue中通过ref绑定的也可以是原生的dom
 * @param event 事件名
 * @param handler 事件
 */
const useEventListener = (
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => void
) => {
  // isRef 判断值 是不是 ref
  //   unref  如果参数是 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val 计算的一个语法糖。
  if (isRef(target)) {
    watch(target, (newTarget, oldTarget) => {
      oldTarget?.removeEventListener(event, handler)
      newTarget?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler)
    })
  }
  // target.addEventListener(event, handler)
  onUnmounted(() => {
    unref(target)?.removeEventListener(event, handler)
  })
}
export default useEventListener
