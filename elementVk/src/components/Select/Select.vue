<template>
  <div
    class="vk-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
    @mouseenter="state.hover = true"
    @mouseleave="state.hover = false"
  >
    <Tooltip
      manual
      ref="tooltipRef"
      placement="bottom-start"
      @click-outside="controlDropdown(false)"
    >
      <Input
        v-model="state.inputValue"
        :placeholder="computedPlaceholder"
        :disabled="disabled"
        ref="inputRef"
        :readonly="!filter || !isDropdownShow"
        @input="searchDelayForFilter"
        @keydown="handleKeydown"
      >
        <template #suffix>
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            @mouse-down.prevent="() => {}"
            @click.stop="clearHandle"
          ></Icon>
          <Icon
            v-else
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isDropdownShow }"
          ></Icon>
        </template>
      </Input>
      <template #content>
        <div v-if="remote && state.loading">loading....</div>
        <div v-else-if="remote && !state.loading && newFilterOptions.length == 0">no Data</div>
        <ul v-else v-for="(item, index) in newFilterOptions" :key="index" class="vk-select__menu">
          <li
            class="vk-select__menu-item"
            :class="{
              'is-disabled': item.disabled,
              'is-select': state.selectOption?.value === item.value,
              'is-hight-light': state.hightLightIndex == index
            }"
            :id="`select-item-${item.value}`"
            @click.stop="itemSelect(item)"
          >
            <renterVnode :vnode="renderLabel ? renderLabel(item) : item.label"></renterVnode>
          </li>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch } from 'vue'
import type { Ref } from 'vue'
import type { SelectEmits, SelectProps, OptionsType, SelectStates } from './types'
import Input from '../Input/Input.vue'
import Icon from '../Icon/Icon.vue'
import renterVnode from '../../Common/renterVnode'
import type { IInputExpose } from '../Input/types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import { isFunction, debounce } from 'lodash-es'
defineOptions({
  name: 'VkSelect'
})
// 根据传递的options和model查找显示的值
const findOption = (value: string) => {
  const option = props.options.find((item) => {
    return item.value === value
  })
  return option ? option : null
}
const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: '请选择',
  options: () => []
})
const emits = defineEmits<SelectEmits>()
let initialOption = findOption(props.modelValue)
watch(
  () => props.modelValue,
  (newValue) => {
    initialOption = findOption(newValue)
  }
)
// 保存状态值
const state = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectOption: initialOption,
  hover: false,
  loading: false,
  hightLightIndex: -1
})
const isDropdownShow = ref<boolean>() // 打开状态
const tooltipRef = ref<TooltipInstance>()
const inputRef = ref() as Ref<IInputExpose>
// 显示清空按钮
const showClear = computed(() => {
  // 1. hover状态
  // 2. 开启clearable
  // 3. initialOption 有值
  // 4. state.inputValue 不为空
  return state.hover && props.clearable && state.selectOption && state.inputValue.trim() !== ''
})
// 清空操作
const clearHandle = () => {
  state.selectOption = null
  state.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
  emits('visible-change', false) // 触发开启响应
  controlDropdown(false)
}
// 搜索相关
// 1. 开启搜索,输入框变为可以输入
// 2. 如果没有搜索函数,使用默认的string.includes() 有的话就采用
// 3. 数据选项列表根据props.options 生成新的数据缓存下来

let newFilterOptions = ref(props.options)
watch(
  () => props.options,
  (newValue) => {
    newFilterOptions.value = newValue
  }
)
// 根据输入框的值 返回新的options数据
const generatorOption = async (searchValue: string) => {
  if (!props.filter) return
  if (props.filterLabelMethod && isFunction(props.filterLabelMethod)) {
    // 开启了过滤 并且传入了过滤函数
    newFilterOptions.value = props.filterLabelMethod(searchValue)
  } else if (props.remote && isFunction(props.remoteMethod)) {
    // 开启了远程加载 并且传入了远程加载函数
    // 需求：没输入一个值，就发送特定的请求，并且显示状态
    state.hightLightIndex = -1
    state.loading = true
    try {
      newFilterOptions.value = searchValue ? await props.remoteMethod(searchValue) : []
    } catch (error) {
      newFilterOptions.value = []
    } finally {
      state.loading = false
    }
  } else {
    newFilterOptions.value = props.options.filter((v) => {
      return v.label.includes(searchValue)
    })
  }
}

const searchForFilter = () => {
  generatorOption(state.inputValue)
}
// 如果是远程搜索就开启防抖
const delay = computed(() => (props.remote ? 300 : 0))
const searchDelayForFilter = debounce(searchForFilter, delay.value)
// placeholder的值随着选项变化而变化
const computedPlaceholder = computed(() => {
  return props.filter && state.selectOption && isDropdownShow.value
    ? state.selectOption.label
    : props.placeholder
})
// 键盘控制 当input focus状态下可以通过键盘事件进行操作
// 按住enter 可以打开关闭下拉框
// 按住esc 可以打开关闭下拉框
// 按住上下箭头可以切换选项
// 按住空格 可以选中

const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (
        isDropdownShow.value &&
        state.hightLightIndex !== -1 &&
        newFilterOptions.value[state.hightLightIndex]
      ) {
        itemSelect(newFilterOptions.value[state.hightLightIndex])
        controlDropdown(false) // 切换显示
      } else {
        controlDropdown(true)
      }
      break
    case 'Escape':
      controlDropdown(false) // 切换显示
      break
    case 'ArrowUp':
      if (newFilterOptions.value.length > 0) {
        // 向上箭头 如果小于数组的长度 那就-- 如果小于0了，那就是最后一项
        if (state.hightLightIndex == -1 || state.hightLightIndex == 0) {
          state.hightLightIndex = newFilterOptions.value.length - 1
        } else {
          state.hightLightIndex--
        }
      }
      break
    case 'ArrowDown':
      if (newFilterOptions.value.length > 0) {
        if (
          state.hightLightIndex == -1 ||
          state.hightLightIndex === newFilterOptions.value.length - 1
        ) {
          state.hightLightIndex = 0
        } else {
          state.hightLightIndex++
        }
      }
      break
    case 'ArrowDown':
      if (newFilterOptions.value.length > 0) {
      }
      break

    default:
      break
  }
}
const controlDropdown = (show: boolean) => {
  if (show) {
    // 1. filter模式下 之前选择对应的值进行清空 通过 placeholder 进行回显
    if (props.filter && state.selectOption) {
      state.inputValue = ''
    }
    // 进行选项的生成 也就是重新生成
    if (props.filter) {
      generatorOption(state.inputValue)
    }
    tooltipRef.value?.show()
  } else {
    // 因为前面1.清空了input 所以隐藏的时候 placeholder会不显示同时input也是空 所以要把值给input
    if (props.filter) {
      state.inputValue = state.selectOption ? state.selectOption.label : ''
    }
    tooltipRef.value?.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show) // 触发开启响应
}
const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
const itemSelect = (item: OptionsType) => {
  if (item.disabled) return
  state.inputValue = item.label
  state.selectOption = item
  emits('update:modelValue', item.value)
  emits('change', item.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
  state.hightLightIndex = -1
}
</script>

<style scoped></style>
