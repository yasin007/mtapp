import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/register.vue'
import Login from './views/login.vue'
import Home from './views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home // 首页
    },
    {
      path: '/register',
      name: 'register',
      component: Register // 注册
    },
    {
      path: '/login',
      name: 'login',
      component: Login // 登陆
    }
  ]
})
