import Vue from 'vue'
import Router from "vue-router"
Vue.use(Router);
import Home from './pages/home'
import Parent from "./pages/Communication/parent.vue";
import VModel from "./pages/vmodel/index.vue";
import NextTick from "./pages/nextTick.vue";
import Slot from "./pages/slot.vue";
const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/parent",
      name: "Parent",
      component: Parent
    },
    {
      path: "/VModel",
      name: "VModel",
      component: VModel
    },
    {
      path: "/nextTick",
      name: "NextTick",
      component: NextTick
    },
    {
      path: "/slot",
      name: "Slot",
      component: Slot
    }
  ]
});

export default router;