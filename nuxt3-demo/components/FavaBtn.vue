<template>
  <div>
    <n-button
      size="tiny"
      :type="is_fava ? 'primary' : 'tertiary'"
      :loading="loading"
      @click="handleFava"
      >收藏</n-button
    >
  </div>
</template>

<script setup>
import {NButton,createDiscreteApi} from 'naive-ui'
const props = defineProps({
  fava:{
    type:Boolean,
  },
  id:{
    type:Number,
  },
  type:{
    type:String,
  },
})
const is_fava = ref(props.fava)
const loading = ref(false)
const handleFava =  () => {
  useHasAuth(async()=>{
    loading.value = true
  const data = {goods_id:props.id,type:props.type}
  const {error} = await is_fava.value  ?useUserUnCollect(data) : useUserCollect(data)
  loading.value = false
  if(error){
    return
  }
  is_fava.value = !is_fava.value
  const {message} = createDiscreteApi(['message'])
  const msg = is_fava.value?'收藏':'取消收藏'
  message.success(msg+'成功')
  })

}
</script>

<style lang="scss" scoped></style>
