<template>
  <DropDown :menuOptions="menuOptions" @select="DropDownSelect"
    ><Button> test Button </Button>
  </DropDown>

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
  <!-- <Message message="this is mesage" :duration="0" showClose></Message> -->
  <Input v-model="inputValue" @change="changeInput" />
  <Input placeholder="autofocus" v-model="inputValue" autofocus @change="changeInput" clearable>
    <!-- <template #prepend> http </template>
    <template #append> .com </template>
    <template #suffix> #suffix </template>
    <template #prefix> #prefix </template> -->
  </Input>
  <Input placeholder="showPassword" v-model="inputValue" showPassword @change="changeInput" />
  <Input placeholder="clearable" v-model="inputValue" clearable @change="changeInput" />
</template>

<script setup lang="ts">
import createMessage from './components/Message/method'
import Input from './components/Input/Input.vue'
// import Message from '@/components/Message/Message.vue'
import Button from '@/components/Button/Button.vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import type { TooltipInstance, TriggerType } from '@/components/Tooltip/types'
import DropDown from './components/DropDown/DropDown'
import type { size as sizeType } from '@/components/Icon/types'
import type { Options } from '@popperjs/core'
import { onMounted, ref, h } from 'vue'
import type { MenuOption } from './components/DropDown/types'
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
const menuOptions: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const DropDownSelect = (e: MenuOption) => {
  console.log(e)
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
const inputValue = ref('')
const changeInput = () => {
  console.log(inputValue.value)
}
onMounted(() => {
  // const instance = createMessage({ message: 'this is deno', duration: 0, showClose: true })
  // createMessage({ message: 'this is deno age name', duration: 0, showClose: true })
  // createMessage({ message: 'this is deno age name age name', duration: 0, showClose: true })
  // createMessage({ message: 'this is deno age name age name age name', duration: 0 })
  setTimeout(() => {
    // size.value = '4x'
    // trigger.value = 'hover'
    // instance.onDestory()
  }, 4000)
})
</script>

<style scoped></style>
