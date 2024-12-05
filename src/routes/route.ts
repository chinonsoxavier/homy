import { createRouter, createWebHistory } from "vue-router";
import HomeMainView from "../views/app/home/HomeMainView.vue";
import { agentRoutes } from "./agent";
import ListingsMainView from "../views/app/listings/ListingsMainView.vue";
// import { useUserStore } from "../utilities/store";

const routes = [
  ...agentRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("../views/app/auth/login/LoginMainView.vue"),
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("../views/app/auth/register/RegisterMainView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeMainView,
  },
  {
    path: "/listings/:id",
    name: "listings",
    component: ListingsMainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore();
//   console.log(from);
//   const role = userStore.user?.role;
//   // const isLoggedIn = userStore.user;
//   if (to.meta.requiresAuth && role != "agent") {
//     next({ name: "home" });
//     return;
//   } else {
//     next();
//   }
// });

export default router;
