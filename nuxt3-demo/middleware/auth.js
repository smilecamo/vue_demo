import {createDiscreteApi} from 'naive-ui'
export default defineNuxtRouteMiddleware((to, from)=>{
  const token = useCookie('token')
  const user = useUser()
  const route = useRoute()
  // 未登录
  if(!token.value){
    if(process.client){
      return navigateTo('/login?form='+route.fullPath)
    }
  }
  // 手机号未绑定
  const phone = user.value?.phone
  if(!phone){
    if(process.client){
      const {message} = createDiscreteApi(['message'])
      message.error('请先绑定手机号')
      return navigateTo('/bindPhone?form='+route.fullPath)
    }

  }
})