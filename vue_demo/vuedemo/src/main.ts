import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./route/index";
const app = createApp(App)
app.use(router).use(createPinia())
app.mount("#app");
