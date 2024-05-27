<script setup>
import { ref,onMounted } from 'vue'
import charts from '@src/components/charts.vue'
const options = ref({})
function init(){
    options.value={
  timeline: {
    axisType: 'category',//轴的类型 category 类目轴，适用于离散的类目数据 'time' 时间轴，适用于连续的时序数据，
    left: 0,
    right: 0,
    symbol: 'triangle',// 节点可以通过 'image://url' 设置为图片，其中 URL 为图片的链接，或者 dataURI。
    autoPlay: false,// 自动播放
    playInterval: 2000,// 表示播放的速度（跳动的间隔
    realtime: false,// 拖拽圆点是不是实时更新
    rewind: false,// 是否反向播放
    controlPosition: 'left',// 播放按钮放置位置
    currentIndex: 0,// 从第几项开始播放
    loop: false,// 是否循环播放
    // 线的配置
    lineStyle: {
      show: true,// 是否显示线
      type: "dashed"
    },

    label: {
      // 格式化label
      formatter: function (value, index) {
        return new Date(value).getFullYear()
      }
    },
    // 『控制按钮』的样式。『控制按钮』包括：『播放按钮』、『前进按钮』、『后退按钮』
    controlStyle: {
      show: true,// 是否展示
      showNextBtn: true,// 是否展示向前按钮
      // playIcon:'',// 播放按钮
    },
    // `timeline.data` 中的每一项，对应于 `options` 数组中的每个 `option`
    data: [{
      value: '2002-01-02',
      symbol: 'diamond',// 此项的图形的特别设置。
      symbolSize: 18,  // 此项的图形大小的特别设置。
    }, {
      value: '2007-01-02',
      symbol: 'roundRect',// 此项的图形的特别设置。
      symbolSize: 18,  // 此项的图形大小的特别设置。
    }],
  },
  xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name:'月份'
      }
    ],
    legend: {
      left: 'right',
      data: ['GDP', '房地产','厂商'],
      selected: {
        厂商: false,
      }
    },
    series: [ { name: 'GDP', type: 'bar' },
    { name: '房地产', type: 'pie',center:['75%',"35%"],radius:"28%",z:100 },],
    options: [
      {
        title: {
          text: '2002年统计值'
        },
        series: [
          { data: [150, 230, 224, 218, 135, 147, 260] },
          { data: [{
            name:'1',value:1
          },{
            name:'2',value:2
          },{
            name:'3',value:3
          },{
            name:'4',value:4
          }] },
        ]
      },
      {
        title: {
          text: '2007年统计值'
        },
        series: [
          { data: [1510, 2310, 2214, 2118, 1315, 1417, 2160] },
           { data: [{
            name:'5',value:5
          },{
            name:'6',value:6
          },{
            name:'7',value:7
          },{
            name:'8',value:8
          }] },
        ]
      },
    ]
}
}
onMounted(()=>{
    init()
})
</script>

<template>
  <charts :options="options" class="charts"></charts>
</template>

<style scoped>
.charts {
  width: 400px;
  height: 300px;
}
</style>
