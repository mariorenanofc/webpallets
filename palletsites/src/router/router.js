import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/HomeView.vue';
import Form from '../views/FormView.vue';
import Data from '../views/DataView.vue';
import About from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/data',
    name: 'Data',
    component: Data,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
