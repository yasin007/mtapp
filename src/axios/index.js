import axios from 'axios'

// http response 拦截器
axios.interceptors.response.use(
  undefined,
  error => {
    let res = error.response
    switch (res.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        // store.commit(types.LOGOUT);
        //router.replace({
        //  path: '/app/login',
        //  query: {redirect: router.currentRoute.fullPath}
        //})
        console.log('未登录 或者token过期')
        break
      case 403:
        console.log('您没有该操作权限')
        // alert('您没有该操作权限');
        break
      case 500:
        console.log('服务器错误')
        // alert('服务器错误');
        break
    }
    return Promise.reject(error.response.data)
  })
