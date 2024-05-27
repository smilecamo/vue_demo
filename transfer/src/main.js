import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
// 第一种导入组件形式
// import UI from "../modules/ui";
// createApp(App).use(UI).mount("#app");

// 第二种导入组件形式
// import Transfer from "../modules/ui/Transfer";
// createApp(App).use(Transfer).mount("#app");

// 第三种导入组件形式
createApp(App).use(router).mount("#app");
