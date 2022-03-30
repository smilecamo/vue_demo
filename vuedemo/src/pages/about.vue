<template>
  {{ demoStore.name }}
  <Com class="name" @click="comClick" :names="propsDate" 
  @change-input.once="(n:any) => propsDate += n"
  v-model="searchValue"
  #header="{text:slotText,count:slotCount,counts}"
  >
  {{slotText}}-{{slotCount}}-{{counts}}
  </Com>
  <input type="text" v-model="propsDate" />
</template>

<script setup lang="ts">
import Com from './components/com.vue'
import { ref, watch } from "vue";
import { useDemoStore } from "../store/demo";
const demoStore = useDemoStore();
var ws = new WebSocket("ws://localhost:8080");
const data = ref(0);
ws.onopen = function (mevt) {
  console.log("客户端已连接");
  ws.send('aaa')
};
ws.onmessage = function (mevt) {
  data.value = mevt.data;
  console.log("客户端收到消息: " + mevt.data);
  // ws.close()
};

ws.onclose = function (mevt) {
  console.log("连接关闭", mevt);
};
ws.onerror = function (error) {
  console.log(`[error] ${error}`);
};


// v-bind 绑定颜色 和 透传 
const colors = ref('red')
const comClick = () => {
  colors.value = colors.value === 'green' ? 'red' : 'green'
}

const propsDate = ref('1')

const searchValue = ref('')
watch(searchValue,(newValue,oldValue)=>{
  console.log(newValue,oldValue);
})
</script>

<style>
.name {
  color: v-bind(colors);
}
</style>
