<template>
  <el-button type="primary" @click="handleClick">
    <slot> 选择图标 </slot>
    {{ visible }}
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog v-model="dialogVisible" :title="title" width="500">
      <div class="icon-wrap">
        <div
          class="icon-item"
          v-for="[key] of Object.entries(elementIcon)"
          @click="copyIcon(key)"
        >
          <component :is="`el-icon${toLine(key)}`"></component>
          <span>{{ key }}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import * as elementIcon from "@element-plus/icons-vue";
import { toLine } from "../../../utils";
import { useCopy } from "../../../hooks/useCopy";
const props = defineProps<{
  title: string;
  visible: boolean;
}>();
const emits = defineEmits(["update:visible"]); // v-model 双向绑定 更改付级别数据
let dialogVisible = ref<boolean>(props.visible); // props 穿过来的数据 子组件不能直接修改
const handleClick = () => {
  emits("update:visible", !props.visible); // 触发双向绑定
};
const copyIcon = (str: string) => {
  let iconName = `<el-icon${toLine(str)} />`;
  useCopy(iconName);
  dialogVisible.value = false;
};
// 监听子组件的visible的改变，同步当前父组件的visible
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
// 当 当前的visible改变时，同步子组件的visible
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);
</script>

<style scoped lang="scss">
.icon-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .icon-item {
    width: 25%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
    svg {
      width: 2em;
      height: 2em;
      margin-bottom: 10px;
    }
  }
}
</style>
