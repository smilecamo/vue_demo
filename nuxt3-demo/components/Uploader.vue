<template>
  <ClientOnly>
  <!-- 客户端渲染的插槽 适合loading -->
  <template #fallback>
    <div class="border rounded flex justify-center items-center" style="width:94px;height: 94px;">
      <n-spin show></n-spin>
    </div>
  </template>
    <n-upload
      :action="action +'/upload'"
      :headers="headers"
      :data="data"
      v-model:file-list="fileList"
      :max="max"
      :multiple="multiple"
      list-type="image-card"
      :on-error="handleError"
      :on-finish="handleSuccess"
    />
  </ClientOnly>
</template>

<script setup>
import { NUpload,NSpin,createDiscreteApi } from "naive-ui";
const props = defineProps({
  data: Object,
  max: {
    type:Number,
    default:1
  },
  multiple:{
    type:Boolean,
    default:false
  },
  modelValue: [String, Array],
});
// 上传列表
const fileList = ref([]);
const { action, headers } = useUserUpload();
// 初始化传进来的图片地址
initFileList();
function initFileList() {
  // 如果是数组
  if(Array.isArray(props.modelValue)){
    fileList.value =  props.modelValue.map((item=>{
      return {
      id: item,
      name: item,
      status: "finished",
      url:item
    }
    }))
  }else{
    fileList.value = [
    {
      id: props.modelValue,
      name: props.modelValue,
      status: "finished",
      url:props.modelValue
    },
  ];
  }

}
const handleError = (e) => {
  const {message} = createDiscreteApi(['message'])
  message.error('上传图片失败')
  console.log(e);
}
const emit = defineEmits(['update:modelValue'])
const handleSuccess = (e) => {
  const {file,event} = e
  const response = JSON.parse(event.target.response)
  const imgUrl = response.data
  file.url = imgUrl
  return file
}
watch(()=>fileList,(newValue)=>{
  const urls = []
  newValue.value.length && newValue.value.forEach(element => {
    if(element.status == 'finished'){
      urls.push(element.url)
    }
  });
  emit('update:modelValue', props.multiple ? urls||[] : urls[0] || '')
},{
  deep:true
})
</script>

<style lang="scss" scoped></style>
