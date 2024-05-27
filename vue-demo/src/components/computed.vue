<template>
  <div>{{ stop }}</div>
  <div>{{ plusOne }}</div>
  <button @click="changePlusOne">changePlusOne</button>
</template>
<script setup>
import { ref, computed } from "vue";
const stop = ref(1);
// 创建只读的computed
// const plusOne = computed(() => stop.value + 1);

// 创建可读写的属性computed
// const plusOne = computed({
//   get: () => stop.value + 1,
//   set: (val) => {
//     stop.value = val;
//   },
// });
// const changePlusOne = () => {
//   plusOne.value++;
// };
// 调试
const plusOne = computed(() => stop.value + 1, {
  onTrack(e) {
    console.log("onTrack", e);
  },
  onTrigger(e) {
    console.log("onTrigger", e);
  },
});
const changePlusOne = () => {
  stop.value++;
};
</script>
<style scoped></style>
