import Vue from 'vue'
import Router from 'vue-router'
import Header from '../pages/header'
import Body from '../pages/body'
import Footer from '../pages/footer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/body',
      name: 'Body',
      component: Body
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
