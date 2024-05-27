<!-- import.meta.env 环境变量 -->

## 环境变量

在`vite`中，`import.meta.env`可以获取到环境变量
`import.meta.env`有五个默认的环境变量
BASE_URL:开发或生产环境服务的公共基础路径，可以在 `vite.config` 中通过 `base` 配置
DEV:true 表示当前处于开发者环境
PROD:true 表示当前处于生成者环境
MODE: 应用运行的模式 分为开发者和生产者 `development` 和 `production`
SSR: false 是否为服务器渲染

## 自定义环境变量

.env 备用环境变量,如果在开发或生产环境下找不到回来这个文件下找
.env.development 开发环境的环境变量
.env.production 生成环境下的环境变量
在 vite 中，环境变量应该以 `VITE_` 开头 如 `VITE_name`
在 ts 中通过 `import.meta.env.VITE_` 点不出来的话，可以在 d.ts 文件中重新声明一个 interface 进行合并

## vue-tsc

vue-tsc 是一个 TypeScript 编译器工具，专门用于 Vue 3 项目。它提供了对 .vue 文件进行类型检查的功能，并与 TypeScript 编译器 (tsc) 集成，以确保在开发 Vue 组件时可以获得完整的类型检查支持

--noEmit 标志表示仅进行类型检查，不生成编译后的文件。
