import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';

import './plugins/vuetify';
import App from './App.vue';
import router from './routes';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');