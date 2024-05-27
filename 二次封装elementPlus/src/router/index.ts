import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import container from "../components/container/src/index.vue";

// 动态导入页面组件
const modules = import.meta.glob("../pages/*/*.vue");

// 初始化路由配置
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: container,
    children: [],
  },
];

// 遍历每个模块并添加到路由配置中
for (const path in modules) {
  const match = path.match(/\.\.\/pages\/([^\/]+)\/index\.vue/);
  if (match) {
    const routePath = `/${match[1]}`;
    const route: RouteRecordRaw = {
      path: routePath,
      component: modules[path],
    };
    (routes[0].children as RouteRecordRaw[]).push(route);
  }
}

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
