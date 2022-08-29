<template>
  <div>
    <UiCard>
    <UiCardHeader class="flex justify-between">
    <span>订单时间：{{item.created_time}}</span>
    <span>订单号：{{item.no}}</span>
    </UiCardHeader>
    <UiCardBody>
      {{item.goods}}
    </UiCardBody>
    <UiCardFooter class="flex">
      <span v-if="item.type !== 'default'" class="mr-2">[{{type[item.type]}}]</span>
      <UiPrice :value="item.price" through></UiPrice>
      <span class="ml-auto" :class="{'text-green-600':(item.status === 'success')}">{{status[item.status]}}</span>
      <n-button v-if="item.status === 'pendding'" type="primary" size="small" @click="pay" class="ml-2">去支付</n-button>
    </UiCardFooter>
    </UiCard>
  </div>
</template>

<script setup>
import {NButton} from 'naive-ui'
const props = defineProps({
  item:{
    type:Object
  }
})
const type = {
  'flashsale':'秒杀',
  group:'拼团',
}
const status = {
  'pendding':'支付中...',
  success:'支付成功',
  "closed":'已关闭',
}
const pay= () => {
  navigateTo(`/pay?no=${props.item.no}`)
}
</script>

<style lang="scss" scoped>

</style>