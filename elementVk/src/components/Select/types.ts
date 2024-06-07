import type { VNode } from 'vue'

export interface OptionsType {
  label: string
  value: string
  disabled?: boolean
}
export interface SelectProps {
  modelValue: string
  placeholder?: string
  disabled?: boolean
  options?: OptionsType[] // 因为可以远程加载所以是必选的
  clearable?: boolean
  renderLabel?: renderLabel
  filter?: boolean
  filterLabelMethod?: FilterLabelMethod
  remote?: boolean
  remoteMethod?: filterRemoteMethod
}
// 自己传入渲染
export type renderLabel = (option: OptionsType) => VNode
// 过滤函数 filter
export type FilterLabelMethod = (searchValue: string) => OptionsType[]
// 远程搜索
export type filterRemoteMethod = (searchValue: string | number) => Promise<OptionsType[]>

export interface SelectStates {
  inputValue: string
  selectOption: null | OptionsType
  hover: boolean
  loading: boolean
  hightLightIndex: number
}
export interface SelectEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
  (e: 'visible-change', value: boolean): void
  (e: 'clear'): void
}
