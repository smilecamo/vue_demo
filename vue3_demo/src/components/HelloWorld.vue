<template>
  <h3>
    {{ count }}
  </h3>
  <h3>
    {{ info.name }}
  </h3>
  <button @click="countAction">jiajia</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const count = ref(0);
    const info = reactive({
      name: "lilei",
      age: 17,
    });
    const countAction = () => {
      count.value = count.value += 1;
    };
    return {
      count,
      info,
      countAction,
    };
  },
};
</script>

<style scoped></style>
