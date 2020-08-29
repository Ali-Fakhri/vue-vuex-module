import Vue from 'vue';
import App from './App.vue';

import router from './appRouter';
import store from './store/store';

import { BootstrapVue } from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
