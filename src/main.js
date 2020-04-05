import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'typeface-roboto';
import router from './router.js';
import axios from  'axios';
import util from  './common/util';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.util = util;
Vue.prototype.toLink = function (link) {
  this.$router.push({path: link});
};

Vue.use(MuseUI);

new Vue({
  router,//引入vue-router
  render: h => h(App),
}).$mount('#app');
