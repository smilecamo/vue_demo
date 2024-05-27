<template>
  <div class="m-list">
    <el-tabs stretch>
      <el-scrollbar max-height="400px">
        <el-tab-pane
          v-for="item in listData"
          :label="item.title"
          :key="item.title"
        >
          <div
            @click="dataItemClick(item1, index)"
            class="list"
            v-for="(item1, index) in item.list"
            :key="index"
          >
            <el-avatar :src="item1.avatar" />
            <div class="list-center">
              <span>{{ item1.desc }}</span>
              <span>{{ item1.time }}</span>
            </div>
            <div class="list-right" v-if="item1.tag">
              <el-tag :type="item1.tagType">{{ item1.tag }}</el-tag>
            </div>
          </div>
        </el-tab-pane>
        <div class="action">
          <div
            @click="actionItemClick(item, index)"
            v-if="actionData"
            v-for="(item, index) in actionData"
            :key="item.text"
            class="action-item"
            :class="{ border: index !== actionData.length - 1 }"
          >
            <component
              v-if="item.icon"
              :is="`el-icon${toLine(item.icon)}`"
            ></component>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </el-scrollbar>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IActionOptions, IListOptions } from "./type";
import { toLine } from "../../../utils";
let props = defineProps({
  listData: {
    type: Array as PropType<IListOptions[]>,
    required: true,
  },
  actionData: {
    type: Array as PropType<IActionOptions[]>,
  },
});
const emits = defineEmits(["dataItemClick", "actionItemClick"]);
const dataItemClick = (item: any, index: number) => {
  emits("dataItemClick", item, index);
};
const actionItemClick = (item: any, index: number) => {
  emits("actionItemClick", item, index);
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 20px;
  &-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
}
.action {
  display: flex;
  height: 40px;
  line-height: 40px;
  align-items: center;
  border-top: 1px #eee solid;
  &-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 6px;
    }
  }
  .border {
    border-right: 1px #eee solid;
  }
}
</style>
