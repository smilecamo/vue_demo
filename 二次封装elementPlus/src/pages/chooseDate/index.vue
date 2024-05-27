<template>
  <div>
    <m-choose-date></m-choose-date>
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
