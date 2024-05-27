<template>
  <Tooltip content="this is content" manual ref="toolTipRef" :popperOptions="popperOptions"
    ><Button> test Button </Button></Tooltip
  >

  <Button type="success" loading @click="showToolTip"> test Button </Button>
  <Button type="success" @click="showToolTip"> test Button </Button>
  <Button type="warning" icon="user" @click="hideToolTip"> test Button </Button>
  <Collapse v-model="activeNames">
    <CollapseItem name="1" title="手风琴1">
      <div>11233333</div>
    </CollapseItem>
    <CollapseItem name="2" title="手风琴2">
      <div>2222222222</div>
    </CollapseItem>
    <CollapseItem name="3" title="手风琴3">
      <div>333333333333</div>
    </CollapseItem>
  </Collapse>
  <Tooltip content="this is content" :trigger="trigger">
    <Icon icon="user" :size="size" @click="handleClick" type="success"></Icon>
  </Tooltip>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import type { TooltipInstance, TriggerType } from '@/components/Tooltip/types'
import type { size as sizeType } from '@/components/Icon/types'
import type { Options } from '@popperjs/core'
import { onMounted, ref } from 'vue'
const activeNames = ref(['1'])
const toolTipRef = ref<TooltipInstance | null>(null)
const showToolTip = () => {
  toolTipRef.value?.show()
}
const hideToolTip = () => {
  toolTipRef.value?.hide()
}
const handleClick = () => {
  console.log('handleClick')
}
let size = ref<sizeType>('2x')
let trigger = ref<TriggerType>('click')
const popperOptions = ref<Partial<Options>>({
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9]
      }
    }
  ]
})
onMounted(() => {
  setTimeout(() => {
    size.value = '4x'
    trigger.value = 'hover'
  }, 4000)
})
</script>

<style scoped></style>
