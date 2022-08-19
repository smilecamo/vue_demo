<template>
  <button class="btn"><slot></slot>
  </button>
</template>

<script setup>

</script>

<style scoped>
.btn{
  width: 120px;
  height: 30px;
  line-height: 30px;
  border-radius: 6px;
  background: skyBlue;
  border: none;
  margin: 4px;
}
</style>