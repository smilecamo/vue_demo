<template>
  <charts class="charts" :options="options"> </charts>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";
import cloneDeep from "lodash/cloneDeep";
import charts from "@src/components/charts.vue";

let options = ref({});
let timer = null;
function init() {
  fetch("https://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      echarts.registerMap("jiangsu", { geoJSON: res });
      const center = [];
      res.features.forEach((item) => {
        center.push({
          name: item.properties.name,
          value: item.properties.center,
        });
      });
      options.value = {
        // 定义由浅入深颜色 比如GDP 更加明白清楚的看到数据变化
        visualMap: [
          {
            show: true,
            max: 100, // 最大值显示
            inRange: {
              //定义颜色 由浅入深的
              color: ["#a5dafd", "#006edd"],
            },
          },
        ],
        geo: [
          {
            map: "jiangsu",
            // center: [],// 地图中心店
            // roam: true,// 是否支持缩放
            // scaleLimit: {// 缩放控制大小
            //     min: 1,
            //     max: 3,
            // },
            // zoom: 1,//显示比例
            // label: {
            //     color: 'red',
            //     fontWeight: 'bold'
            // },
            // itemStyle: {// 地图样式
            //     areaColor: '#AB4EC3',//地图区域的颜色。
            //     color: 'red',//图形的颜色。
            //     borderColor: 'red',// t图像描边颜色
            //     borderWidth: 2,//描边大小
            //     borderType: [5, 10],//描边类型。
            //     shadowColor: 'rgba(0, 0, 0, 0.5)',// 阴影的偏移颜色
            //     shadowBlur: 8,// 阴影的偏移大小
            //     shadowOffsetX: -6,// 阴影的偏移颜色
            //     shadowOffsetY: 10,// 阴影的偏移颜色
            // }
          },
        ],
        series: [
          {
            type: "map",
            map: "jiangsu",
            itemStyle: {
              //地图区域的多边形 图形样式。
              areaColor: "#AB4EC3", //地图区域的颜色。
              shadowColor: "rgba(0, 0, 0, 0.5)", // 阴影的偏移颜色
              shadowBlur: 8, // 阴影的偏移大小
              shadowOffsetX: -6, // 阴影的偏移颜色
              shadowOffsetY: 10, // 阴影的偏移颜色
            },
            label: {
              // 展示类
              show: true,
              color: "#fff",
            },
            emphasis: {
              // 强调类
              label: {
                show: true,
                color: "#fff",
              },
              itemStyle: {
                // areaColor: "red",
                color: "#fff",
              },
            },
            data: center.map((item) => {
              const value = Math.random() * 100;
              return {
                name: item.name,
                value,
              };
            }),
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            name: "告警消息",
            data: [],
            rippleEffect: {
              color: "red",
            },
            symbolSize: 14,
            label: {
              show: true,
              position: "top",
              formatter: function (v) {
                console.log(v);
                return `{header|${v.seriesName}}\n{title|${v.data.name}}\n{content|y有XXX条告警}`;
              },
              backgroundColor: "red",
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              rich: {
                //在 rich 里面，可以自定义富文本样式。`{styleName|text content text content}` 标记样式名。
                header: {
                  padding: [0, 10, 10, 10],
                  color: "#fff",
                },
                title: {
                  padding: [0, 10, 10, 10],
                  color: "#fff",
                },
                content: {
                  padding: [10, 10, 0, 10],
                  color: "#fff",
                },
              },
            },
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            name: "告警消息",
            data: [],
            rippleEffect: {
              color: "#ccc",
            },
            symbolSize: 14,
            label: {
              show: true,
              position: "top",
              formatter: function (v) {
                console.log(v);
                return `{header|${v.seriesName}}\n{title|${v.data.name}}\n{content|y有XXX条告警}`;
              },
              backgroundColor: "#ccc",
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              rich: {
                //在 rich 里面，可以自定义富文本样式。`{styleName|text content text content}` 标记样式名。
                header: {
                  padding: [0, 10, 10, 10],
                  color: "#fff",
                },
                title: {
                  padding: [0, 10, 10, 10],
                  color: "#fff",
                },
                content: {
                  padding: [10, 10, 0, 10],
                  color: "#fff",
                },
              },
            },
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            name: "告警消息",
            data: [],
            rippleEffect: {
              color: "#7496AA",
            },
            symbolSize: 14,
            label: {
              show: true,
              position: "top",
              formatter: function (v) {
                return `{header|${v.seriesName}}\n{title|${v.data.name}}\n{content|y有XXX条告警}`;
              },
              backgroundColor: "#7496AA",
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              rich: {
                //在 rich 里面，可以自定义富文本样式。`{styleName|text content text content}` 标记样式名。
                header: {
                  padding: [0, 10, 10, 10],
                  color: "#fff",
                },
                title: {
                  padding: [0, 10, 10, 10],
                  color: "#fff",
                },
                content: {
                  padding: [10, 10, 0, 10],
                  color: "#fff",
                },
              },
            },
          },
        ],
      };
      timer = setInterval(() => {
        const _option = cloneDeep(options.value);
        const centerIndex = Math.floor(Math.random() * center.length);
        const eventIndex = Math.floor(Math.random() * 3) + 1;
        const series = _option.series;
        // 初始化数据
        for (let i = 1; i < 4; i++) {
          series[i].data = [];
        }
        // 随机数据添加
        series[eventIndex].data = [
          {
            name: center[centerIndex].name,
            value: center[centerIndex].value,
          },
        ];
        options.value = _option;
      }, 5000);
    });
}
onMounted(async () => {
  await init();
});
onUnmounted(() => {
  timer && clearInterval(timer);
});
</script>

<style lang="scss" scoped>
.charts {
  width: 800px;
  height: 600px;
}
</style>
