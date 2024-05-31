export interface IInputProps {
  type?: string
  modelValue: string
  size?: 'large' | 'small'
  disabled?: boolean
  clearable?: boolean
  showPassword?: boolean
  placeholder?: string
  autofocus?: boolean
  readonly?: boolean
  autocomplete?: string
}
export interface IInputEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
  (e: 'blur', value: FocusEvent): void
  (e: 'input', value: string): void
  (e: 'focus', value: FocusEvent): void
  (e: 'clear'): void
}
export interface IInputExpose {
  ref: HTMLInputElement | HTMLAreaElement
}
