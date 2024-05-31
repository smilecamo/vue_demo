import { h, render, shallowReactive } from 'vue'
import type { CreateMessageProps, MessageContext } from './types'
import MessageContainer from './Message.vue'
import useZIndex from '../../hooks/useZIndex'
let seed = 1
// shallowRef()​ ref() 的浅层作用形式。
// 和 ref() 不同，浅层 ref 的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。只有对 .value 的访问是响应式的。
// shallowRef() 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成。
const instances: MessageContext[] = shallowReactive([]) // message 的集合
const createMessage = (props: CreateMessageProps) => {
  const container = document.createElement('div')
  const { nextZIndex } = useZIndex()
  const id = `message_${seed++}`
  //   删除弹出message
  const onDestory = () => {
    // 根据id找到这个元素 从保存的数组中删除，重新计算高度偏移量
    const idx = instances.findIndex((item) => item.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    // 重新render null 可以在页面中删除
    render(null, container)
  }
  // 手动调用删除，其实就是手动的调整组件中 visible 的值
  // visible 是通过 expose 传出来的
  const manualDestroy = () => {
    const instance = instances.find((item) => item.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false // vm.exposed.xxx=xxx 可以修改组件暴漏的值
    }
  }
  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestory: onDestory
  }
  const vnode = h(MessageContainer, newProps)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)
  const vm = vnode.component!
  //  把当前元素追加进去为了后续可以获取到上个元素的offset
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    onDestory: manualDestroy
  }
  instances.push(instance) // message 的集合中添加数据
  return instance
}
// 获取到最后一个元素的offset 根据当前id 的上一个值
export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((item) => item.id === id) // 获取道符合的索引
  if (idx <= 0) {
    return 0
  } else {
    const prev = instances[idx - 1] // 获取上一个的值
    return prev.vm.exposed!.bottomOffset.value // vm.exposed! 可以获取到vue组件返回暴漏的信息
  }
}
export default createMessage
