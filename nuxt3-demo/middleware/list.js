const t = {
  'course':'课程',
  'book':'电子书',
  'group':'拼团',
  'flashsale':'秒杀',
  'live':'直播',
  'column':'专栏',
}
export default defineNuxtRouteMiddleware((to,form)=>{
  const {type,page} = to.params
  //  Object.keys(t) 获取对象的key 数组
  // .entries(type)  数组中含有
  // .isNaN（）  数字字符转数字成功
  if(Object.keys(t).entries(type) && !isNaN(+page)){
    const title = t[type] + '列表'
    useHead({title})
    to.meta.title = title
    return true
  }
  return abortNavigation('页面不存在')
})