import Vue from 'vue'
import Router from 'vue-router'
import Header from '../pages/header'
import Body from '../pages/body'
import Footer from '../pages/footer'
import Menu1 from '../pages/index-menu/menu1.vue'

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
    },
    {
      path: '/menu1',
      name: 'Menu1',
      component: Menu1
    }

  ]
})
