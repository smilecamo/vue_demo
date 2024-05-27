import { fileURLToPath, URL } from "node:url";
import fs from "node:fs";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
// 图片打包
const pluginImg = (limit = 4096) => {
  return {
    name: "pluginImg",
    async transform(code: any, id: any) {
      // code 是代码 id 是文件名
      if (process.env.NODE_ENV !== "development") return;
      if (!id.endsWith(".svg")) return;
      const start = await fs.promises.stat(id);
      if (start.size > limit) return;
      const buffer = await fs.promises.readFile(id);
      const base64 = buffer.toString("base64");
      const dataUrl = `data:image/png;base64,${base64}`;
      return {
        code: `export default ${dataUrl}`,
      };
    },
  };
};

export default defineConfig(({}) => {
  return {
    plugins: [vue(), vueJsx(), VueDevTools(), pluginImg()],
    build: {
      rollupOptions: {
        // 打包输出文件
        output: {
          // output.entryFileNames 该选项用于指定 chunks 的入口文件模式，其值也可以是一个函数，对每个入口 chunk 调用以返回匹配模式。这种模式支持以下的占位符：
          entryFileNames: `js/[name].[hash].js`,
          // 该选项用于对代码分割中产生的 chunk 自定义命名，其值也可以是一个函数，对每个 chunk 调用以返回匹配模式。这种模式支持以下的占位符：
          chunkFileNames: `chunk/[name].[hash].js`,
          // assetFileNames 该选项的值是一个匹配模式，用于自定义构建结果中的静态资源名称，或者值为一个函数，对每个资源调用以返回匹配模式。这种模式支持以下的占位符：
          // [ext] 通常用于配置输出文件的扩展名。
          assetFileNames: (assetInfo) => {
            const assetInfoName = assetInfo.name;
            if (assetInfoName!.endsWith(".css")) {
              return "css/[name].[hash].css";
            }
            if (
              [".jpg", ".jpeg", ".svg", ".png", ".weap", ".gif"].some((ext) => {
                assetInfoName!.endsWith(ext);
              })
            ) {
              return "img/[name].[hash].js";
            }
            return "asset/[name].[hash].[ext]";
          },
        },
      },
      // assetsInlineLimit小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
      assetsInlineLimit: 4096,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
// https://vitejs.dev/config/
// export default defineConfig({

// })
