<template>
  <!--group 分组css  -->
  <div
    class="group relative p-0.5 border rounded-xl border-white duration-500 hover:bg-red-100/40"
  >
    <div>
      <!-- 搜索图标 -->
      <m-svg-icon
        name="search"
        color="#707070"
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
      ></m-svg-icon>
      <!-- 搜索框 -->
      <input
        class="block w-full text-sm text-zinc-900 pl-4 h-[44px] rounded-lg outline-none bg-zinc-100 group-hover:bg-white"
        type="text"
        placeholder="搜索"
      />
      <!-- 搜索图标 -->
      <m-svg-icon
        name="input-delete"
        color="#707070"
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] right-9 duration-500 cursor-pointer opacity-0 group-hover:opacity-100"
      ></m-svg-icon>
      <!-- 分割线 -->
      <div
        class="w-[1px] opacity-0 h-1.5 absolute bg-zinc-200 translate-y-[-50%] top-[50%] right-[62px] group-hover:opacity-100"
      ></div>
      <!-- 下拉框 搜索内容 -->
      <Transition name="slide"> 
      <div class="opacity-0 group-hover:opacity-100 max-h-[360px] w-full bg-white rounded absolute top-[56px] left-0 z-20 overflow-auto text-base p-2 border border-zinc-200 duration-200 scrollbar-thin scrollbar-thumb-transparent">
        <slot name="dropdown" />
      </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
// css group 分组css group-input 分组下的css
</script>

<style lang="scss" scoped>
.slide-enter-active,.slide-leave-active{
 transition: all 0.5ms;
}
.slide-enter-form,.slide-leave-to{
  transform: translateX(40px);
  opacity: 0;
}
</style>
