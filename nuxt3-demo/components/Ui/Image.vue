<template>
  <ClientOnly>
    <img :src="src" v-bind="$attrs" :style="{'object-fit': objectFit}" @error="onImageError"/>
  </ClientOnly>
</template>

<script setup>
defineProps({
  src: String,
  'objectFit': {
    type: String,
    default: "cover",
  },
});
const onImageError = e => {
  e.target.src = '/noImage.webp'
}
</script>

<style lang="scss" scoped></style>
