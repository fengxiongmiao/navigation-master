// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import axios from 'axios'
import qs from 'qs'

// import VueScrollmagic from 'vue-scrollmagic'
// Vue.use(VueScrollmagic);
import gsap from 'gsap'
Vue.prototype.gsap = gsap;


//路由中添加头部head管理
import Meta from 'vue-meta'
Vue.use(Meta);

Vue.prototype.axios = axios;    //全局注册，使用方法为:this.axios
Vue.prototype.qs = qs;          //全局注册，使用方法为:this.qs


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
