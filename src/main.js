import Vue from "vue";
import VueSweetalert2 from 'vue-sweetalert2';
import Axios from 'axios';
import vueJquery from 'vue-jquery';
import VueEvents from 'vue-events';
import accounting from 'accounting';
import VueGoodTablePlugin from 'vue-good-table';
import moment from 'moment';
import money from 'v-money';
import VModal from 'vue-js-modal';

import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/plugins/i18n";
import {onRandom,onBehind} from "@/plugins/hadish";
import settings from '@/config/app';
import addFunction from '@/config/addFunction';
import {getAuthToken,getUserInfo,logoutUser,setAuthToken} from '@/config/auth';


require('es6-promise').polyfill();
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(vueJquery);
Vue.use(VueEvents);
Vue.use(VueGoodTablePlugin);
Vue.use(money, {precision: 4});
Vue.use(VModal);

// global variable
Vue.prototype.$http = Axios;
Vue.prototype.$accounting = accounting;
Vue.prototype.$moment = moment;
Vue.prototype.$settings = settings;
Vue.prototype.$addFunction = addFunction;
Vue.prototype.$getAuthToken = getAuthToken;
Vue.prototype.$getUserInfo = getUserInfo;
Vue.prototype.$logoutUser = logoutUser;
Vue.prototype.$setAuthToken = setAuthToken;
Vue.prototype.$onRandom = onRandom;
Vue.prototype.$onBehind = onBehind;


const token = getAuthToken();
if (token) {
  setAuthToken(token);
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
