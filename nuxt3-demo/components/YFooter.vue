<template>
  <div class="flex items-center justify-center bg-dark-100  h-[80px] text-gray-100">
      <div class="py-2 px-1 flex justify-center"> 
        <a href="#" v-for="i of 5" class="px-1 ">友情链接 {{i}}</a>
      </div>
  </div>
</template>