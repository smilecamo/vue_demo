// .global 全局中间件 自动注册
export default  defineNuxtRouteMiddleware(async (to,form)=>{
  await userRefreshUserInfo()
})