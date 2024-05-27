<template>
  <div class="gl">
    <charts :options="options"></charts>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "echarts-gl";
import charts from "@src/components/charts.vue";

const options = ref({});
const rootPath = "./image/";
const init = () => {
  console.log(`${rootPath}datav-gl-texture.jpg`);
  options.value = {
    // 3d地球配置组件
    globe: {
      baseTexture: `${rootPath}datav-gl-texture.jpg`, // 地球的纹理也就是展示什么样子
      heightTexture: `${rootPath}datav-gl-texture.jpg`, // 高度贴图 更有层次感
      environment: `${rootPath}star-bg.jpg`, // 背景贴图 环境贴图
      displacementScale: 0.02, // 地球顶点位移的大小 让高低分辨更加明显
      shading: "realistic", // 着色效果 真实感
      realisticMaterial: {
        // 真实感相关配置
        roughness: 0.5, // 介于光滑-粗糙
      },
      light: {
        // 光源
        main: {
          // 太阳光
          intensity: 1,
          // color: "red",
        },
      },
    },
  };
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.gl {
  width: 800px;
  height: 400px;
}
</style>
