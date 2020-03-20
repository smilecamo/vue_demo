<template>
  <div>
    {{name}}
    <v-input v-model="name"></v-input>
  </div>
</template>

<script>
import VInput from './input'
  export default {
    components:{
      VInput
    },
    data() {
      return {
        name: 'value'
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>