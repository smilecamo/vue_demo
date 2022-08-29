// 如果登录的话 不能进入登录界面
export default defineNuxtRouteMiddleware((to, form) => {
  const token = useCookie("token");
  if (token.value && to.path === "/login") {
    return "/";
  }
});
