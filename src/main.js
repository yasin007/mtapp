import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import './styles.scss'
//全局状态控制引入
import store from './store/store'

// 全局加载resource拦截器
import './axios/'
import Axios from 'axios'

Vue.prototype.$http = Axios

Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
