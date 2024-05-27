<template>
  <el-menu
    class="menu"
    :default-active="defaultActive"
    :router="router"
    v-bind="$attrs"
  >
    <template v-for="item in data" :key="item.index">
      <el-menu-item
        v-if="!item.chilidren || !item.chilidren.length"
        :index="item.index"
      >
        <component
          v-if="item.icon"
          :is="`el-icon${toLine(item.icon)}`"
        ></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.chilidren" :index="item.index">
        <template #title>
          <component
            v-if="item.icon"
            :is="`el-icon${toLine(item.icon)}`"
          ></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="itemSub in item.chilidren"
          :key="itemSub.index"
          :index="itemSub.index"
        >
          <component
            v-if="itemSub.icon"
            :is="`el-icon${toLine(itemSub.icon)}`"
          ></component>
          <span>{{ itemSub.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IMenu } from "./types";
import { toLine } from "../../../utils";

const props = defineProps({
  data: {
    type: Array as PropType<IMenu[]>,
    required: true,
  },
  defaultActive: {
    type: String,
    default: "",
  },
  router: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.menu {
  width: 200px;
  svg {
    margin-right: 10px;
  }
}
</style>
