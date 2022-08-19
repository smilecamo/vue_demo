// 全局加载loading

import { createDiscreteApi } from "naive-ui";
export default defineNuxtPlugin((nuxtApp) => {
  const bar = ref(null);
  nuxtApp.hook("app:beforeMount", () => {
    // 页面初始化之前  Client
  });
  nuxtApp.hook("app:mounted", () => {
    // 页面初始化  Client
    if (!bar.value) {
      // 初始化 loadingBar
      const { loadingBar } = createDiscreteApi(["loadingBar"]);
      bar.value = loadingBar
    }
  });
  nuxtApp.hook("page:start", () => {
    // 页面开始加载  Client 
    // 加载条开始
    bar.value?.start()
  });
  nuxtApp.hook("page:finish", () => {
    // 页面完成加载  Client
    // 加载条完成
    setTimeout(() => {
      bar.value?.finish()
    }, 150);
  });
  nuxtApp.hook("vue:error", () => {
    // 报错  Server & Client
    // process.client 客户端
    if(process.client){
      setTimeout(() => {
        bar.value?.finish()
      }, 150);
    }
  });
});
