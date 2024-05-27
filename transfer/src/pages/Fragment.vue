<template>
  <div>一次性渲染10万条数据</div>
  <ul id="ul"></ul>
</template>

<script setup>
import { onMounted } from "vue";
let total = 10 * 10 * 1000;
let steps = 200;
let count = Math.ceil(total / steps);
let loopCount = 0;

let add = () => {
  let ul = document.getElementById("ul");
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < steps; i++) {
    const li = document.createElement("li");
    li.innerHTML = Math.ceil(Math.random() * total * total);
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);
  loopCount++;
  loop();
};
let loop = () => {
  if (loopCount < count) {
    window.requestAnimationFrame(add);
  }
};

onMounted(() => {
  loop();
});
</script>

<style lang="scss" scoped></style>
