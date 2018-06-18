import Vue from 'vue';
import VueWait from 'vue-wait'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

// Vue.use(VueWait)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
