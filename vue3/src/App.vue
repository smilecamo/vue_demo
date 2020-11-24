<template>
  <div class="container">
    <global-header :user="userInfo"></global-header>
    <column-list :list="list" class=""></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader,{UserProps} from './components/GlobalHeader.vue'
const userInfo: UserProps={
  isLoading:true,
  name:'张三',
  id:111
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "this is title1",
    description: "this is description,this is description",
    // avator:
    //   "https://pic2.zhimg.com/v2-640d245f4cffa249560b36e7b478a0f3_xs.jpg?source=1940ef5c",
  },
  {
    id: 2,
    title: "this is title3",
    description: "this is 3,this is 3",
    avator:
      "https://pic2.zhimg.com/v2-640d245f4cffa249560b36e7b478a0f3_xs.jpg?source=1940ef5c",
  },
  {
    id: 3,
    title: "this is title55555",
    description: "this is 3,this is 3",
    avator:
      "https://pic2.zhimg.com/v2-640d245f4cffa249560b36e7b478a0f3_xs.jpg?source=1940ef5c",
  },
];
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      userInfo
    };
  },
});
</script>

<style></style>
