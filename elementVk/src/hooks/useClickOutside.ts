import { onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
const useClickOutside = (
  elementRef: Ref<undefined | HTMLElement>,
  callback: (e: MouseEvent) => void
) => {
  const handle = (e: MouseEvent) => {
    // 如果有值
    if (elementRef.value && e.target) {
      // 并且不包含点击事件
    //   Node.contains(Node) 返回一个boolean ,表示一个节点是否是给定节点的子节点
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e)
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handle)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handle)
  })
}
export default useClickOutside
