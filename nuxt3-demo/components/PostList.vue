<template>
  <div class="p-4 text-gray-500">
    <div>
      <n-tag v-if="item.is_top" :bordered="false" type="success" size="small">
        置顶
      </n-tag>
      {{ item.desc.text }}
    </div>
    <div class="flex mt-4 max-w-[600px]">
      <UiImage
        class="mr-2 mb-3 rounded cursor-pointer"
        v-for="(img, imgI) of item.desc.images"
        :src="img"
        :key="imgI"
        alt="帖子图片"
        :width="item.desc.images.length == 1 ? 300 : 150"
        :height="item.desc.images.length == 1 ? 200 : 100"
      />
    </div>
    <div class="mt-4 flex items-center">
      <n-button
        secondary
        strong
        size="tiny"
        :type="item.issupport ? 'primary' : 'default'"
        :loading="isLoading"
        @click="handleSupPost(item)"
      >
        <template #icon>
          <n-icon>
            <ThumbsUpOutline></ThumbsUpOutline>
          </n-icon>
        </template>
        点赞{{ item.support_count }}
      </n-button>
      <n-button secondary strong size="tiny" class="ml-2">
        <template #icon>
          <n-icon>
            <ChatboxEllipsesOutline></ChatboxEllipsesOutline>
          </n-icon>
        </template>
        评论{{ item.comment_count }}
      </n-button>
      <n-button text class="ml-2" size="tiny">
        作者：{{ item?.user?.name }}
      </n-button>
      <n-button class="ml-2" type="error" size="tiny" 
      :loading="delLoading"
      @click="handleSupPostDel"
      >
        删除
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { NTag, NButton, NIcon, createDiscreteApi } from "naive-ui";
import { ThumbsUpOutline, ChatboxEllipsesOutline } from "@vicons/ionicons5";
const props = defineProps({
  item: {
    type: Object,
  },
});
const { handleSupPost, isLoading } = supPost();
const emits = defineEmits(['delete'])
const delLoading = ref(false);
// 删除帖子
const handleSupPostDel = () => {
  delLoading.value = true;
  const { dialog,message } = createDiscreteApi(["dialog"]);
  dialog.warning({
    title: "警告",
    content: "你确定删除？",
    positiveText: "确定",
    negativeText: "不确定",
    onPositiveClick: async () => {
      emits('delete',{
        id:props.item.id,
        success(){
          delLoading.value = false;
          message.success('成功')
        },
        fail(){
          delLoading.value = false;
        }
      })
    },
    onNegativeClick: () => {
      delLoading.value = false;
    }
  });
};
</script>
