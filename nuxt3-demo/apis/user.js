// 登录
export  function loginApi(body){
  return useHttpPost('login','/login',{
    body
  })
}
// 注册
export  function regApi(body){
  return useHttpPost('login','/reg',{
    body
  })
}
// 获取用户信息
export  function  getUserInfoApi(){
  return useHttpGet('getUserInfoApi','/getinfo',{
    $:true
  })
}
// 登出
export  function  userLogoutApi(){
  return useHttpPost('getUserInfoApi','/logout')
}
// 获取验证码
export  function  userGetCaptcha(phone){
  return useHttpPost('userGetCaptcha','/get_captcha',{
    body:{
      phone
    }
  })
}
// 绑定手机号
export  function  userBindMobile(body){
  return useHttpPost('userBindMobile','/bind_mobile',{
    body
  })
}
// 找回密码
export  function  userForgetApi(body){
  return useHttpPost('userBindMobile','/forget',{
    body
  })
}
// 修改密码
export  function  userUserUpdatePasswordApi(body){
  return useHttpPost('userUpdatePassword','/update_password',{
    body
  })
}

// 获取学习记录
export function useUserHistory(params){
  return useHttpGet('userHistory',() => {
    let q = useQueryToString(params())
    return `/user_history/list${q}`
  })
}
// 获取购买记录
export function useUserOrderList(page){
  return useHttpGet('useUserOrderList',() => {
    return `/order/list/?page=${page}`
  })
}
// 获取我的考试记录
export function useUserTestList(page){
  return useHttpGet('useUserTestList',() => {
    return `/user_test/list?page=${page}`
  })
}
// 获取我的优惠卷记录
export function useUserCouponList(page){
  return useHttpGet('useUserCouponList',() => {
    return `/user_coupon?page=${page}`
  })
}
// 获取我的收藏
export function useUserFavaList(page){
  return useHttpGet('useUserFavaList',() => {
    return `/user_fava/?page=${page}`
  })
}
// 取消收藏
export function useUserUnCollect(body){
  return useHttpPost('userUnCollect','/uncollect',{
    body
  })
}
// 更新用户信息
export function useUserUpdateInfo(body){
  return useHttpPost('userUpdateInfo','/update_info',{
    body
  })
}
// 更新用户信息
export function useUserUpload(){
  const token = useCookie('token')
  return {
    action: globalHeader.baseURL,
    headers:{
      appid:globalHeader.headers.appid,
      token:token.value
    }
  }
}