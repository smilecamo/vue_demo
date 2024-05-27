<template>
  <el-popover
    placement="bottom-start"
    :width="420"
    trigger="click"
    v-model:visible="isVisbile"
  >
    <template #reference>
      <div class="city-wrap">
        <span>{{ resulte }}</span>
        <el-icon-arrow-down :class="{ rotate: isVisbile }"></el-icon-arrow-down>
      </div>
    </template>
    <template #default>
      <div class="content">
        <el-row :gutter="20" align="middle">
          <el-col :span="8">
            <el-radio-group v-model="radioValue" size="small">
              <el-radio-button label="按城市" value="按城市" />
              <el-radio-button label="按省份" value="按省份" /> </el-radio-group
          ></el-col>
          <el-col :span="14">
            <el-select
              v-model="selectValue"
              placeholder="选择"
              style="width: 240px"
              size="small"
              filterable
              :filter-method="filterMethod"
              @change="change"
            >
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
          </el-col>
        </el-row>
        <!-- 字母区域 -->
        <template v-if="radioValue === '按城市'">
          <div class="city-header">
            <span
              class="city-header-item"
              v-for="(value, key) in city"
              :key="key"
              @click="clickChat(key)"
            >
              {{ key }}
            </span>
          </div>
          <el-scrollbar max-height="300px">
            <template v-for="(item, key) in city" :key="key">
              <el-row class="city-list" :id="key">
                <el-col :span="2">{{ key }}:</el-col>
                <el-col :span="22">
                  <span
                    class="city-name"
                    v-for="c in item"
                    :key="c.id"
                    @click="cityItem(c)"
                  >
                    {{ c.name }}</span
                  >
                </el-col>
              </el-row>
            </template>
          </el-scrollbar>
        </template>
        <template v-else>
          <div class="province-header">
            <span
              class="province-header-item"
              v-for="(value, key) in provinceRef"
              :key="key"
              @click="provinceClickChat(key)"
            >
              {{ key }}
            </span>
          </div>
          <el-scrollbar max-height="300px">
            <template v-for="(item, key) in provinceRef" :key="key">
              <el-row class="province-list" :id="key">
                <el-col :span="2">{{ key }}:</el-col>
                <el-col :span="22">
                  <span
                    class="province-name"
                    v-for="(c, i) in item.data"
                    :key="i"
                    @click="provinceItem(c)"
                  >
                    {{ c }}</span
                  >
                </el-col>
              </el-row>
            </template>
          </el-scrollbar>
        </template>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect, onMounted } from "vue";
import cities from "../lib/index.ts";
import province from "../lib/province.ts";
const resulte = ref<string>("请选择");
const isVisbile = ref<boolean>(true);
const radioValue = ref<string>("按城市");
const selectValue = ref<string>("");
const options = ref<Array>([]);

let city = ref(cities.cities);
let provinceRef = ref(province);
// 字母点击 跳转指定区域
let clickChat = (item: string) => {
  let dom = document.getElementById(item);
  // dom滚动到
  if (dom) dom.scrollIntoView();
};
let emits = defineEmits(["update:modelValue"]);
// 点击具体的城市
let cityItem = (item: string) => {
  emits("update:modelValue", item.name);
  resulte.value = item.name;
  isVisbile.value = false;
};
let provinceClickChat = (item: string) => {
  let dom = document.getElementById(item);
  // dom滚动到
  if (dom) dom.scrollIntoView();
};
// 点击具体的城市
let provinceItem = (item: string) => {
  emits("update:modelValue", item);
  resulte.value = item;
  isVisbile.value = false;
};

// 过滤下拉框

onMounted(() => {
  options.value = Object.values(cities.cities).flat(2);
});
// 搜索框过滤
function filterMethod(value) {
  if (value) {
    let list = Object.values(cities.cities).flat(2);
    // 只有按照城市才有字母和文字搜索
    if (radioValue.value == "按城市") {
      options.value = list.filter((item) => {
        return item.name.includes(value) || item.spell.includes(value);
      });
    } else {
      options.value = list.filter((item) => {
        return item.name.includes(value);
      });
    }
  }
}
function change(value) {
  emits("update:modelValue", value);
  resulte.value = value;
  isVisbile.value = false;
}
</script>

<style scoped>
.city-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
}
.content {
  padding: 10px;
}
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 6px;
  animation: all 0.3s linear;
}
.rotate {
  transform: rotate(180deg);
}
.city-header,
.province-header {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}
.city-header-item,
.province-header-item {
  padding: 4px 6px;
  border: 1px solid #ccc;
  margin-left: 8px;
  margin-bottom: 4px;
  cursor: pointer;
}
.city-list,
.province-list {
  padding: 5px 0;
}
.city-name,
.province-name {
  padding: 0 10px;
  cursor: pointer;
}
</style>
