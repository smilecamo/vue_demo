<template>
  <div>watchWatchEffect</div>
</template>

<script setup>
import { watch, ref, watchEffect } from "vue";
const count = ref({
  num: 1,
});
setTimeout(() => {
  count.value.num = 2;
}, 1000);
/**
 * 侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。
 * watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。
 * 另外，仅在数据源确实改变时才会触发回调。
 * watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机
 * 返回值是一个用来停止该副作用的函数。
 * @param {*} newVal 变化后的值
 * @param {*} oldValue 变化前的值
 * options:{
 *  immediate: 是否立即执行回调函数
 *  deep: 是否深度监听 如果源是对象，强制深度遍历，以便在深层级变更时触发回调
 *  flush: 触发回调函数的时机 post vue更新后的dom
 *  onTrack: 深度监听时，对每个嵌套的响应式对象进行跟踪
 *  onTrigger: 深度监听时，当响应式对象触发更新时触发
 *  scheduler: 用于控制回调函数的执行时机
 * }
 */
const stopWatch = watch(
  count,
  (newVal, oldValue) => {
    console.log(newVal, oldValue);
  },
  {
    immediate: true,
    deep: true,
    flush: "post",
  }
);
/**
 * watchEffect，则会在副作用发生期间追踪依赖。
 * 它会在同步执行过程中，自动追踪所有能访问到的响应式属性。
 * 这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。
 * 立即运行一个函数，同时响应式的跟踪其依赖，并在依赖更新时重新执行 相当于 watch options: immediate: true,
 */
const stopWatchEffect = watchEffect(
  () => {
    console.log("count", count.value);
  },
  {
    deep: true,
  }
);
</script>

<style lang="scss" scoped></style>
