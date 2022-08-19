<template>
<div class="dropdown" ref='dropdownRef'>
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" @click.prevent="isOpenToggle">
    {{title}}
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="display:block" v-if="isOpen">
    <slot></slot>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent,ref,watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  props:{
    title: {
      type: String,
      required: true
    }
  },
  setup(){
    const isOpen = ref(false)
    // ref的联合类型  获取节点
    const dropdownRef = ref<null | HTMLElement>(null)
    const isOpenToggle = ()=>{
      isOpen.value = !isOpen.value
    }
    // const handle = (e: MouseEvent)=>{
    //   if(dropdownRef.value){
    //     // 判断是否包含 node.contains(otherNode)
    //     if(!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value){
    //       isOpen.value = false
    //     }
    //   }
    // }
    // onMounted(()=>{
    //   document.addEventListener('click',handle)
    // })
    // onUnmounted(()=>{
    //   document.removeEventListener('click',handle)
    // })
    const clickOutside = useClickOutside(dropdownRef)
    watch(clickOutside,()=>{
      if(isOpen.value && clickOutside.value ){
        isOpen.value = false
      }
    })

    return {
      isOpen,
      isOpenToggle,
      dropdownRef
    }
  }
})
</script>

<style scoped>

</style>