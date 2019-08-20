import axios from 'axios/index'
import { getToken } from './auth'

// 创建axios实例 请求拦截     
const service = axios.create({
  baseURL: 'http://39.98.190.128:8080',//process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    config.headers['Authorization'] = getToken() // 设置请求头，让每个请求携带自定义token 
    // getToken 就是获得 登录成功的时候 后台给我们返回的 token
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非200是抛错 可结合自己业务进行修改
  */
    const res = response.data
    if (res.code !== 200) {
      
      // 结合自己的业务进行修改
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
   
    return Promise.reject(error)
  }
)

export default service
