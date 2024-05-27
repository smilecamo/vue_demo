<template>
  <el-progress :percentage="percentage" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  number: {
    type: Number,
    default: 40,
  },
  time: {
    type: Number,
    default: 3000,
  },
  isAnimated: {
    type: Boolean,
    default: false,
  },
});

let timer: any = ref(null);
let percentage = ref<number>(0);
onMounted(() => {
  if (props.isAnimated) {
    let t = Math.ceil(props.time / props.number); // 需要多少秒完成动画
    timer.value = setInterval(() => {
      percentage.value += 1;
      if (percentage.value >= props.number) {
        percentage.value = props.number;
        close();
      }
    }, t);
  } else {
    percentage.value = props.number;
  }
});
const close = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
};
onUnmounted(() => {
  close();
});
</script>

<style scoped></style>
