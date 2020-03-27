<template>
  <div>
    <ul ref="ula">
      <li v-for="item in ul" :key="item.a">{{ item.a }}</li>
    </ul>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ul: [
        {
          a: 1
        },
        {
          a: 2
        },
        {
          a: 3
        }
      ]
    };
  },
  methods: {
    add() {
      this.ul.push({ a: Math.random() });
      this.ul.push({ a: Math.random() });
      this.ul.push({ a: Math.random() });
      const ul = this.$refs.ula;
      console.log(ul.childNodes.length);
      this.$nextTick(() => {
        const ulEl = this.$refs.ula;
        console.log("我是在$nextTick中的" + ulEl.childNodes.length);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
