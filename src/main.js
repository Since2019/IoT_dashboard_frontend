import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

// Axios, READMORE: https://www.jianshu.com/p/4a872643f5ea
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueAxios, axios);


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

