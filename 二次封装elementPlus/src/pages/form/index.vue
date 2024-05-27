<template>
  <m-form :options="options" label-width="100px"></m-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IFormOptions } from "../../components/form/types/index";

const options = ref<IFormOptions[]>([
  {
    type: "input",
    value: "11",
    label: "用户名",
    placeholder: "输入框",
    prop: "username",
    rules: [
      {
        max: 10,
        min: 2,
        message: "请输入2-10位置",
        required: true,
        trigger: "blur",
      },
    ],
  },
  {
    type: "input",
    label: "密码",
    value: "234",
    placeholder: "输入框2",
    prop: "password",
    rules: [
      {
        message: "必须填写",
        required: true,
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: "select",
    label: "职位",
    value: "Option3",
    placeholder: "请选择",
    prop: "select",
    rules: [
      {
        message: "必须填写",
        required: true,
        trigger: "change",
      },
    ],
    children: [
      {
        type: "option",
        value: "Option1",
        label: "Option1",
      },
      {
        type: "option",
        value: "Option2",
        label: "Option2",
      },
      {
        type: "option",
        value: "Option3",
        label: "Option3",
      },
      {
        type: "option",
        value: "Option4",
        label: "Option4",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "radio-group",
    label: "单选框",
    rules: [
      {
        message: "必须填写",
        required: true,
        trigger: "change",
      },
    ],
    children: [
      {
        type: "radio",
        value: "Option A",
        label: "Option A",
      },
      {
        type: "radio",
        value: "Option B",
        label: "Option B",
      },
      {
        type: "radio",
        value: "Option C",
        label: "Option C",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: ["Option A"],
    prop: "checkbox-group",
    label: "复选框",
    rules: [
      {
        message: "必须填写",
        required: true,
        trigger: "change",
      },
    ],
    children: [
      {
        type: "checkbox",
        value: "Option A",
        label: "Option A",
      },
      {
        type: "checkbox",
        value: "Option B",
        label: "Option B",
      },
      {
        type: "checkbox",
        value: "Option C",
        label: "Option C",
      },
    ],
  },
]);
</script>
