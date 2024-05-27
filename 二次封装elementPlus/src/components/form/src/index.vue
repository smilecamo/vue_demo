<template>
  <div class="m-form">
    <el-form
      v-if="model"
      :model="model"
      :rules="rules"
      :validate-on-rule-change="false"
    >
      <template v-for="(item, index) in options" :key="index">
        <!-- 没有子元素的时候 -->
        <el-form-item
          v-if="!item.children || !item.children.length"
          v-bind="$attrs"
          :label="`${item.label}:`"
          :prop="item.prop"
        >
          <component
            :is="`el-${item.type}`"
            :placeholder="item.placeholder"
            v-bind="item.attrs"
            v-model="model[item.prop!]"
          ></component>
        </el-form-item>
        <el-form-item
          v-if="item.children && item.children.length"
          v-bind="$attrs"
          :label="`${item.label}:`"
          :prop="item.prop"
        >
          <component
            :is="`el-${item.type}`"
            :placeholder="item.placeholder"
            v-bind="item.attrs"
            v-model="model[item.prop!]"
          >
            <component
              v-for="(childrenItem, index) in item.children"
              :key="index"
              :is="`el-${childrenItem.type}`"
              :label="childrenItem.label"
              :value="childrenItem.value"
            ></component>
          </component>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref, watch } from "vue";
import cloneDeep from "lodash/cloneDeep";
import { IFormOptions } from "../types";
     
const props = defineProps({
  options: {
    type: Array as PropType<IFormOptions[]>,
    required: true,
  },
});
// 定义form和规则
const model = ref<any>(null);
const rules = ref<any>(null);
// 初始化表单
function initForm() {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options.map((item) => {
      if (item.prop) {
        m[item.prop] = item.value;
        r[item.prop] = item.rules;
      }
      model.value = cloneDeep(m);
      rules.value = cloneDeep(r);
    });
  }
}
onMounted(() => {
  initForm();
});
// 动态获取的options也会触发
watch(
  () => props.options,
  () => {
    initForm();
  },
  {
    deep: true,
  }
);
</script>

<style scoped lang="scss"></style>
