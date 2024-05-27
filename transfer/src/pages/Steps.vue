<template>
  <div class="body">
    <div class="container">
      <div class="steps">
        <span
          v-for="item of circleData"
          :key="item"
          :class="['circle', item <= progressIndex ? 'active' : '']"
          >{{ item }}</span
        >
        <div class="progress-bar">
          <span class="indicator" ref="indicator"> </span>
        </div>
      </div>
      <div class="buttons">
        <button @click="go('pre')" :disabled="progressIndex < 1">pre</button>
        <button @click="go('next')" :disabled="progressIndex >= circleData">
          next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const progressIndex = ref(1);
const circleData = ref(4);
const indicator = ref(null);
/**
 * @description:
 * @param {*} type
 * @return {*}
 */
const go = (type) => {
  if (type == "pre" && progressIndex.value > 0) {
    progressIndex.value = --progressIndex.value;
  } else if (type == "next" && progressIndex.value < circleData.value) {
    progressIndex.value = ++progressIndex.value;
  }
  let width = (progressIndex.value - 1) * 33;
  indicator.value.style = `width:${width}%`;
};
</script>

<style lang="scss" scoped>
.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f7fb;
  .container {
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    // background-color: gray;
    .steps {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .circle {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 4px solid #e0e0e0;
        background: #fff;
        z-index: 1;
        transition: all 300ms ease;
        transition-delay: 0;
      }
      .active {
        border-color: #4070f4;
        color: #4070f4;
      }
      .progress-bar {
        position: absolute;
        width: 100%;
        height: 4px;
        background: #e0e0e0;
        transition: all 300ms ease;

        .indicator {
          transition-delay: 100ms;
          position: absolute;
          height: 100%;
          background: #4070f4;
        }
      }
    }
    .buttons {
      display: flex;
      gap: 20px;
      button {
        padding: 8px 25px;
        background: #4070f4;
        border-radius: 8px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        &:disabled {
          background: #87a5f8;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
