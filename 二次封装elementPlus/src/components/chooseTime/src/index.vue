<template>
  <div class="time-wrap">
    <el-time-select
      v-model="startTime"
      :style="style"
      :placeholder="startPlaceholder"
      :step="step"
      :end="end"
      :start="start"
      style="margin-right: 10px"
      v-bind="$attrs.startOptions"
    />
    <el-time-select
      v-model="endTime"
      :style="style"
      :min-time="startTime"
      :placeholder="endPlaceholder"
      :step="step"
      :end="end"
      :start="start"
      :disabled="endTimeDisabled"
      v-bind="$attrs.endOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  endPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  start: {
    type: String,
    default: "08:00",
  },
  end: {
    type: String,
    default: "20:00",
  },
  step: {
    type: String,
    default: "00:30",
  },
  style: {
    type: String,
    default: "width: 240px",
  },
});

const startTime = ref<string>("");
const endTime = ref<string>("");
const endTimeDisabled = ref<boolean>(true);
const emits = defineEmits(["timeChange"]);
watch(startTime, (value, value1) => {
  if (value == "" || value == undefined) {
    startTime.value = "";
    endTime.value = "";
    endTimeDisabled.value = true;
  } else {
    endTimeDisabled.value = false;
  }
  emits("timeChange", { startTime: startTime.value, endTime: endTime.value });
});
watch(endTime, (value, value1) => {
  if (value) {
    emits("timeChange", { startTime: startTime.value, endTime: endTime.value });
  }
});
</script>

<style scoped>
.time-wrap {
  display: flex;
}
</style>
