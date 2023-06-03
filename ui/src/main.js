import Vue from 'vue';
import VueMeta from 'vue-meta';
import axios from 'axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import i18n from './i18n';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueMeta);

const dark = localStorage.dark === 'true';
if (dark === true) {
  vuetify.framework.theme.dark = true;
  store.commit('setTheme', true);
}
else {
  vuetify.framework.theme.dark = false;
  store.commit('setTheme', false);
}

if (localStorage.accessToken && localStorage.refreshToken) {
  store.commit('refresh', {
    accessToken: localStorage.accessToken,
    refreshToken: localStorage.refreshToken
  });
}

axios.defaults.baseURL = 'http://127.0.0.1:8081/api';
// axios.defaults.baseURL = 'https://imoogoo.com/api';
axios.defaults.headers.Authorization = `Bearer ${localStorage.accessToken}`;

new Vue({
  vuetify,
  router,
  i18n,
  store,
  render: (h) => h(App)
}).$mount('#app');
