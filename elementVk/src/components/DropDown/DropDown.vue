<template>
  <div class="vk-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot></slot>
      <template #content>
        <ul class="vk-dropdown__menu">
          <template v-for="item of menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
            <li
              class="vk-dropdown__item"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <RenderVnode :vnode="item.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import type { DropdownEmits, DropDownProps, MenuOption } from './types'
import RenderVnode from '../../Common/renterVnode'
defineOptions: {
  name: 'VkDropDown'
}
const props = withDefaults(defineProps<DropDownProps>(), { closeAfterClick: true })
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref<TooltipInstance | null>(null)
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOption) => {
  if (e.disabled) return
  emits('select', e)
  if (props.closeAfterClick) {
    tooltipRef.value?.hide()
  }
}
defineExpose({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
})
</script>
<style></style>
