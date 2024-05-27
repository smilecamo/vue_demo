<template>
  <table class="border-collapse border-black" v-cell-select="weekdayTimeData">
    <tr>
      <th class="border border-black" rowspan="2">星期/时间</th>
      <th class="border border-black" colspan="12">00:00 - 12:00</th>
      <th class="border border-black" colspan="12">12:00 - 24:00</th>
    </tr>
    <tr>
      <th v-for="i in 24" class="border border-black">
        {{ i - 1 }}
      </th>
    </tr>
    <tr v-for="i in 7" :data-weekday="i - 1">
      <th class="border border-black weekday-title">
        {{ weekdayTitle[i - 1] }}
      </th>
      <td v-for="m in 24" class="border border-black" :data-time="m - 1"></td>
    </tr>
  </table>
</template>

<script setup>
import vCellSelect from "../js/vCellSelect.js";
import { reactive } from "vue";
const weekdayTimeData = reactive([]);
const weekdayTitle = [
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
  "星期日",
];
</script>

<style lang="scss" scoped>
table {
  tr {
    height: 50px;
  }
  .weekday-title {
    width: 100px;
  }
  td {
    width: 50px;
    &.target {
      background: rgb(204, 236, 226);
    }
  }
}
</style>
