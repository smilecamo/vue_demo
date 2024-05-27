<template>
  <span class="nav-header" @click="toggleCollapse">
    <el-icon-expand v-if="collapse" />
    <el-icon-fold v-else="collapse" />
  </span>
</template>

<script setup lang="ts">
let props = defineProps<{
  collapse: boolean;
}>();

let emits = defineEmits(["update:collapse"]);
const toggleCollapse = () => {
  emits("update:collapse", !props.collapse);
};
</script>

<style lang="scss" scoped>
.nav-header {
  padding: 20px;
  display: flex;
  align-content: center;
  border-bottom: 1px #ccc solid;
}
</style>
