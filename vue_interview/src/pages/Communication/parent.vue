/*
 * @Author: Yang 
 * @Date: 2020-03-20 10:45:31 
 * @Last Modified by: Yang
 * @Last Modified time: 2020-03-20 15:33:30
 * 父子组件通信
 */

<template>
  <div>
    <!-- 父组件 -->
    <!-- 
      .lazy 在“change”时而非“input”时更新
      .number 将用户的输入值转为数值类型
      .trim 过滤首位的空格
    -->
    <input v-model.lazy="value"/>
    <button @click="add">添加</button>
    <!-- :data 为父组件向子组件传的值  
          @delet为父组件监听子组件传给父组件的事件
    -->
    <children :data="data" @delet="delet"></children>
    <children-1></children-1>
  </div>
</template>

<script>
import children from './chirlden'
import children1 from './chirlden1'
  export default {
    components:{
      children,
      children1,
    },
    data() {
      return {
        value:"",
        data: []
      }
    },
    beforeCreate(){
      console.log("beforeCreate组件初始化前")
    },
    created(){
      console.log("created 组件初始化后挂载js")
    },
    beforeMount(){
      console.log("beforeMount 组件渲染前")
    },
    mounted(){
      console.log("mounted 组件渲染后")
    },
    beforeUpdate(){
      console.log("beforeUpdate 组件更新前")
    },
    updated(){
      console.log("updated 组件更新后")
    },
    beforeDestroy(){
      console.log("beforeDestroy 组件销毁前")
    },
    destroyed(){
      console.log("destroy 组件销毁")
    },
    methods:{
      add(){
        this.data.push({
          id: Math.random(),
          title: this.value
          })

      },
      delet(id){
        this.data = this.data.filter(e=>e.id !== id)
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>