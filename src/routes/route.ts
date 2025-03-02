import { createRouter, createWebHistory } from "vue-router";
import HomeMainView from "../views/app/home/HomeMainView.vue";
import { agentRoutes } from "./agent";
import ListingsMainView from "../views/app/listings/ListingsMainView.vue";
import { useUserStore } from "../utilities/store";
import { computed } from "vue";



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
                                                                                                                                                    meta: { requiresGuest: true },
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("../views/app/auth/register/RegisterMainView.vue"),
    meta: { requiresGuest: true },
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
  routes,
});

// router.beforeEach(async(to, from, next) => {
//   const userStore = useUserStore();
//   console.log(from);
//   const role = userStore?.user.role;
//   const isLoggedIn = computed(() => Object.entries(userStore.user).length >0 ? true : false).value;
//   console.log(isLoggedIn);
//   const user = computed(() => userStore.user);
//     const accessToken = localStorage.getItem("access");
  
//      await userStore.initializeUser(accessToken);
//   console.log(user.value);
//   if (to.meta.requiresAuth && role != "agent") {
//     next({ name: "home" });
//     return;
//   } else if (to.meta.requiresGuest && isLoggedIn) {
//     next({name:"home"});
//   }
//   else {
//     next();
//   }
// });

export default router;
