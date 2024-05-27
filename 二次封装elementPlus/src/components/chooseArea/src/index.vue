<template>
  <el-select v-model="province" placeholder="省份选择" clearable>
    <el-option
      v-for="item in provinceData"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    />
  </el-select>
  <el-select
    :disabled="!province"
    v-model="city"
    placeholder="市选择"
    clearable
  >
    <el-option
      v-for="item in cityData"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    />
  </el-select>
  <el-select :disabled="!city" v-model="area" placeholder="区选择" clearable>
    <el-option
      v-for="item in areaData"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    />
  </el-select>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import provinceData from "../lib/pca-code.json"; // 省份
export interface DataItem {
  code: string;
  name: string;
  children?: DataItem[];
}
let province = ref<string>(""); // choose province data
let city = ref<string>(""); // choose city data
let area = ref<string>(""); // choose area data
let cityData = ref<DataItem[]>([]); // city data list
let areaData = ref<DataItem[]>([]); // area data list
watch(
  () => province.value,
  (value) => {
    if (value) {
      cityData.value = provinceData.find(
        (item) => item.code === value
      )!.children;
    }
    city.value = "";
    area.value = "";
  }
);
watch(
  () => city.value,
  (value) => {
    if (value) {
      // 后面继续加！是为了说明一定是有值
      areaData.value = cityData.value.find(
        (item) => item.code === value
      )!.children!;
    }
    area.value = "";
  }
);
// 向父级元素传递数据
const emits = defineEmits(["change"]);
export interface Data {
  code: string;
  name: string;
}
let provinceChangeData = ref<Data>({ code: "", name: "" });
let cityChangeData = ref<Data>({ code: "", name: "" });
let areaChangeData = ref<Data>({ code: "", name: "" });
watch(
  () => area.value,
  (value) => {
    if (value) {
      provinceChangeData.value = {
        name: provinceData.find((i) => province.value === i.code)!.name,
        code: province.value,
      };
      cityChangeData.value = {
        name: cityData.value.find((i) => city.value === i.code)!.name,
        code: city.value,
      };
      areaChangeData.value = {
        name: areaData.value.find((i) => area.value === i.code)!.name,
        code: area.value,
      };
      emits("change", {
        province: provinceChangeData,
        city: cityChangeData,
        area: areaChangeData,
      });
    } else {
      emits("change", {});
    }
  }
);
</script>

<style scoped></style>
