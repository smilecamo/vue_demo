<template>
  <div @click="add">
    兄弟组件删除了id为 -- {{ value }}
    </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
export default {
  data() {
    return {
      value: ""
    };
  },
  mounted() {
    // 自定义事件传值
    eventBus.$on("deleHandle", this.changeValue);
  },
  beforeDestroy(){
    // 及时销毁自定义事件 避免内存泄漏
    eventBus.$off("deleHandle",this.changeValue)
  },
  methods:{
    add(){
      eventBus.$emit("bro",this.value)
    },
    changeValue(e){
      this.value = e;
    }
  }
};
</script>

<style lang="scss" scoped></style>
