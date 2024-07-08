# 为什么什么要给元素增加 key ，就是为了辅助 diff 的过程

vue2 是全量 diff，key 会告知 vue 你的组件更新前后发生了什么变化，一旦你的数据全量发生了变化（数组变成新数组、对象变成新对象{引用地址完全变化了}）
vue3 简单 diff、快速 diff、双端 diff

# 代码优化

## 拆分组件 开放封闭原则

我们使用 vue-tools 分析工具，分析 vue 模块的更新情况
目的:为了状态颗粒度细化，减少 rerender
但是我们发现，数据在父组件中定义，就算我们做到完美，子组件的更新也会触发父组件的更新，如何才能更新子组件而不触发父组件的更新呢

> 新时代，使用 compositionAPI 面向切面,不要所有的状态都一股脑的往父组件上提，自定义 hooks,store,pinia,在对应组件中直接消费数据
> 


- 拆分组件，组件内更新数据
- 多个更新会合并,单元

## 分包

- 异步组件 defineAsyncComponent
- 手动分包 

```js
// 打包分chunk vite配置 等到用到的时候才会加载
import { splitVendorChunkPlugin } from "vite";

plugins:{
    splitVendorChunkPlugin(),
}
build:{
    rollupOptions:{
        output:{
            manualChunks:{
                'vue-common-lib':['vue','vue-router','pinia'],
                'react-common-lib':['react','react-dom','pinia'],
            }
        }
    }
}
```
