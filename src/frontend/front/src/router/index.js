import { createRouter, createWebHistory } from "vue-router";
import MultiSearch from "../views/MultiSearch.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MultiSearch,
    },
  ],
});

export default router;
