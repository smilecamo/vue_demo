<template>
  <div class="date-wrap">
    <el-date-picker
      v-model="dateValue"
      type="daterange"
      :range-separator="rangeSeparator"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :disabled-date="disabledDate"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watch, watchEffect } from "vue";
const props = defineProps({
  rangeSeparator: {
    type: String,
    default: "至",
  },
  startPlaceholder: {
    type: String,
    default: "开始日期",
  },
  endPlaceholder: {
    type: String,
    default: "结束日期",
  },
  disabledTody: {
    type: Boolean,
    default: true,
  },
});

let dateValue = ref<[Date, Date] | [string, string]>([]);
const emits = defineEmits(["change"]);
watch(dateValue, (value) => {
  if (value) {
    emits("change", value);
  }
});

// 定义一个函数类型的ref
// 定义 disabledDate 函数
const disabledDate = (time: Date): boolean => {
  const today = new Date();
  // 禁用今天之前的日期
  return time < new Date(today.setHours(0, 0, 0, 0));
};
</script>

<style scoped>
.time-wrap {
  display: flex;
}
</style>
