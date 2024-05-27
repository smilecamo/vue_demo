// provide 和 inject 通常会在不同的组件中运行。要正确地为注入的值标记类型，Vue 提供了一个 InjectionKey 接口，它是一个继承自 Symbol 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型：
// import { provide, inject } from 'vue'
// import type { InjectionKey } from 'vue'

// const key = Symbol() as InjectionKey<string>

// provide(key, 'foo') // 若提供的是非字符串值会导致错误

// const foo = inject(key) // foo 的类型：string | undefined
import type { Ref, InjectionKey } from 'vue'
export type NameType = string | number
// 手风琴父级元素
export interface CollapseProps {
  modelValue: NameType[]
  accordion?: boolean
}
export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}
// 手风琴中的内容区域
export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}
// 组件的点击事件
export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void
  (e: 'change', values: NameType[]): void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
