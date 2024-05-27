<template>
  <!-- 小屏幕播放视频 -->
  <div class="small" id="small"></div>
  <!-- 大屏幕播放视频 -->
  <div class="big" id="big">
    <!-- Teleport to的节点 必须渲染出来
   -->
    <Teleport to="#small" :disabled="isMobile">
      <div id="mse"></div>
    </Teleport>
  </div>
  <!-- 固定区域监测是否在区域内 -->
  <div class="obs"></div>

  <!-- 滚动条 -->
  <div style="height: 2000px"></div>
</template>

<script setup>
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";
import { onMounted, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
let isMobile = ref(true);
onMounted(() => {
  let players = new Player({
    id: "mse",
    url: "https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
    poster:
      "https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
    width: "100%",
    height: "100%",
  });
  const { stop } = useIntersectionObserver(
    document.getElementById("big"),
    ([{ isIntersecting }]) => {
      isMobile.value = isIntersecting;
    }
  );
});
</script>

<style lang="scss" scoped>
.big {
  width: 800px;
  height: 450px;
}
.small {
  width: 400px;
  height: 225px;
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
