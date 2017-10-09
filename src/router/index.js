import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Admin from '@/components/Admin'
import Profile from '@/components/Profile'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    }
  ]
});
