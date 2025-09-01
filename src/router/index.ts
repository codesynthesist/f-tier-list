import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ListPage from '@/views/ListPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list',
    component: ListPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
