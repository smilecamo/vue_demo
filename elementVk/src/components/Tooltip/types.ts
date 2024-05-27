import type { Placement, Options } from '@popperjs/core'
export type TriggerType = 'hover' | 'click' // 触发
export interface TooltipProps {
  content?: string
  trigger?: TriggerType
  placement?: Placement //放置
  manual?: boolean // 手动
  popperOptions?: Partial<Options> //Partial
  transition?: string
  openDelay?: number
  closeDelay?: number
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'click-outside', value: boolean): void
}

export interface TooltipInstance {
  show: () => void
  hide: () => void
}
