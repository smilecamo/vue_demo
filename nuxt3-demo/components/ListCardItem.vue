<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi v-for="item of pData" :key="item.id" class="mb-4 cursor-pointer">
      <n-card footer-style="padding:0">
        <template #cover>
          <img :src="item.cover" class="h-[192px]" />
        </template>
        <div class="mt-2 truncate">
          <span class="text-lg font-bold w-[100%]">{{ item.title }}</span>
          <div class="flex items-end">
            <UiPrice :value="item.price"></UiPrice>
            <UiPrice :value="item.t_price" through class="ml-2"></UiPrice>
          </div>
        </div>
        <template #footer v-if="type === 'group'">
          <!-- Nuxt 提供了<ClientOnly>仅在客户端故意渲染组件的组件。要仅在客户端上导入组件，请在仅客户端插件中注册该组件。 -->
          <ClientOnly>
            <div class="bg-yellow-200 px-2 py-2 rounded-b flex items-center">
              拼团中
              <div class="ml-auto">
                <UiTimeDown :time="item.end_time"></UiTimeDown>
              </div>
            </div>
          </ClientOnly>
        </template>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup>
import { NGrid, NGi, NCard } from "naive-ui";
const props = defineProps({
  data: {
    type: Array,
  },
  type: {
    type: String,
    default: "course",
  },
});
const pData = ref(props.data ?? []);
if (props.type == "group") {
  // page=1&usable=1&limit=8
  const { data } = await getGroupList({
    page: 1,
    usable: 1,
    limit: 8,
  });
  pData.value = data.value?.rows ?? [];
}
</script>

<style scoped></style>
