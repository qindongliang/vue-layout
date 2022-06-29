import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

axios.defaults.timeout = 500000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.params = {}


let http = axios.create({
  baseURL: "http://localhost:53000",
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

http.interceptors.request.use(function (config) {
  // token，以便能够通过认证
  config.headers['x-access-token'] = getToken()

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})



function request (method, url, params) {
  return http({
    method: method.toUpperCase(),
    url: url,
    data: method.toUpperCase() === 'POST' || method === 'PUT' ? params : null,
    params: method.toUpperCase() === 'GET' || method === 'DELETE' ? params : null
  })
}


export default request

// request('get',  '/data', {}).then(res=>{
//   console.log(JSON.stringify(res.data,null,2))
// })
//
// request('get',  '/data?id=1&id=33', {}).then(res=>{
//   console.log(JSON.stringify(res.data,null,2))
// })




