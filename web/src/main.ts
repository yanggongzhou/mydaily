// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './router/index.ts'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI,{size:'small'})

import './assets/custom-font/iconfont.css'
import './assets/css/main.css'
import store from './store';
// import animated from "animate.css"
// Vue.use(animated)

import requestServices from './api/api.js'
Vue.config.productionTip = false;
Vue.prototype.$https = requestServices;
// import urls from "./api/urls";
// Vue.prototype.$urls = urls; // 其他页面在使用 URLS 的时候直接  this.$urls 就可以了
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
