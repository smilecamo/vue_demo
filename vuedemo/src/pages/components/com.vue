<template>
<div>
  <button v-bind="$attrs">div+btn</button>
</div>
  <button>btn1</button>
  <!-- v-bind="$attrs" 多节点的透传  -->
  <button @click="changeInput">btn2</button>
  props: {{names}}
  <input :value="modelValue" @input="$emit('update:modelValue',($event.target as HTMLTextAreaElement).value)" />
  <slot name="header" :text="slotName" :count="20" :counts="120"></slot>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const slotName = ref('name')
const props = defineProps({
  names:{
    type:String,
    default:'default'
  },
  modelValue:{
    type:String,
    default:'default'
  }
})
// const emit = defineEmits({
//   // '$emit('change-input',1)'
//   changeInput(payload){
//     return payload
//   },
// })
defineEmits(['update:modelValue'])
function changeInput () {
  // emit('changeInput',101)
}
console.log(props);
</script>

<style scoped>

</style>