<template>
  <div >
    <BaseFooButton>关于我</BaseFooButton> 
    {{fooB}}
   <ul>
    <li class="text-lg text-purple-600">动态获取数据 useFetch</li>
    <li v-for="item of list" :key="item" class="text-sm text-left overflow-auto">{{item.title}}</li>
   </ul>
  </div>
</template>

<script setup>
const fooB = useB()
import { ref } from "vue";

const res = await useFetch("http://121.36.81.61:8000/getTenArticleList");
const list = ref(res.data._rawValue.data);
</script>

<style  scoped>
li{
  line-height: 20px;
  padding: 10px 20px;
}
</style>