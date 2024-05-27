<template>
  <Transition name="message-fade" v-show="visible.state.visible">
    <div :class="styleClass" :style="{ top: top + 'px', zIndex: zIndex }">
      {{ message }}
    </div>
  </Transition>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import types from "./types";
const props = defineProps({
  type: {
    type: String,
    default: types.MESSAGE,
    validator(val) {
      return Object.values(types).includes(val);
    },
  },
  message: {
    type: String,
    default: "message",
  },
  duration: {
    type: Number,
    default: 3000,
  },
});
const top = ref(0);
const zIndex = ref(2022);
function setTop(topPx) {
  top.value = topPx;
  return topPx;
}
function setzIndex(zIndexNumber) {
  zIndex.value = zIndexNumber;
  return zIndexNumber;
}
const visible = reactive({
  state: {
    visible: false,
    timer: null,
  },
  methods: {
    setVisible() {
      return new Promise((resolve) => {
        visible.state.visible = !visible.state.visible;
        visible.state.timer = setTimeout(() => {
          resolve("");
          clearTimeout(visible.state.timer);
          visible.state.timer = null;
        }, 300);
      });
    },
  },
});
defineExpose({ visible, height: 40, margin: 20, top, setTop, setzIndex });
const styleClass = computed(() => ["message-default", props.type]);
</script>

<style lang="scss" scoped>
.message-default {
  @apply fixed top-[20px] w-[390px] h-[40px] ml-[-195px] left-[50%] text-center leading-[40px] text-white rounded;
  transition: top 0.3s ease-out;
  &.success {
    @apply bg-green-100 text-green-500;
  }
  &.message {
    @apply bg-yellow-100 text-yellow-500;
  }
  &.error {
    @apply bg-red-100 text-red-500;
  }
  &.warining {
    @apply bg-zinc-200 text-zinc-500;
  }
}
.message-fade-enter-active {
  transition: all 0.3s ease-in;
}
.message-fade-leave-active {
  transition: all 0.3s ease-out;
}
.message-fade-enter-from,
.message-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
