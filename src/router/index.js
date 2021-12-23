import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Achievement from "../views/Achievement.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/achievement/:id',
    name: 'Achievement',
    component: Achievement
},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
