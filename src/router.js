import Vue from 'vue'
import Router from 'vue-router'
import App from './views/public/app' // 公共部分
import Users from './views/public/users'
import Accountheader from './views/accountheader/accountheader.vue'
import Register from './views/register/register.vue'
import Login from './views/login/login.vue'
import Home from './views/home/home.vue'
import Header from './views/header/header.vue'
import Footer from './views/footer/footer.vue'
import List from './views/list/list'
import AccountFotter from './components/public/footer/accountfooter'

//全局状态控制引入
Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          name: 'home',
          components: {
            head: Header,
            content: Home,
            footer: Footer
          }
        },
        {
          path: 'list/:id',
          name: 'list',
          components: {
            head: Header,
            content: List,
            footer: Footer
          }
        }
      ]
    },
    {
      path: '/users',
      component: Users,
      children: [
        {
          path: 'register',
          name: 'register',
          components: {
            head: Accountheader,
            content: Register,
            footer: AccountFotter
          }
        },
        {
          path: 'login',
          name: 'login',
          components: {
            content: Login,
            footer: AccountFotter
          }
        }
      ]
    }
  ]
})

//抛出路由
export default router
