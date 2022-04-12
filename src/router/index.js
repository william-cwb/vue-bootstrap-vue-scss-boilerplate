import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import Home2View from "../views/Home2View.vue";
import LoginView from "../views/LoginView.vue";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    component: HomeView,
    children: [
      {
        path: "",
        name: "home",
        component: Home2View,
      },
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
