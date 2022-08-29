export default defineNuxtRouteMiddleware((to,form)=>{
  // 鉴权
  const {type,page} = to.params
  // 没有搜索词 提示没有搜索词
  if(to.query?.keywords == ''){
    return abortNavigation('请输入搜索值')
  }
  // console.log(isNaN(+page));
    // 没有页码提示页码错误
  // if(isNaN(+page)){
  //   return abortNavigation('页码不正确')
  // }
  // 搜索类型没有 提示没有类型
  if(!['course','column'].includes(type)){
    // 抛出错误
    return abortNavigation('类型不正确')
  }
})