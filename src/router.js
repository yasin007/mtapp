import Vue from 'vue'
import Router from 'vue-router'
import App from './views/public/app' // 公共部分
import Accountheader from './views/accountheader/accountheader.vue'
import Register from './views/register.vue'
import Login from './views/login/login.vue'
import Home from './views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      component: App,
      children: [
        {
          path: 'register',
          name: 'register',
          components: {
            head: Accountheader,
            content: Register
          }
        },
        {
          path: 'login',
          name: 'login',
          components: {
            head: Accountheader,
            content: Login
          }
        },
        {
          path: 'home',
          name: 'home',
          components: {
            content: Home
          }
        }
      ]
    }
  ]
})
