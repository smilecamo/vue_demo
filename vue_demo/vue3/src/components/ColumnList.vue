<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-3">
      <div class="card h-100 shadow-sm" style="width: 18rem;">
        <div class="card-body text-center">
          <img
            :src="column.avator"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avator?: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      //类型断言为
      type: Array as PropType<ColumnProps[]>,
      require: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      if(props.list){
        return props.list.map((column) => {
          if (!column.avator) {
           // eslint-disable-next-line no-use-before-define
            column.avator = require('@/assets/logo.png')
          }
          return column;
        });
      }
    });
    return {
      columnList,
    };
  },
});
</script>

<style></style>
