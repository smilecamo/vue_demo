<template>
  <div>
    <UiCard>
      <UiCardHeader class="flex items-center">
        <n-tag type="success" size="small">
          {{ type[item.type] }}
        </n-tag>
        <n-image
          class="w-[60px] h-[25px] rounded ml-4"
          :src="item.goods.cover"
        ></n-image>
        <span class="ml-3">{{ item.goods.title }}</span>
        <div class="ml-auto">
          <n-button size="tiny" type="primary">查看</n-button>
          <n-button
            size="tiny"
            type="error"
            class="ml-2"
            @click="unFava"
            :loading="favaLoading"
            >取消收藏</n-button
          >
        </div>
      </UiCardHeader>
    </UiCard>
  </div>
</template>

<script setup>
import { NButton, NTag, NImage, createDiscreteApi } from "naive-ui";
const props = defineProps({
  item: {
    type: Object,
  },
});
const type = {
  course: "课程",
  book: "电子书",
  column: "专栏",
  live: "直播",
};
const emits = defineEmits(["handleUnFava"]);
// 取消收藏加载状态
const favaLoading = ref(false);
// 取消收藏
const unFava = () => {
  const { dialog, message } = createDiscreteApi(["dialog",'message']);
  favaLoading.value = true;
  // useUserUnCollect
  dialog.warning({
    title: "警告",
    content: "你确定取消收藏？",
    positiveText: "确定",
    negativeText: "不确定",
    onPositiveClick: () => {
      favaLoading.value = false;
      emits("handleUnFava", {
        id: props.item.goods.id,
        type:props.item.type,
        success() {
          message.success("成功");
        },
        fail() {
          message.error("失败");
        },
      });
    },
    onNegativeClick: () => {
      favaLoading.value = false;
    },
  });
};
</script>

<style lang="scss" scoped></style>
