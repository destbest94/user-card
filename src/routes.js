import VueRouter from 'vue-router';

import UsersPage from './components/UsersPage';
import MainPage from './components/MainPage';

export default new VueRouter({
  routes: [{
      path: '/',
      component: MainPage
    },
    {
      path: '/users',
      component: UsersPage
    }
  ],
  mode: 'history'
});