import Vue from "vue";
import VueSweetalert2 from 'vue-sweetalert2';
import Axios from 'axios';
import vueJquery from 'vue-jquery';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/plugins/i18n";
import settings from '@/config/app';
import {getAuthToken,getUserInfo,logoutUser} from '@/config/auth';


require('es6-promise').polyfill();
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(vueJquery);

// global variable
Vue.prototype.$http = Axios;
Vue.prototype.$settings = settings;
Vue.prototype.$getAuthToken = getAuthToken;
Vue.prototype.$getUserInfo = getUserInfo;
Vue.prototype.$logoutUser = logoutUser;


// const token = localStorage.getItem('token');
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
// }

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
