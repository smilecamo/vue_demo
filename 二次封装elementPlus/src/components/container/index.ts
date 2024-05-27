import { App } from "vue";
import container from "./src/index.vue";
export default {
  install(app: App) {
    app.component("m-container", container);
  },
};
