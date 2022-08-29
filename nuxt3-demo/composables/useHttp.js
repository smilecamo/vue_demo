import {
  createDiscreteApi
} from "naive-ui";
const globalHeader = {
  baseURL: "http://demonuxtapi.dishait.cn/pc",
  headers: {
    appid: "bd9d01ecc75dbbaaefce",
  },
};
// 请求拦截配置
function useGetOptions(options) {
  options.baseURL = options.baseURL ?? globalHeader.baseURL;
  options.headers = options.headers ?? {
    appid: globalHeader.headers.appid,
  };
  options.initialCache = options.initialCache ?? false;
  options.lazy = options.lazy ?? false;
  // 从cookie中取得token 设置进去
  const token = useCookie('token')
  if(token.value){
    options.headers.token = token.value
  }
  return options;
}
// 封装的网络请求
export const useHttp = async (key, url, options = {}) => {
  options = useGetOptions(options);
  options.key = key;
  if(options.$){
    let data= ref()
    let error= ref()
    await $fetch(url,options).then(res=>{
      data.value = res.data
    }).catch(err=>{
      const msg = err?.data?.data
      if(process.client && msg){
        const { message} = createDiscreteApi(["message"]);
        message.error(msg);
      }
      error.value = msg
    })
    return {
      data,
      error
    }
  }
  let res = await useFetch(url, {
    ...options,
    // 响应的拦截配置
    transform: (data) => {
      return data.data;
    },
  });
  // 全局错误处理 客户端
  if(process.client && res.error.value){
    const { message} = createDiscreteApi(["message"]);
    const msg = res.error.value?.data?.data
    message.error(msg);
    return res
  }
  return res
};
// 简化get
export const useHttpGet = async function(key,url,options={}){
  return useHttp(key,url,{...options,method:'GET'})
}
// 简化post
export const useHttpPost = async function(key,url,options={}){
  return useHttp(key,url,{...options,method:'POST'})
}
