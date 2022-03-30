<template>
<button class=" button normal">正常</button>
<button class="button error">失败</button>
<button class="btn2">3d</button>
<button class="btn3">3dddd</button>
</template>

<style scoped>
.button{
  margin-inline-end: 10px;
  height: 30px;
  border: 0;
  border-radius: 4px;
  padding: 0 20px;
}
.normal{
  background: #fff;
  box-shadow: inset 1px 0 #a2a9b6,inset -1px 0 #a2a9b6,inset 0 1px #a2a9b6,inset 0 -1px #a2a9b6;
}
.button:active{
  box-shadow: inset 0 0 0 999px rgba(0,0,0,.1)
}
.btn2{
  width: 100px;
  height: 36px;
  border: 1px solid #a0b3d6;
  background-color: #f0f3f9;
  box-shadow: 1px 1px #afc4ea, 2px 2px #afc4ea, 3px 3px #afc4ea;
}
.btn2:active{
  transform: translate(1px,1px);
  box-shadow: 1px 1px #afc4ea,2px 2px #afc4ea;
}
.btn3{
  width: 100px;
  height: 36px;
  border: 1px solid #a0b3d6;
  background-color: #f0f3f9;
  box-shadow: 1px 1px #afc4ea, 2px 2px #afc4ea,3px 3px #afc4ea;
}
</style>