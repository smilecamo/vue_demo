import { CommonServerOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dotenv, { DotenvParseOutput } from "dotenv";
import fs from "fs"; // 需要安装 @types/node
// https://vitejs.dev/config/

export default defineConfig((mode) => {
  // mode.mode 获取mode环境是development还是production
  const modeEnv = mode.mode;
  const envFileName: string = ".env";
  const curEnvFileName = `${envFileName}.${mode.mode}`; // .env.production
  // 在配置文件中获取环境变量
  const envData = fs.readFileSync(curEnvFileName); // 通过fs同步读取数据
  const envMap: DotenvParseOutput = dotenv.parse(envData); //将文件流转为键值对的形式
  let server: CommonServerOptions = {};
  if (modeEnv === "development") {
    // 开发者环境
    console.log("开发者环境");
    server = {
      host: envMap.VITE_HOST,
      port: Number(envMap.VITE_PORT),
      proxy: {
        [envMap.VITE_BASE_URL]: {
          target: envMap.VITE_PROXY_DOMAIN,
        },
      },
    };
    console.log("我是开发者环境", server);
  } else if (modeEnv === "production") {
    // 生产者环境
    server = {
      host: envMap.VITE_HOST,
      port: Number(envMap.VITE_PORT),
    };
    console.log("我是生产者环境");
  }
  return {
    plugins: [vue()],
  };
});
