<template>
  <div class="trend">
    <!-- 插槽和props取一个 -->
    <slot v-if="slots.default"></slot>
    <span v-else :style="{ marginRight: '6px', color: textColor }" style="">{{
      text
    }}</span>
    <component
      :is="`el-icon${toLine(upIcon)}`"
      :style="{ color: reverse ? downIconColor : upIconColor }"
      v-if="type === 'up'"
    ></component>
    <component
      :is="`el-icon${toLine(downIcon)}`"
      :style="{ color: reverse ? downIconColor : upIconColor }"
      v-else
    ></component>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import { toLine } from "../../../utils";
const props = defineProps({
  type: {
    type: String,
    default: "up",
  },
  text: {
    type: String,
    default: "文字",
  },
  upIconColor: {
    type: String,
    default: "red",
  },
  downIconColor: {
    type: String,
    default: "green",
  },
  upTextColor: {
    type: String,
    default: "#000",
  },
  downTextColor: {
    type: String,
    default: "#000",
  },
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  downIcon: {
    type: String,
    default: "ArrowDown",
  },
  // 反转颜色
  reverse: {
    type: Boolean,
    default: false,
  },
});
// 文本颜色
const textColor = computed(() => {
  return props.type == "up" ? props.upTextColor : props.downTextColor;
});
// 插槽和textProps
const slots = useSlots();
</script>

<style scoped lang="scss">
.trend {
  display: flex;
  align-items: center;
  font-size: 14px;
  svg {
    width: 0.8em;
    height: 0.8em;
  }
}
</style>
