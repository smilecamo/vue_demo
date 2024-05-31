import type { ComponentInternalInstance, VNode } from 'vue'
export interface IMessageProps {
  message?: string | VNode
  type?: 'success' | 'info'
  duration?: number
  showClose?: boolean
  id: string
  onDestory: () => void
  offset?: number
  zIndex?: number
  transitionName?: string
}

export type CreateMessageProps = Omit<IMessageProps, 'onDestory' | 'id'>

export interface MessageContext {
  id: string
  vnode: VNode
  vm: ComponentInternalInstance
  props: IMessageProps
  onDestory: () => void
}
