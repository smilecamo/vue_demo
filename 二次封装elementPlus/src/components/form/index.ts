import { App } from "vue";
import form from "./src/index.vue";
import { IFormOptions } from "./types/index";
export type { IFormOptions };
export default {
  install(app: App) {
    app.component("m-form", form);
  },
};
