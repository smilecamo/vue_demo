<template>
  <div>
    <m-choose-time
      @timeChange="timeChange"
      :startOptions="startOptions"
    ></m-choose-time>
  </div>
</template>

<script setup lang="ts">
function timeChange(value) {
  console.log(value);
}
const startOptions = {
  size: "small",
};
</script>

<style scoped></style>
