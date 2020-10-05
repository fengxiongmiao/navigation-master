// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from './pages/header'
import Body from './pages/body'
import Footer from './pages/footer'
// import router from './router'
import router from './router/router.js'

//路由中添加头部head管理
import Meta from 'vue-meta'
Vue.use(Meta);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
/* eslint-disable no-new */
new Vue({
  el: '#xinmove-header',
  router,
  components: { Header },
  template: '<Header/>'
});
new Vue({
  el: '#xinmove-body',
  router,
  components: { Body },
  template: '<Body/>'
});
new Vue({
  el: '#xinmove-footer',
  router,
  components: { Footer },
  template: '<Footer/>'
});
