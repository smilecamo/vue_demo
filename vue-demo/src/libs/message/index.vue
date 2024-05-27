<template>
  <!-- Transition 组件 进入离开动画通过默认插槽传递到他的元素或组件中
    由v-if触发
    由v-show触发
    改变特殊的key属性
    由特殊元素component切换的动态组件
   -->
  <Transition name="message"
    ><div class="wrap" v-show="isVisible">
      <span class="text">text</span>
    </div></Transition
  >
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  text: {
    type: String,
  },
  close: {
    type: Function,
  },
  duration: {
    type: Number,
    default: 3000,
  },
});
const duration = ref("0.5s");
const isVisible = ref(false);
onMounted(() => {
  isVisible.value = true;
  close();
});
const close = () => {
  setTimeout(() => {
    isVisible.value = false;
    //  等待一段时间进行关闭等待动画完成完全关闭再触发props.close
    setTimeout(() => {
      props.close();
    }, parseInt(duration.value.replace("0.", "").replace("s", "") * 1000));
  }, props.duration);
};
</script>

<style scoped>
.wrap {
  width: 400px;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background: skyblue;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
}
.message-enter-active,
.message-leave-active {
  transition: all v-bind(duration);
}
.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -100px, 0);
}
</style>
