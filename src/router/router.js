import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/header'
import Body from '../components/body'
import Left from '../components/body-left'
import Middle from '../components/body-middle'
import Right from '../components/body-right'
import Footer from '../components/footer'
import Menu1 from '../components/index-menu/menu1.vue'
import HomePage from '../components/index-menu/home-page.vue'

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
      component: Body,
      components: {
        // default:Main,
        bodyMiddle: Middle,
        bodyLeft: Left,
        bodyRight: Right,
      }
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
    },
    {
      path: '/home-page',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }


  ]
})
