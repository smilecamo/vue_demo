import type { VNode } from 'vue'
import type { TooltipProps } from '../Tooltip/types'
export interface DropDownProps extends TooltipProps {
  menuOptions: MenuOption[]
  closeAfterClick?: boolean
}
export interface MenuOption {
  key: string | number
  label: string | VNode
  disabled?: boolean
  divided?: boolean // 分开的 原型
}

export interface DropdownEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'select', value: MenuOption): void
}
export interface DropdownInstance {
  show: () => void
  hide: () => void
}
