import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { LmgUtil } from "./utils/imgUtils";
LmgUtil.storageImgList();
createApp(App).mount("#app");
console.log(import.meta.env);
