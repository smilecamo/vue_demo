<template>
  <ul>
    <li v-for="(liItem, index) of inputList" :key="index" @click="del(liItem)">
      {{ liItem }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    inputList: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    const del = (item) => {
      emit("del", item);
    };
    console.log(props);
    return {
      del,
    };
  },
};
</script>

<style scoped></style>
