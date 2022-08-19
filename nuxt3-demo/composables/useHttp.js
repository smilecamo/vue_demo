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
  return options;
}
// 封装的网络请求
export const useHttp = async (key, url, options = {}) => {
  options = useGetOptions(options);
  options.key = key;
  let res = await useFetch(url, {
    ...options,
    // 响应的拦截配置
    transform: (data) => {
      return data.data;
    },
  });
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
