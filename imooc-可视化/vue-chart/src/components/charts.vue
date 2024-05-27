<template>
    <div :class="[chartsName, 'charts']">

    </div>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'
import { onMounted, watch } from 'vue'
import * as echarts from 'echarts';
const chartsName = `eCharts-${uuidv4()}`

const props = defineProps({
    options: Object,
    theme: [String, Object]
})
let chart
// 初始化chart图表
const initCharts = () => {
    if (!chart) {
        // 获取dom元素
        let dom = document.getElementsByClassName(chartsName)[0];
        chart = echarts.init(dom)
    }
    chart && chart.setOption(props.options)
}
onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    initCharts()
})
watch(() => props.options, () => {
    initCharts()
})
</script>

<style lang="scss" scoped>
.charts {
    width: 100%;
    height: 100%;
}
</style>