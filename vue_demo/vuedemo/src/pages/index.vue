<template>
  <div>
    index
    <router-link to="about">go about</router-link>
    <router-link to="demo">go demo</router-link>
    <router-link to="filter">go filter</router-link>
    <p><button @click="reset">reset</button>{{ demoStore.name }}</p>
    <p><button @click="change">change</button>{{ demoStore.name }}</p>
    <p>
      <button @click="changeNumber">改变storeNumber</button
      >{{ demoStore.number }}----{{ demoStore.doubleNumber }}
    </p>
    <p><button>storeNumber 传值</button>{{ demoStore.doubleNumbers(2) }}</p>
    <p><button @click="actionClick">action改变传值</button>{{ demoStore }}</p>
    <h4>watch&watchEffect</h4>
    <p>
      Xref:<input v-model="x" type="number"/>
      <br/>
      Yref:<input v-model="y" type="number"/>
      <br/>
      <p id="demo">{{y}}</p>
      PeopleReactive:<input v-model="people.name" /><input v-model="people.age" type="number"/><br/>
    </p>
    <h4>computed</h4>
    <p>{{authorBooksMessage}}</p>
  </div>
</template>

<script setup lang="ts">
import { useNow, useActiveElement, useTimeout } from "@vueuse/core";
import { useDemoStore } from "../store/demo";
import { watch,ref,reactive, watchEffect,computed } from "vue";
const demoStore = useDemoStore();
const reset = () => {
  demoStore.$reset();
};
const change = () => {
  demoStore.name = "lisi";
};
const changeNumber = () => {
  demoStore.number += 1;
};
const actionClick = () => {
  demoStore.changeName(Math.random() + "");
};

setTimeout(() => {
  actionClick();
}, 2000);

const now = useNow();
console.log(now.value);
const ready = useTimeout(1000);
console.log(ready.value);
const activeElement = useActiveElement();

watch(activeElement, (el) => {
  console.log("focus changed to", el);
});



// watch 懒执行 只有在监听源变化的时候，才会执行回调
const x = ref(0)
const y = ref(0)
const people = reactive({name:'hangman',age:18})
// 监听单个值

// watch(x,(newValue,oldValue)=>{
//   console.log(newValue,oldValue);
// })

// getter监听
// watch(()=>x.value + y.value,(newValue,oldValue)=>{
//   console.log(newValue,oldValue);
// })

// 监听多个值 只能拿到最新的值
// watch([x,y],([newX,newY])=>{
//   console.log(newX,newY);
// })

// 监听对象 需要用getter
// watch(()=>people.name,(newValue,oldValue)=>{
// console.log(newValue,oldValue);
// })
// 深度监听和监听多个
// watch([()=>people.name,()=>people.age],(name,age)=>{
//   console.log(name,age);
// },{deep:true})

// watchEffect(async ()=>{
//   const d = await Math.random()
//   x.value = d
// })

// //  获取更新之后的DOM
// watch(y,()=>{
//   const id = document.getElementById('demo')
//   console.log(id);
// },{
//   flush:'post'
// })

// 一般情况下，监听器会自动停止，但是异步创建的监听器则不会，需要自己手动清理

// 手动清理定时器 手动停止一个侦听器，请调用 watch 或 watchEffect 返回的函数

// const unWatch = watch(x,()=>{
//   console.log(x.value);
// })
// unWatch()

const author = reactive({
  name:'zhangsan',
  books:[
    'vue','js','css'
  ]
})

const authorBooksMessage = computed(()=>{
  return author.books.length > 0 ? 'YES' : 'NO'
})

var bc = new BroadcastChannel('test_channel');
bc.onmessage=function(ev){
  console.log(ev);
}
</script>

<style scoped></style>
