<template>
  <p>{{ editStatus }}</p>
  <!-- v-table-click 自定义指令 https://cn.vuejs.org/guide/reusability/custom-directives.html#custom-directives -->
  <table v-table-click="tableData">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Score</th>
      </tr>
    </thead>
    <tr v-for="(i, index) of tableData.data" :key="i.id">
      <td :data-index="index">
        <span>{{ i.id }}</span>
      </td>
      <td :data-index="index" data-field="name">
        <span>{{ i.name }}</span>
      </td>
      <td :data-index="index" data-field="age">
        <span>{{ i.age }}</span>
      </td>
      <td :data-index="index" data-field="score">
        <span>{{ i.score }}</span>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { reactive, computed } from "vue";
import { io } from "socket.io-client";
import VTableClick from "./Directives/TableClick";
const socket = io("http://localhost:3000");
const tableData = reactive({
  data: [], // 表格数据
  status: false, // 编辑状态
  index: -1,
  field: name,
  socket,
});
socket.on("loadData", (data) => {
  tableData.data = data;
});
socket.on("changeStatus", (status) => {
  tableData.status = status;
});
socket.on("changeData", (data) => {
  tableData.data = tableData.data.map((item, index) => {
    if (index == data.index) {
      item[data.field] = data.value;
    }
    return item;
  });
});
const editStatus = computed(() => {
  return tableData.status ? "正在编辑..." : "";
});
</script>

<style scoped>
table {
  width: 300px;
}
table,
td,
th {
  border: 1px solid #333;
  position: relative;
}

thead,
tfoot {
}
</style>
