<template>
  <div>
    <input type="text" :value="test"
    @input="$emit('change',$event.target.value)" />
  </div>
</template>

<script>
/** 
 * prop value props. 名称需要一致
 * $emit() model.event 事件名需要一致
*/
export default {
  model: {
    prop: "test",
    event: "change"
  },
  props: {
    test: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
