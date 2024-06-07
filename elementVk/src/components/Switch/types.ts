type SwitchValueType = boolean | string | number
export interface ISwitchProps {
  modelValue: SwitchValueType
  size?: 'large' | 'small'
  disabled?: boolean
  activeValue: SwitchValueType //活动的值 后续可以传入值
  inactiveValue: SwitchValueType // 非活动的值
  activeText: string
  inactiveText: string
}
export interface ISwitchEmits {
  (e: 'update:modelValue', value: SwitchValueType): void
  (e: 'change', value: SwitchValueType): void
}
