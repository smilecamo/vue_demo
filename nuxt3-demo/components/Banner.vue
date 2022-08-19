<template>
  <n-carousel show-arrow class="rounded cursor-pointer mb-6">
    <img
      v-for="(item) of data" :key="item.src"
      class="carousel-img"
      :src="item.src"
      @click="$openUrl(item)"
    >
  </n-carousel>
</template>

<script setup>
import { NCarousel} from 'naive-ui'
const props = defineProps({
  data:{
    type:Array
  }
})
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>