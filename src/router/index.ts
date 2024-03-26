import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/components/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
