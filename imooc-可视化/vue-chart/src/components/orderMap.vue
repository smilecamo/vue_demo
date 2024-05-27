<template>
  <div style="width: 800px; height: 400px; border: 1px salmon solid">
    <charts :options="options" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";
import charts from "./charts.vue";
const options = ref({});
const timeLineData = ["北京", "上海", "深圳", "广州", "杭州", "南京"];
const init = () => {
  fetch("https://www.youbaobao.xyz/datav-res/datav/map.json")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // 注册地图
      echarts.registerMap("china", { geoJSON: res });
      options.value = {
        geo: {
          map: "china", // 使用地图
          zoom: 1.1, // 缩放
          scaleLimit: {
            min: 0.6,
            max: 3,
          },
          center: [113.83531246, 34.0267395887], // 中心点
          itemStyle: {
            // 块的配置
            borderColor: "rgba(147,235,248,1)", // 边框颜色
            borderWidth: 1, // 边框大小
            areaColor: {
              // 块的颜色
              type: "radial", // 渐变色
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(147,235,2481,0)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(147,235,248,0.2)", // 100% 处的颜色
                },
              ],
            },
            shadowOffsetX: -2, // 阴影效果
            shadowOffsetY: 2,
            shadowBlur: 10,
          },
          emphasis: {
            // 高亮状态x选中状态
            itemStyle: {
              areaColor: "#389bb7",
              borderWidth: 0,
            },
          },
        },
        timeline: {
          data: timeLineData,
          axisType: "category",
          autoPlay: true,
          palyInterval: 3000,
          left: "4%",
          right: "4%",
          symbolSize: 12,
          lineStyle: {
            color: "#ddd",
          },
          checkpointStyle: {
            color: "red",
            borderWidth: 0,
          },
          label: {
            fontSize: 12,
            color: "#494849",
          },
          controlStyle: {
            itemSize: 18,
            borderWidth: 0,
            borderColor: "#494849",
          },
          emphasis: {
            checkpointStyle: {
              color: "red",
              borderWidth: 0,
            },
            lineStyle: {
              color: "#fff",
              show: false,
            },
            controlStyle: {
              itemSize: 18,
              borderWidth: 0,
              borderColor: "#494849",
            },
          },
        },
      };
    });
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped></style>
