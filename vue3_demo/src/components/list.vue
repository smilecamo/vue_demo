<template>
  <input type="text" v-model="input" @input="inputChage($event.target.value)" />
  <listItem :inputList="inputList" @del="del"></listItem>
  <button @click="addInput">todoAdd</button>
  <h3>{{ name }}---{{ age }}---{{ name1 }}</h3>
  <button @click="changeInfo">setName</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, computed } from "vue";
import listItem from "./listItem";
export default {
  data() {
    return {
      oh: {
        a: "1",
      },
    };
  },
  setup() {
    const input = ref("");
    const inputChage = (value) => {
      input.value = value;
    };
    const inputValue = computed({
      get: () => input.value + "weiba",
      set: () => input.value + "weiba",
    });
    const inputList = ref([]);
    const addInput = () => {
      inputList.value.push(inputValue.value);
      input.value = "";
    };
    const del = (e) => {
      const index = inputList.value.indexOf(e);
      console.log(index);
      inputList.value.splice(index, 1);
    };
    const info = reactive({
      name: "name",
      age: "age",
    });
    const copy = readonly(reactive({ name1: "name1" }));
    const changeInfo = () => {
      copy.name1 = "name1111";
      info.name = info.name + "22222";
    };
    const infoData = toRefs(info);
    const copyData = toRefs(copy);
    return {
      input,
      inputChage,
      inputList,
      addInput,
      del,
      changeInfo,
      ...infoData,
      ...copyData,
    };
  },
  components: {
    listItem,
  },
};
</script>

<style scoped></style>
