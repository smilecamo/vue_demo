<template>
  <m-notification>
    <m-list
      :actionData="actionData"
      :listData="listData"
      @dataItemClick="dataItemClick"
      @actionItemClick="actionItemClick"
    ></m-list>
  </m-notification>
</template>

<script setup lang="ts">
const listData = [
  {
    title: "Title 1",
    list: [
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 1-1",
        time: "2020-02-01 10:00",
      },
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 1-2",
        time: "2020-02-02 11:00",
      },
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 1-3",
        time: "2020-02-03 12:00",
      },
    ],
  },
  {
    title: "Title 2",
    list: [
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 2-1",
        time: "2020-02-04 13:00",
      },
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 2-2",
        time: "2020-02-05 14:00",
      },
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 2-3",
        time: "2020-02-06 15:00",
      },
    ],
  },
  {
    title: "Title 3",
    list: [
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 3-1",
        time: "2020-02-07 16:00",
        tag: "未完成",
        tagType: "success", // 可根据需要更改此值
      },
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 3-2",
        time: "2020-02-08 17:00",
        tag: "未完成",
        tagType: "info", // 可根据需要更改此值
      },
      {
        avati: "https://via.placeholder.com/150",
        desc: "Description 3-3",
        time: "2020-02-09 18:00",
        tag: "未完成",
        tagType: "warning", // 可根据需要更改此值
      },
    ],
  },
];
const actionData = [
  {
    text: "编辑",
    icon: "Edit",
  },
  {
    text: "delete",
    icon: "Delete",
  },
];
const actionItemClick = (item: any, index: number) => {
  console.log(item, index);
};
const dataItemClick = (item: any, index: number) => {
  console.log(item, index);
};
</script>

<style scoped></style>
