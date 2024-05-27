<template>
  <!-- <m-menu :data="data" defaultActive="3-1"> </m-menu> -->
  <m-infinete-menu :data="data" defaultActive="3-1" />
</template>

<script setup lang="ts">
const data = [
  {
    icon: "House",
    name: "导航1",
    index: "1",
  },
  {
    name: "导航2",
    icon: "House",
    index: "2",
  },
  {
    icon: "House",
    name: "导航3",
    index: "3",
    chilidren: [
      {
        icon: "House",
        name: "导航3-1",
        index: "3-1",
      },
      {
        icon: "House",
        name: "导航3-2",
        index: "3-2",
      },
    ],
  },
];
</script>
