<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <slot />
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { toLine } from "../../../utils";

const props = defineProps({
  icon: {
    type: String,
    default: "BellFilled",
  },
  value: {
    type: [String, Number],
    default: 12,
  },
  max: {
    type: Number,
    default: 50,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>
