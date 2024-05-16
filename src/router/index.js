import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/UserLogin.vue') 
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/UserRegister.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/UserDashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import('../components/ConfirmUser.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = sessionStorage.getItem('isLoggedIn');

  if (requiresAuth && !isAuthenticated) {
      next({ name: 'Login' });
  } else {
      next();
  }
});

export default router;
