<template>
  <n-carousel  dot-type="line" class="rounded cursor-pointer mb-6">
    <img
      v-for="(item) of data" :key="item.src"
      class="carousel-img h-[100%]"
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
  height: 130px;
  object-fit: cover;
}
</style>