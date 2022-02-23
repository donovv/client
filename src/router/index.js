import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import notFound from '../views/notfound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/:pathMatch(.*)',
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (navigator.userAgent.includes('Mobile') || window.innerWidth < 500) store.commit('setMobile');
  next();
});

export default router;
