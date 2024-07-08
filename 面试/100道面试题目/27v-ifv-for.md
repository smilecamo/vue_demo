# vue2
v-for 比 v-if 高
当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你只想为部分项渲染节点时，这种优先级的机制会十分有用，如下：
# vue3
v-if 比 v-for高
当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。
- 这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名
- 因为这样二者的优先级不明显
```js
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>S
```