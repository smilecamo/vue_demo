<template>
  <div
    v-if="isVisible"
    ref="viewHistory"
    class="viewHistory"
    @click="handleClick"
  >
    viewHistory
  </div>
  <transition :class="false" @enter="enter" @leave="leave">
    <div v-if="!isVisible" ref="wrap" class="wrap"></div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { useElementBounding } from "@vueuse/core";
const viewHistory = ref(null);
const wrap = ref(null);
const isVisible = ref(true);
const { x, y, width, height } = useElementBounding(viewHistory);
const handleClick = () => {
  isVisible.value = !isVisible.value;
  //   gsap.set(viewHistory.value, {
  //     x: x + width / 2,
  //     y: y + height / 2,
  //   });
};
const enter = (el, done) => {
  gsap.set(el, {
    duration: 3,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    onComplete: done,
  });
};
const leave = (el, done) => {
  gsap.to(el, {
    duration: 3,
    scaleX: 0,
    scaleY: 0,
    opacity: 0,
    translateX: x + width / 2,
    translateY: y + height / 2,
  });
};
</script>

<style scoped>
.viewHistory {
  width: 100px;
  height: 100px;
  background: saddlebrown;
}
.wrap { 
  position: absolute;
  z-index: 999999;
  top: 0;
  left: 0; 
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}
</style>
