<template>
    <charts :options="options">
    </charts>
</template>

<script setup>
import {ref} from 'vue'
import charts from '@src/components/charts.vue'
let options = ref({})
function init(){
options.value={}
}
onMounted(()=>{
    init()
})
</script>

<style lang="scss" scoped>

</style>