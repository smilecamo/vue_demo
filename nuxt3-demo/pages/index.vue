<template>
  <div>
    <GlobalLoading :pending="pending" :error="error">
      <template v-for="item of data" :key="item.type">
        <Banner v-if="item.type === 'swiper'" :data="item.data"></Banner>
        <ImageNav
          v-else-if="item.type === 'icons'"
          :data="item.data"
        ></ImageNav>
        <ImageAD
          v-else-if="item.type === 'imageAd'"
          :data="item.data"
        ></ImageAD>
        <ListCard
          v-else-if="item.type === 'list'"
          :data="item.data"
          :title="item.title"
        ></ListCard>
        <ListCard
          v-else-if="item.listType === 'group'"
          :data="item.data"
          :title="item.title"
          :type="item.listType"
        ></ListCard>
      </template>
    </GlobalLoading>
  </div>
</template>

<script setup>
const { data, pending, error } = await getIndex();
</script>
