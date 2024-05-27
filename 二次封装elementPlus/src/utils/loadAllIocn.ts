import { App } from "vue";
import { toLine } from "../utils/index";
import * as ElementPlusIconVue from "@element-plus/icons-vue";
// 加载所有的图标
export default {
  install(app: App) {
    for (const [key, component] of Object.entries(ElementPlusIconVue)) {
      app.component(`el-icon${toLine(key)}`, component);
    }
  },
};

// function ajaxOpen() {
//   return new Promise((reslove, reject) => {
//     ajax.open();
//   });
// }
