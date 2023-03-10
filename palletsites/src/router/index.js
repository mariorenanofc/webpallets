import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HomeView.vue';
import Form from '../views/FormView.vue';
import DataView from '../views/DataView.vue';
import About from '../views/AboutView.vue';

Vue.use(VueRouter);

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
    component: DataView,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
