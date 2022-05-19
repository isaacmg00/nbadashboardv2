import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import News from "./views/News.vue";
import Games from "./views/Games.vue";
import Standings from "./views/Standings.vue";
import SignUp from "./views/SignUp.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: SignUp,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/standings",
    name: "Standings",
    component: Standings,
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
