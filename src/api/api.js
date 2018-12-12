import axios from 'axios'

let host = 'http://127.0.0.1:8000'

//登录
export const login = params => {
  return axios.post(`${host}/login/`, params)
}

//注册

export const register = parmas => {
  return axios.post(`${host}/users/`, parmas)
}

//短信
export const getMessage = parmas => {
  return axios.post(`${host}/codes/`, parmas)
}