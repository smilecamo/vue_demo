// 1. Define route components.
// These can be imported from other files
const modules = import.meta.glob('./pages/*.vue')
import { createWebHistory, createRouter } from "vue-router";
import Transfer from "./pages/Transfer.vue";
import Message from "./pages/Message.vue";
import index from "./pages/index.vue";
import WatchPKWatchEffect from "./pages/WatchPKWatchEffect.vue";
import Steps from "./pages/Steps.vue";
import Teleport from "./pages/Teleport.vue";
import WaterFall from "./pages/WaterFall.vue";
import Fragment from "./pages/Fragment.vue";
import TimeSeleteList from "./pages/TimeSeleteList.vue";
import Table from "./pages/Table.vue";
import Transition from "./pages/Transition.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
// let routes = []
const routes = [
  { path: "/", component: index },
  { path: "/Transfer", component: Transfer },
  { path: "/Message", component: Message },
  { path: "/WatchPKWatchEffect", component: WatchPKWatchEffect },
  { path: "/Steps", component: Steps },
  { path: "/Teleport", component: Teleport },
  { path: "/WaterFall", component: WaterFall },
  { path: "/Fragment", component: Fragment },
  { path: "/TimeSeleteList", component: TimeSeleteList },
  { path: "/Table", component: Table },
  { path: "/Transition", component: Transition },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 5. Create and mount the root instance.
export default router;
export { routes };
