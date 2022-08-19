import Vue from "vue"

import Router from 'vue-router'
import Home from "./pages/home"
import Index from "./pages/index"
import Product from "./pages/product";
import Detail from "./pages/detail";
import Card from "./pages/card";
import Order from "./pages/order";
import OrderList from "./pages/orderList";
import OrderPay from "./pages/orderPay";
import OrderConfirm from "./pages/orderConfirm";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "index",
          name: "index",
          component: Index
        },
        {
          path: "product/:id",
          name: "product",
          component: Product
        },
        {
          path: "detail/:id",
          name: "detail",
          component: Detail
        }
      ]
    },
    {
      path: "card",
      name: "card",
      component: Card
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "list",
          name: "order-list",
          component: OrderList
        },
        {
          path: "confirm",
          name: "order-confirm",
          component: OrderConfirm
        },
        {
          path: "pay",
          name: "order-pay",
          component: OrderPay
        }
      ]
    }
  ]
});