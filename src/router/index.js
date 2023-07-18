import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: () => {
        return { path: "/home" };
      },
    },
    ...routes,
    {
      path: "/:catchAll(.*)",
      component: () => import("../pages/404/index.vue"),
    },
  ],
});

export default router;
