<template>
  <div>
    <!-- 子组件 -->
    <ul v-for="item of data" :key="item.id">
      <li>
        {{ item.title }}
        <button @click="dele(item.id)">删除</button>
      </li>
    </ul>
    <p v-if="value">{{value}}</p>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
export default {
  /**
   * props 是父组件传到子组件的接收函数
   * data 是父组件通过什么名字进行传值
   * type 规定了数据的类型
   * default 是默认的值
   ****默认值如果是数字可以直接设置 default: 5
   ****如果是对象,则需要工厂函数
   * required 是否必传
   * validator 自定义验证函数
   * 可以简写为 props:["data"]
   */
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      value: ""
    };
  },
  beforeCreate(){
    console.log('beforCreate 子组件实例化前')
  },
  created(){
    console.log("created 子组件挂载js后")
  },
  beforeMount(){
    console.log("beforeMount 子组件渲染前")
  },
  mounted(){
    console.log("mounted 子组件 渲染完成")
    eventBus.$on("bro", e => (this.value = e));
  },
  beforeUpdate(){
    console.log("beforeUpdate 子组件更新前")
  },
  updated(){
    console.log("updated 子组件更新完")
  },
  beforeDestroy(){
    console.log('beforeDestroy 子组件销毁前')
  },
  destroy(){
    console.log('destroy 子组件销毁')
  },
  methods: {
    dele(id) {
      // 子组件通过$emit 触发父组件的事件
      this.$emit("delet", id);
      /**
       * 兄弟组件/跨级组件传值通信
       */
      eventBus.$emit("deleHandle", id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
